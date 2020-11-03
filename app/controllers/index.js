import Controller from '@ember/controller';
import { action } from '@ember/object';
import { reject } from 'rsvp';
import { tracked } from '@glimmer/tracking';
import { MAX_PLAYERS, NUM_CITIES } from '../utils/constants';

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export default class IndexController extends Controller {
  joinCode = '';

  @tracked joinErrorMessage = '';

  @action
  createNewGame() {
    const code = this._generateRandomCode();
    this.store
      .queryRecord('game', { filter: { code } })
      .then(() => {
        this.createNewGame();
      })
      .catch(() => {
        this._initializeNewGame(code);
      });
  }

  @action
  joinGame() {
    if (!this.joinCode) return;
    this.store
      .queryRecord('game', { filter: { code: this.joinCode } })
      .then((game) => {
        if (game.inProgress) {
          this.joinErrorMessage = `Game ${this.joinCode} is already in progress`;
          reject(this.joinErrorMessage);
        }
        return game.players;
      })
      .then((players) => {
        if (players.length === MAX_PLAYERS) {
          this.joinErrorMessage = `Game ${this.joinCode} already has the maximum number of players`;
          reject(this.joinErrorMessage);
        }
        this.joinErrorMessage = '';
        this.transitionToRoute('game', this.joinCode);
      })
      .catch((e) => {
        this.joinErrorMessage = `Unexpected error: ${e.message}`;
        reject(this.joinErrorMessage);
      });
  }

  _generateRandomCode(length = 4) {
    let code = '';
    for (let i = 0; i < length; i++) {
      code += ALPHABET.charAt(Math.floor(Math.random() * ALPHABET.length));
    }
    return code;
  }

  _initializeNewGame(code) {
    let newGame = this.store.createRecord('game', {
      code,
      infectionDeck: [1, 2, 3],
      infectionDiscard: [],
      playerDeck: [4, 5, 6],
      playerDiscard: [],
    });

    newGame.save();

    for (let i = 0; i < NUM_CITIES; i++) {
      let city = this.store.createRecord('city', {
        cardId: i,
        game: newGame,
      });
      city.save();
    }

    this.transitionToRoute('game', code);
  }
}

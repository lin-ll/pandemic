import Controller from '@ember/controller';
import { action } from '@ember/object';
import { reject } from 'rsvp';

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export default class IndexController extends Controller {
  joinCode = '';

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
          reject('Game is already in progress: ' + this.joinCode);
        } else if (game.players.length === 4) {
          reject('Game has already reached max players: ' + this.joinCode);
        } else {
          this.transitionToRoute('game', this.joinCode);
        }
      })
      .catch((e) => {
        reject('Error: Game potentially does not exist: ' + this.joinCode);
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
    debugger;
    this.transitionToRoute('game', code);
  }
}

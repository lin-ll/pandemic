import Controller from '@ember/controller';
import { action } from '@ember/object';
import { hash, reject } from 'rsvp';
import { tracked } from '@glimmer/tracking';
import { CITIES, CITY_CARDS, MAX_PLAYERS } from '../utils/constants';

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export default class IndexController extends Controller {
  /**
   * @description The join code entered into the form
   * @type {String}
   */
  joinCode = '';

  /**
   * @description Informative message if creating a game results in an error
   * @type {String}
   */
  @tracked createErrorMessage = '';

  /**
   * @description Informative message if joining a game results in an error
   * @type {String}
   */
  @tracked joinErrorMessage = '';

  /**
   * @description Creates a new game in the DB and initializes game structure
   * @returns {Promise}
   */
  @action
  createNewGame() {
    const code = this._generateRandomCode();
    return this.store
      .queryRecord('game', { filter: { code } })
      .then(() => this.createNewGame())
      .catch(() => this._initializeNewGame(code));
  }

  /**
   * @description Joins an existing game in the DB if possible
   * @returns {Promise}
   */
  @action
  joinGame() {
    this.joinErrorMessage = '';
    if (!this.joinCode) {
      this.joinErrorMessage = 'Please provide a game code';
      return reject(this.joinErrorMessage);
    }
    return this.store
      .queryRecord('game', { filter: { code: this.joinCode } })
      .then((game) => hash({ game, players: game.players }))
      .then(({ game, players }) => {
        if (game.inProgress) {
          this.joinErrorMessage = `Game ${this.joinCode} is already in progress`;
        } else if (players.length >= MAX_PLAYERS) {
          this.joinErrorMessage = `Game ${this.joinCode} already has the maximum number of players`;
        }
      })
      .catch((e) => {
        this.joinErrorMessage = `Unexpected error: ${e.message}`;
      })
      .finally(() => {
        if (this.joinErrorMessage) {
          return reject(this.joinErrorMessage);
        }
        this.transitionToRoute('game', this.joinCode);
      });
  }

  /**
   * @private
   * @description Generates a random code for the new game
   * @param {Number} [length=4] Length of the random code
   * @returns {String}
   */
  _generateRandomCode(length = 4) {
    let code = '';
    for (let i = 0; i < length; i++) {
      code += ALPHABET.charAt(Math.floor(Math.random() * ALPHABET.length));
    }
    return code;
  }

  /**
   * @private
   * @description Initializes a new game with the given code
   * @param {String} code
   * @returns {Promise}
   */
  _initializeNewGame(code) {
    this.createErrorMessage = '';

    return this.store
      .createRecord('game', {
        code,
        infectionDeck: [...CITY_CARDS],
        infectionDiscard: [],
        playerDeck: [4, 5, 6],
        playerDiscard: [],
        cities: CITIES,
      })
      .save()
      .then(() => {
        this.transitionToRoute('game', code);
      })
      .catch((e) => {
        this.createErrorMessage = `Unexpected error: ${e.message}`;
        return reject(this.createErrorMessage);
      });
  }
}

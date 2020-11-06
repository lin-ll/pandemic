import Model, { attr, belongsTo } from '@ember-data/model';
import { HAND_LIMIT } from '../utils/constants';

export default class PlayerModel extends Model {
  @belongsTo('game') game;

  // Player's name
  @attr('string') name;

  // e.g. Dispatcher, Medic, Scientist, Researcher, etc.
  @attr('number') role;

  // Player's hand
  @attr('numberArray') hand;

  // Whether or not it is this player's turn
  @attr('boolean', { defaultValue: false }) isTurn;

  // Player needs to discard / use cards if over the hand limit
  get overHandLimit() {
    return this.hand ? this.hand.length > HAND_LIMIT : false;
  }

  /**
   * @description Change the player name
   * @param {String} newName
   * @returns {Promise|void}
   */
  changeName(newName) {
    if (newName && newName !== this.name) {
      this.name = newName;
      return this.save();
    }
  }

  /**
   * @description Change the player's role
   * @param {Number} newRole
   * @returns {Promise|void}
   */
  changeRole(newRole) {
    if (newRole !== this.role) {
      this.role = newRole;
      return this.save();
    }
  }
}

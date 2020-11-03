import Model, { attr, belongsTo } from '@ember-data/model';

const HAND_LIMIT = 7;

export default class PlayerModel extends Model {
  @belongsTo('game') game;

  // Player's name
  @attr('string') name;

  // e.g. Dispatcher, Medic, Scientist, Researcher, etc.
  @attr('number') role;

  // Player's hand
  @attr('numberArray') hand;

  // Player needs to discard / use cards if over the hand limit
  get overHandLimit() {
    return this.hand ? this.hand.length > HAND_LIMIT : false;
  }
}

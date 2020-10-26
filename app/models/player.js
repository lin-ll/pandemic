import Model, { attr } from '@ember-data/model';

const HAND_LIMIT = 7;

export default class PlayerModel extends Model {
  @attr('number') id;

  // Player's name
  @attr('string') name;

  // e.g. Dispatcher, Medic, Scientist, Researcher, etc.
  @attr('number') role;

  // Player's hand
  @attr('numberArray', { defaultValue: [] }) hand;

  // Player needs to discard / use cards if over the hand limit
  get overHandLimit() {
    return this.hand.length > HAND_LIMIT;
  }
}

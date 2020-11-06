import Component from '@glimmer/component';
import { action } from '@ember/object';

/**
 * @class NameChangerComponent
 * @extends Glimmer.Component
 * @param {DS.Model|null} [currentPlayer=null]
 * @param {Boolean} [disabled=false]
 *
 * @example
 * <NameChanger
 *  @currentPlayer={{this.currentPlayer}}
 *  @disabled={{false}}
 * />
 */
export default class NameChangerComponent extends Component {
  /**
   * @description The name entered into the form
   * @type {String}
   */
  currentPlayerName;

  /**
   * @description Change the current player's name
   * @returns {Promise|null}
   */
  @action
  changeName() {
    if (
      this.currentPlayerName &&
      this.currentPlayerName !== this.args.currentPlayer.name
    ) {
      this.args.currentPlayer.name = this.currentPlayerName;
      return this.args.currentPlayer.save();
    }
  }
}

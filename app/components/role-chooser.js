import Component from '@glimmer/component';
import { action } from '@ember/object';
import { ROLES } from '../utils/constants';

/**
 * @class RoleChooserComponent
 * @extends Glimmer.Component
 * @param {Array<DS.Model>} players Array of players in this game
 * @param {DS.Model} currentPlayer
 * @param {Boolean} [disabled=false]
 *
 * @example
 * <RoleChooser
 *  @players={{this.players}}
 *  @currentPlayer={{this.currentPlayer}}
 *  @disabled={{false}}
 * />
 */
export default class RoleChooserComponent extends Component {
  /**
   * @description List of available roles
   * @returns {Array}
   */
  get availableRoles() {
    const players = this.args.players || [];
    const usedRoles = players.map((player) => player.role);
    return [...ROLES].filter((role) => !usedRoles.includes(role.id));
  }

  /**
   * @description Change the current player's role
   * @param {Number} role
   * @returns {Promise|void}
   */
  @action
  changeRole(role) {
    return this.args.currentPlayer.changeRole(role);
  }
}

import Component from '@glimmer/component';
import { ROLES } from '../utils/constants';

/**
 * @class RoleChooser
 * @extends Glimmer.Component
 */
export default class RoleChooser extends Component {
  /**
   * @description List of available roles
   * @returns {Array}
   */
  get availableRoles() {
    const usedRoles = this.args.players.map((player) => player.role);
    return [...ROLES].filter((role) => !usedRoles.includes(role.id));
  }
}

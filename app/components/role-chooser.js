import Component from '@glimmer/component';
import { ROLES } from '../utils/constants';

/**
 * @class RoleChooser
 * @extends Glimmer.Component
 */
export default class RoleChooser extends Component {
  get availableRoles() {
    const usedRoles = this.args.players.map((player) => player.role);
    return [...ROLES].filter((role) => !usedRoles.includes(role.id));
  }

  constructor() {
    super(...arguments);
  }
}

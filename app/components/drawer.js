import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

/**
 * @class DrawerComponent
 * @extends Glimmer.Component
 * @param {DS.Model} game
 *
 * @example <DrawerComponent @game={{this.game}} />
 */
export default class DrawerComponent extends Component {
  /**
   * @description Whether or not to show the game info
   * @type {Boolean}
   */
  @tracked showGameInfo = false;

  /**
   * @description Whether or not to show the game info
   * @type {Boolean}
   */
  @tracked showTeamInfo = false;

  /**
   * @description Whether or not the show the drawer
   * @type {Boolean}
   */
  get showDrawer() {
    return this.showGameInfo || this.showTeamInfo;
  }

  /**
   * @description Show game info in the drawer
   */
  @action
  openGameInfo() {
    this.showGameInfo = true;
    this.showTeamInfo = false;
  }

  /**
   * @description Show team info in the drawer
   */
  @action
  openTeamInfo() {
    this.showTeamInfo = true;
    this.showGameInfo = false;
  }

  /**
   * @description Close the drawer
   */
  @action
  closeDrawer() {
    this.showGameInfo = false;
    this.showTeamInfo = false;
  }
}

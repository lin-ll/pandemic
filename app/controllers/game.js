import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class GameController extends Controller {
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

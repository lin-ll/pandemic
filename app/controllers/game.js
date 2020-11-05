import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class GameController extends Controller {
  /**
   * @description The name entered into the form
   * @type {String}
   */
  currentPlayerName;

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
   * @description Name of the player whose turn it is
   * @returns {String}
   */
  get currentTurn() {
    return this.model.game.players.find((player) => player.isTurn)?.name;
  }

  /**
   * @description Whether or not the show the drawer
   * @type {Boolean}
   */
  get showDrawer() {
    return this.showGameInfo || this.showTeamInfo;
  }

  /**
   * @description Change the current player's name
   * @returns {Promise|null}
   */
  @action
  changeName() {
    if (
      this.currentPlayerName &&
      this.currentPlayerName !== this.model.currentPlayer.name
    ) {
      this.model.currentPlayer.name = this.currentPlayerName;
      return this.model.currentPlayer.save();
    }
  }

  /**
   * @description Change the current player's role
   * @param {Number} role
   * @returns {Promise|null}
   */
  @action
  changeRole(role) {
    if (role !== this.model.currentPlayer.role && !this.model.game.inProgress) {
      this.model.currentPlayer.role = role;
      return this.model.currentPlayer.save();
    }
  }

  /**
   * @description Start the game
   * @returns {Promise}
   */
  @action
  startGame() {
    // TODO: Game setup
    this.model.game.inProgress = true;
    return this.model.game.save();
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

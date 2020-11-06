import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class GameController extends Controller {
  /**
   * @description Name of the player whose turn it is
   * @returns {String}
   */
  get currentTurn() {
    return this.model.game.players.find((player) => player.isTurn)?.name;
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
}

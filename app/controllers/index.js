import Controller from '@ember/controller';
import { action } from '@ember/object';

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export default class IndexController extends Controller {
  joinCode = '';

  @action
  createNewGame() {
    const code = this._generateRandomCode();
    // TODO
    this.transitionToRoute('game', code);
  }

  @action
  joinGame() {
    //TODO
  }

  _generateRandomCode(length = 4) {
    let code = '';
    for (let i = 0; i < length; i++) {
      code += ALPHABET.charAt(Math.floor(Math.random() * ALPHABET.length));
    }
    return code;
  }
}

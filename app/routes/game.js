import Route from '@ember/routing/route';

export default class GameRoute extends Route {
  model({ code }) {
    return this.store.queryRecord('game', { filter: { code } }).then((game) => {
      if (game.inProgress) {
        this.replaceWith('index');
      }
      return game;
    });
  }
}

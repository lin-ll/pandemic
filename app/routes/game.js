import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { hash } from 'rsvp';
import { MAX_PLAYERS } from '../utils/constants';

export default class GameRoute extends Route {
  @service('realtime-listener') realtimeListener;

  model({ code }) {
    return this.store
      .queryRecord('game', { filter: { code } })
      .then((game) => hash({ game, players: game.players }))
      .then(({ game, players }) => {
        // Subscribe to changes in the game
        this.realtimeListener.subscribe(this, game);

        // If the game is in progress or has the max number of players,
        // join as a watcher
        if (game.inProgress || players.length >= MAX_PLAYERS) {
          return { game };
        }

        // Otherwise, join as a player
        const currentPlayer = this.store.createRecord('player', {
          game,
          name: `Player ${players.length + 1}`,
          hand: [],
        });
        return hash({ game, currentPlayer: currentPlayer.save() });
      });
  }

  deactivate() {
    this.realtimeListener.unsubscribe(this, this.model.game);
  }
}

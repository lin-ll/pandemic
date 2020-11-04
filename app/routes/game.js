import Route from '@ember/routing/route';
import { hash } from 'rsvp';
import { MAX_PLAYERS } from '../utils/constants';

export default class GameRoute extends Route {
  model({ code }) {
    return this.store
      .queryRecord('game', { filter: { code } })
      .then((game) => hash({ game, players: game.players }))
      .then(({ game, players }) => {
        // if (game.inProgress || players.length >= MAX_PLAYERS) {
        //   this.replaceWith('index');
        // }

        const currentPlayer = this.store.createRecord('player', {
          game,
          name: `Player ${players.length + 1}`,
          hand: [],
        });

        return hash({ game, currentPlayer: currentPlayer.save() });
      });
  }
}

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | game-info-display', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    assert.expect(11);

    this.game = {
      infectionRate: 3,
      numOutbreaks: 5,
      playerDeck: [1, 2],
      numEpidemics: 0,
      remainingResearchStations: 1,
      diseaseCubesRed: 20,
      diseaseCubesYellow: 10,
      diseaseCubesBlue: 15,
      diseaseCubesBlack: 8,
    };

    await render(hbs`<GameInfoDisplay @game={{this.game}} />`);

    assert.dom('[data-test-game-info-display__headline]').exists({ count: 5 });
    assert
      .dom('[data-test-game-info-display__disease-cubes]')
      .exists({ count: 4 });

    assert
      .dom('[data-test-game-info-display__headline=infection]')
      .hasText(`${this.game.infectionRate}`);
    assert
      .dom('[data-test-game-info-display__headline=outbreaks]')
      .hasText(`${this.game.numOutbreaks}`);
    assert
      .dom('[data-test-game-info-display__headline=cards]')
      .hasText(`${this.game.playerDeck.length}`);
    assert
      .dom('[data-test-game-info-display__headline=epidemics]')
      .hasText(`${this.game.numEpidemics}`);
    assert
      .dom('[data-test-game-info-display__headline=stations]')
      .hasText(`${this.game.remainingResearchStations}`);

    assert
      .dom('[data-test-game-info-display__disease-cubes=red]')
      .hasText(`${this.game.diseaseCubesRed}`);
    assert
      .dom('[data-test-game-info-display__disease-cubes=yellow]')
      .hasText(`${this.game.diseaseCubesYellow}`);
    assert
      .dom('[data-test-game-info-display__disease-cubes=blue]')
      .hasText(`${this.game.diseaseCubesBlue}`);
    assert
      .dom('[data-test-game-info-display__disease-cubes=black]')
      .hasText(`${this.game.diseaseCubesBlack}`);
  });
});

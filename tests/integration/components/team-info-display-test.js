import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { ROLES } from 'pandemic/utils/constants';

module('Integration | Component | team-info-display', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    assert.expect(5);

    this.players = [
      { name: 'Alice', role: 0, isTurn: true },
      { name: 'Bob', isTurn: false },
    ];

    await render(hbs`<TeamInfoDisplay @players={{this.players}} />`);

    assert
      .dom('[data-test-team-info-display__player]')
      .exists({ count: this.players.length });
    assert.dom('[data-test-team-info-display__player]').hasText('Alice');
    assert
      .dom('[data-test-team-info-display__role]')
      .exists({ count: this.players.length });
    assert.dom('[data-test-team-info-display__role]').hasText(ROLES[0].name);
    assert.dom('[data-test-team-info-display__turn-star]').exists({ count: 1 });
  });
});

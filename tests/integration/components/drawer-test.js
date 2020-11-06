import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | drawer', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    assert.expect(18);

    this.game = {};
    await render(hbs`<Drawer @game={{this.game}} />`);

    assert.dom('[data-test-drawer__btn=game]').exists();
    assert.dom('[data-test-drawer__btn=team]').exists();
    assert.dom('[data-test-drawer]').doesNotHaveClass('drawer--open');
    assert
      .dom('[data-test-drawer__close-btn]')
      .doesNotExist('the close btn is not shown');
    assert
      .dom('[data-test-drawer__game-info]')
      .doesNotExist('game info is not shown');
    assert
      .dom('[data-test-drawer__team-info]')
      .doesNotExist('team info is not shown');

    await click('[data-test-drawer__btn=game]');
    assert.dom('[data-test-drawer]').hasClass('drawer--open');
    assert
      .dom('[data-test-drawer__close-btn]')
      .exists('the close btn is now shown');
    assert
      .dom('[data-test-drawer__game-info]')
      .exists('game info is now shown');
    assert
      .dom('[data-test-drawer__team-info]')
      .doesNotExist('team info is still not shown');

    await click('[data-test-drawer__btn=team]');
    assert.dom('[data-test-drawer]').hasClass('drawer--open');
    assert
      .dom('[data-test-drawer__close-btn]')
      .exists('the close btn is now shown');
    assert
      .dom('[data-test-drawer__game-info]')
      .doesNotExist('game info is no longer shown');
    assert
      .dom('[data-test-drawer__team-info]')
      .exists('team info is now shown');

    await click('[data-test-drawer__close-btn]');
    assert.dom('[data-test-drawer]').doesNotHaveClass('drawer--open');
    assert
      .dom('[data-test-drawer__close-btn]')
      .doesNotExist('the close btn is not shown');
    assert
      .dom('[data-test-drawer__game-info]')
      .doesNotExist('game info is no longer shown');
    assert
      .dom('[data-test-drawer__team-info]')
      .doesNotExist('team info is no longer shown');
  });
});

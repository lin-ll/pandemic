import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { ROLES } from 'pandemic/utils/constants';

module('Integration | Component | role-chooser', function (hooks) {
  setupRenderingTest(hooks);

  test('it does not render if no current player', async function (assert) {
    assert.expect(1);

    await render(hbs`
      <RoleChooser
        @players={{this.players}}
        @currentPlayer={{this.currentPlayer}}
        @disabled={{this.disabled}}
      />
    `);

    assert.dom('[data-test-role-chooser]').doesNotExist();
  });

  test('it renders correctly for a player but disables if specified', async function (assert) {
    assert.expect(2);

    this.currentPlayer = {};
    this.disabled = true;

    await render(hbs`
      <RoleChooser
        @players={{this.players}}
        @currentPlayer={{this.currentPlayer}}
        @disabled={{this.disabled}}
      />
    `);

    assert.dom('[data-test-role-chooser]').exists();
    assert.dom('[data-test-role-chooser__btn]').isDisabled();
  });

  test('it renders correctly for a player with no role', async function (assert) {
    assert.expect(3);

    this.currentPlayer = {};

    await render(hbs`
      <RoleChooser
        @players={{this.players}}
        @currentPlayer={{this.currentPlayer}}
        @disabled={{this.disabled}}
      />
    `);

    assert.dom('[data-test-role-chooser]').exists();
    assert.dom('[data-test-role-chooser__btn]').hasText('Choose a Role');

    await click('[data-test-role-chooser__btn]');

    assert
      .dom('[data-test-role-chooser__role]')
      .exists({ count: ROLES.length });
  });

  test('it renders correctly for a player with a role', async function (assert) {
    assert.expect(3);

    const roleId = 0;
    this.currentPlayer = { role: roleId };
    this.players = [this.currentPlayer];

    await render(hbs`
      <RoleChooser
        @players={{this.players}}
        @currentPlayer={{this.currentPlayer}}
        @disabled={{this.disabled}}
      />
    `);

    assert.dom('[data-test-role-chooser]').exists();
    assert.dom('[data-test-role-chooser__btn]').hasText(ROLES[roleId].name);

    await click('[data-test-role-chooser__btn]');

    assert
      .dom('[data-test-role-chooser__role]')
      .exists({ count: ROLES.length - this.players.length });
  });

  test('it renders the available roles correctly', async function (assert) {
    assert.expect(3);

    this.currentPlayer = {};
    this.players = [];

    for (let i = 0; i < ROLES.length - 1; i++) {
      this.players.push({ role: i });
    }

    await render(hbs`
      <RoleChooser
        @players={{this.players}}
        @currentPlayer={{this.currentPlayer}}
        @disabled={{this.disabled}}
      />
    `);

    await click('[data-test-role-chooser__btn]');

    assert
      .dom('[data-test-role-chooser__role]')
      .exists({ count: ROLES.length - this.players.length });

    this.set('players', [...this.players, { role: ROLES.length - 1 }]);

    assert.dom('[data-test-role-chooser__role]').doesNotExist();
    assert.dom('[data-test-role-chooser__role--none]').exists();
  });
});

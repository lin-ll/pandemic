import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { ROLES } from 'pandemic/utils/constants';

function renderRoleInfo() {
  return render(hbs`
    {{#let (get-role-info this.roleId) as |role|}}
      {{role.id}},{{role.name}},{{role.description}}
    {{/let}}
  `);
}

module('Integration | Helper | get-role-info', function (hooks) {
  setupRenderingTest(hooks);

  test('it gets the correct role info for the given role id', async function (assert) {
    for (let i = 0; i < ROLES.length; i++) {
      const role = ROLES[i];
      this.set('roleId', i);
      await renderRoleInfo();
      assert.equal(
        this.element.textContent.trim(),
        `${role.id},${role.name},${role.description}`
      );
    }
  });
});

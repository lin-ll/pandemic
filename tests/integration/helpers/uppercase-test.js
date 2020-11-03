import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | uppercase', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.set('string', 'foobar');

    await render(hbs`{{uppercase this.string}}`);

    assert.equal(this.element.textContent.trim(), 'FOOBAR');
  });
});

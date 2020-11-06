import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | get-disease-icon', function (hooks) {
  setupRenderingTest(hooks);

  test('it returns the correct icon for the given status', async function (assert) {
    this.set('status', 0);
    await render(hbs`{{get-disease-icon this.status}}`);
    assert.equal(this.element.textContent.trim(), 'skull');

    this.set('status', 1);
    await render(hbs`{{get-disease-icon this.status}}`);
    assert.equal(this.element.textContent.trim(), 'vial');

    this.set('status', 2);
    await render(hbs`{{get-disease-icon this.status}}`);
    assert.equal(this.element.textContent.trim(), 'ban');

    this.set('status', 3);
    await render(hbs`{{get-disease-icon this.status}}`);
    assert.equal(
      this.element.textContent.trim(),
      '',
      'returns empty string for an invalid number'
    );

    this.set('status', 'foobar');
    await render(hbs`{{get-disease-icon this.status}}`);
    assert.equal(
      this.element.textContent.trim(),
      '',
      'returns empty string for an invalid status'
    );
  });
});

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import {
  fillIn,
  render,
  setupOnerror,
  triggerEvent,
} from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { defer } from 'rsvp';
import sinon from 'sinon';

module('Integration | Component | name-changer', function (hooks) {
  setupRenderingTest(hooks);

  test('it does not show the form if no current player', async function (assert) {
    assert.expect(2);

    await render(hbs`
      <NameChanger
        @currentPlayer={{this.currentPlayer}}
        @disabled={{this.disabled}}
      />
    `);

    assert.dom('[data-test-name-changer__form]').doesNotExist();
    assert.dom('[data-test-name-changer__non-player]').exists();
  });

  test('it shows the form if there is a current player but disables if specified', async function (assert) {
    assert.expect(3);

    this.currentPlayer = {};
    this.disabled = true;

    await render(hbs`
      <NameChanger
        @currentPlayer={{this.currentPlayer}}
        @disabled={{this.disabled}}
      />
    `);

    assert.dom('[data-test-name-changer__form]').exists();
    assert.dom('[data-test-name-changer__non-player]').doesNotExist();
    assert.dom('[data-test-name-changer__input]').isDisabled();
  });

  test('it shows the form if there is a current player with the correct value', async function (assert) {
    assert.expect(4);

    this.currentPlayer = {};

    await render(hbs`
      <NameChanger
        @currentPlayer={{this.currentPlayer}}
        @disabled={{this.disabled}}
      />
    `);

    assert.dom('[data-test-name-changer__form]').exists();
    assert.dom('[data-test-name-changer__non-player]').doesNotExist();
    assert
      .dom('[data-test-name-changer__input]')
      .hasValue('', 'the current player has no name');

    const newName = 'Alice';
    this.set('currentPlayer.name', newName);

    assert.dom('[data-test-name-changer__input]').hasValue(newName);
  });

  test('it calls the correct method when submitting the form', async function (assert) {
    assert.expect(3);

    this.currentPlayer = { name: 'Alice', changeName: sinon.stub() };

    await render(hbs`
      <NameChanger
        @currentPlayer={{this.currentPlayer}}
        @disabled={{this.disabled}}
      />
    `);

    assert
      .dom('[data-test-name-changer__input]')
      .hasValue(this.currentPlayer.name);

    await focus('[data-test-name-changer__input]');
    await fillIn('[data-test-name-changer__input]', 'Bob');
    await triggerEvent('[data-test-name-changer__input]', 'focusout');

    assert.ok(this.currentPlayer.changeName.calledWithExactly('Bob'));

    await fillIn('[data-test-name-changer__input]', 'Charlie');
    await triggerEvent('[data-test-name-changer__form]', 'submit');

    assert.ok(this.currentPlayer.changeName.calledWithExactly('Charlie'));
  });

  test('it renders correctly when form is submitted', async function (assert) {
    assert.expect(6);

    this.currentPlayer = { changeName: sinon.stub().resolves() };

    await render(hbs`
      <NameChanger
        @currentPlayer={{this.currentPlayer}}
        @disabled={{this.disabled}}
      />
    `);

    assert.dom('[data-test-name-changer__spinner]').doesNotExist();
    assert.dom('[data-test-name-changer__success]').doesNotExist();
    assert.dom('[data-test-name-changer__error]').doesNotExist();

    await triggerEvent('[data-test-name-changer__form]', 'submit');

    assert.dom('[data-test-name-changer__spinner]').doesNotExist();
    assert.dom('[data-test-name-changer__success]').exists();
    assert.dom('[data-test-name-changer__error]').doesNotExist();
  });

  test('it renders correctly when form is rejected', async function (assert) {
    assert.expect(4);

    const rejectValue = 'foobar';
    this.currentPlayer = { changeName: sinon.stub().rejects(rejectValue) };

    await render(hbs`
      <NameChanger
        @currentPlayer={{this.currentPlayer}}
        @disabled={{this.disabled}}
      />
    `);

    setupOnerror((error) => {
      assert.equal(error, rejectValue);
    });

    await triggerEvent('[data-test-name-changer__form]', 'submit');

    assert.dom('[data-test-name-changer__spinner]').doesNotExist();
    assert.dom('[data-test-name-changer__success]').doesNotExist();
    assert.dom('[data-test-name-changer__error]').exists();
  });

  test('it renders correctly when form is submitting', async function (assert) {
    assert.expect(3);

    const deferred = defer();
    this.currentPlayer = { changeName: sinon.stub().returns(deferred.promise) };

    await render(hbs`
      <NameChanger
        @currentPlayer={{this.currentPlayer}}
        @disabled={{this.disabled}}
      />
    `);

    await triggerEvent('[data-test-name-changer__form]', 'submit');

    assert.dom('[data-test-name-changer__spinner]').exists();
    assert.dom('[data-test-name-changer__success]').doesNotExist();
    assert.dom('[data-test-name-changer__error]').doesNotExist();

    await deferred.resolve();
  });
});

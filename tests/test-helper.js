import Application from 'pandemic/app';
import config from 'pandemic/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';
import setupSinon from 'ember-sinon-qunit';

setApplication(Application.create(config.APP));

setupSinon();

start();

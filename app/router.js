import EmberRouter from '@ember/routing/router';
import config from 'pandemic/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('game', { path: '/:code' });
  this.route('not-found', { path: '/*path' });
});

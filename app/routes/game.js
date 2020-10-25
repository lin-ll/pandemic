import Route from '@ember/routing/route';

export default class GameRoute extends Route {
  model({ code }) {
    return { code };
  }
}

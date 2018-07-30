import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('finished', { path: '/:name' });
  this.route('catch-all', { path: '/*path' });
});

export default Router;

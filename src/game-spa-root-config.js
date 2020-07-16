import { registerApplication, start } from 'single-spa';

registerApplication({
  name: '@game-spa/home',
  app: () => System.import('@game-spa/home'),
  activeWhen: '/home'
});

registerApplication({
  name: '@game-spa/favorites',
  app: () => System.import('@game-spa/favorites'),
  activeWhen: '/favorites'
});

start({
  urlRerouteOnly: true
});

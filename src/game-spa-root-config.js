import { registerApplication, start } from 'single-spa';

registerApplication({
  name: 'navbar',
  app: () => System.import('@game-spa/navbar'),
  activeWhen: '/'
});

registerApplication({
  name: 'home',
  app: () => System.import('@game-spa/home'),
  activeWhen: '/home'
});

registerApplication({
  name: 'favorites',
  app: () => System.import('@game-spa/favorites'),
  activeWhen: '/favorites'
});

start();

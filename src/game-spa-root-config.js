import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@game-spa/home",
  app: () => System.import("@game-spa/home"),
  activeWhen: ["/"]
});

start();

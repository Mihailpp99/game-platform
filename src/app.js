import page from "../node_modules/page/page.mjs";
import { gamesCatalogController } from "./controllers/gamesCatalogTemplate.js";
import { homeController } from "./controllers/homeController.js";
import { wizardGameplayController } from "./controllers/wizardGame/wizardGameplayController.js";
import { wizardHomeController } from "./controllers/wizardGame/wizardHomeController.js";
import { mainContentMiddleware } from "./midlewares/mainContentMiddleware.js";
import {
  navigationGamplayMiddleware,
  navigationMiddleware,
} from "./midlewares/navigationMiddleware.js";

page(navigationMiddleware);
page(mainContentMiddleware);

page("/", homeController);
page("/games", gamesCatalogController);
page("/wizard/home", wizardHomeController);
page("/wizard/gameplay", navigationGamplayMiddleware, wizardGameplayController);

page.start();

import page from "../node_modules/page/page.mjs";
import {
  logOutController,
  loginController,
  registerController,
} from "./controllers/authController.js";
import { gamesCatalogController } from "./controllers/gamesCatalogTemplate.js";
import { homeController } from "./controllers/homeController.js";
import { wizardGameplayController } from "./controllers/wizardGame/wizardGameplayController.js";
import { wizardHomeController } from "./controllers/wizardGame/wizardHomeController.js";
import { wizardShopController } from "./controllers/wizardGame/wizardShopController.js";
import { authMiddleware } from "./midlewares/authMiddleware.js";
import { mainContentMiddleware } from "./midlewares/mainContentMiddleware.js";
import {
  navigationGamplayMiddleware,
  navigationMiddleware,
} from "./midlewares/navigationMiddleware.js";

// middlewares
page(authMiddleware);
page(navigationMiddleware);
page(mainContentMiddleware);

// pages
page("/", homeController);
page("/games", gamesCatalogController);

// wizard game
page("/wizard/home", wizardHomeController);
page(
  "/wizard/gameplay/:level",
  navigationGamplayMiddleware,
  wizardGameplayController
);
page("/wizard/shop", wizardShopController);

// authentication
page("/register", registerController);
page("/login", loginController);
page("/logout", logOutController);

page.start();

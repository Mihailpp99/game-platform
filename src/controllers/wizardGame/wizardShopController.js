import { wizardShopTemplate } from "../../views/wizardGame/wizardShopTemplate.js";

export const wizardShopController = (ctx) => {
  ctx.renderMainContent(wizardShopTemplate());
};

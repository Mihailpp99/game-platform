import { gamesCatalogTemplate } from "../views/gamesCatalogTemplate.js";

export const gamesCatalogController = (ctx) => {
  ctx.renderMainContent(gamesCatalogTemplate());
};

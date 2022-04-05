import { homeTemplate } from "../views/homeTemplate.js";

export const homeController = (ctx) => {
  ctx.renderMainContent(homeTemplate());
};

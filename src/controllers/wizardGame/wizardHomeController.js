import { wizardHomeTemplate } from "../../views/wizardGame/wizardHomeTemplate.js";

export const wizardHomeController = (ctx) => {
  ctx.renderMainContent(wizardHomeTemplate());
};

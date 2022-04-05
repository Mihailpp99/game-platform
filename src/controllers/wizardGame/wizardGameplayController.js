import { gameFunctions } from "../../gamesLogic/wizardGame/main.js";
import { wizardGameplayTemplate } from "../../views/wizardGame/wizardGameplayTemplate.js";

export const wizardGameplayController = (ctx) => {
  ctx.renderMainContent(wizardGameplayTemplate());
  gameFunctions();
};

import { gameFunctions } from "../../gamesLogic/wizardGame/main.js";
import { wizardGameplayTemplate } from "../../views/wizardGame/wizardGameplayTemplate.js";
import { getUserForWizardGame } from "../../services/wizardGame/wizardGame.js";

export const wizardGameplayController = async (ctx) => {
  ctx.renderMainContent(wizardGameplayTemplate());
  let userData = await getUserForWizardGame();
  gameFunctions(userData, ctx);
};

import { render } from "../../node_modules/lit-html/lit-html.js";

const mainContentElement = document.getElementById("mainContent");

export const mainContentMiddleware = (ctx, next) => {
  ctx.renderMainContent = (template) => {
    render(template, mainContentElement);
  };
  next();
};

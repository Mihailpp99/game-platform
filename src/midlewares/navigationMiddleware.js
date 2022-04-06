import { render } from "../../node_modules/lit-html/lit-html.js";
import {
  navigationGameplay,
  navigationTemplate,
} from "../views/navigationTemplate.js";

const navElement = document.getElementById("navigation");

export const navigationMiddleware = (ctx, next) => {
  let activeElement = ctx.page.current;
  render(navigationTemplate(ctx.user, activeElement), navElement);
  next();
};

export const navigationGamplayMiddleware = (ctx, next) => {
  window.isPageChanged = false;
  render(navigationGameplay(ctx), navElement);
  next();
};

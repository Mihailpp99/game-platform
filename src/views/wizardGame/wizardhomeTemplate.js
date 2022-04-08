import { html } from "../../../node_modules/lit-html/lit-html.js";

export const wizardHomeTemplate = (userData) => html`
  <div id="wizardMain">
    <p>power: ${userData.get("power")}</p>
    <p>heroSpeed: ${userData.get("heroSpeed")}</p>
    <p>heroHealth: ${userData.get("heroHealth")}</p>
    <p>maxLevel: ${userData.get("maxLevel")}</p>
    <p>fireballSpeed: ${userData.get("fireballSpeed")}</p>
    <a href="/wizard/gameplay">Start game</a>
  </div>
`;

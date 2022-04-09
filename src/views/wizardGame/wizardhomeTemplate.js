import { html } from "../../../node_modules/lit-html/lit-html.js";

export const wizardHomeTemplate = (userData) => html`
  <div id="wizardMain">
    <p>power: ${userData.power}</p>
    <p>heroSpeed: ${userData.heroSpeed}</p>
    <p>heroHealth: ${userData.heroHealth}</p>
    <p>maxLevel: ${userData.maxLevel}</p>
    <p>fireballSpeed: ${userData.fireballSpeed}</p>
    <p>fireballSawnInterval: ${userData.fireballSpawnInterval}</p>
    <p>fireballDamage: ${userData.fireballDamage}</p>
    <a href="/wizard/gameplay">Start game</a>
  </div>
`;

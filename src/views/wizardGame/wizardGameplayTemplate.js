import { html } from "../../../node_modules/lit-html/lit-html.js";

export const wizardGameplayTemplate = () =>
  html`
    <div class="gameScore">
      <div>Killed bugs:<span id="killedBugs">0</span></div>
      <div>Gold:<span id="goldTaken">0</span></div>
    </div>
    <div id="wizardMain"></div>
  `;

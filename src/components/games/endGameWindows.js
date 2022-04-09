import { html } from "../../../node_modules/lit-html/lit-html.js";

export const wizardEndGameView = (
  goldWon,
  mustKillBugs,
  killedBugs,
  changePage
) => html`
  <div id="endGameWrapper">
    <h3>Results</h3>
    <p>You had to kill ${mustKillBugs} bugs</p>
    <p>You killed ${killedBugs} bugs</p>
    <p>You won ${goldWon} gold</p>
    <button>New Game</button>
    <button>Next level</button>
    <button @click="${() => changePage("/wizard/home")}">Home</button>
  </div>
`;

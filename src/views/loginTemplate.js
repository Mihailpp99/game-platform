import { html } from "../../node_modules/lit-html/lit-html.js";

export const loginTemplate = (ctx) => html`
  <div id="authContainer">
    <h3 class="centerTitle">Login</h3>

    <form>
      <div id="formWrapper">
        <div class="formElementWrapper">
          <label for="username">Username:</label>
          <input type="text" name="username" class="baiscInput" />
        </div>
        <div class="formElementWrapper">
          <label for="password">Password:</label>
          <input type="password" name="password" class="baiscInput" />
        </div>
      </div>
    </form>
  </div>
`;

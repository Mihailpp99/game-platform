import { html } from "../../node_modules/lit-html/lit-html.js";
import { submitButton } from "../components/elements/buttons.js";

export const loginTemplate = (ctx, logIn) => html`
  <div class="containerAuth">
    <div class="ilustration-bg"></div>
    <div id="authContainer">
      <div class="logoImg centerElement" style="margin-top:5%;"></div>
      <div id="navigationControlsLogin">
        <span class="loginText">Login</span>
        <span class="loginText">Register</span>
      </div>

      <form @submit=${(e) => logIn(e, ctx)}>
        <div id="formWrapper">
          <div class="formElementWrapper">
            <label for="username" class="label">Username:</label>
            <input type="text" name="username" class="baiscInput" />
          </div>
          <div class="formElementWrapper">
            <label for="password" class="label">Password:</label>
            <input type="password" name="password" class="baiscInput" />
          </div>
          <div style="text-align:center;">${submitButton("Login")}</div>
        </div>
      </form>
    </div>
  </div>
`;

// export const loginTemplate = (ctx, logIn) => html`
//   <div id="authContainer">
//     <h3 class="centerTitle">Login</h3>

//     <form @submit=${(e) => logIn(e, ctx)}>
//       <div id="formWrapper">
//         <div class="formElementWrapper">
//           <label for="username" class="label">Username:</label>
//           <input type="text" name="username" class="baiscInput" />
//         </div>
//         <div class="formElementWrapper">
//           <label for="password" class="label">Password:</label>
//           <input type="password" name="password" class="baiscInput" />
//         </div>
//         <div style="text-align:center;">${submitButton("Login")}</div>
//       </div>
//     </form>
//   </div>
// `;

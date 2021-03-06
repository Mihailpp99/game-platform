import { html } from "../../node_modules/lit-html/lit-html.js";

const loggedLinks = html`<li><a href="/logout">Logout</a></li>`;

const loggedOutLinks = html`<li><a href="/login">Login</a></li>
  <li><a href="/register">Register</a></li>`;

export const navigationTemplate = (user, activeLink) => html`<ul
  class="navigation"
>
  <li class="${activeLink === "/" ? "active" : "no"}"><a href="/">Home</a></li>
  <li class="${activeLink === "/games" ? "active" : "no"}">
    <a href="/games">Games</a>
  </li>
  ${user ? loggedLinks : loggedOutLinks}
</ul>`;

export const navigationGameplay = (ctx) => html`<ul class="navigation">
  <li><button @click="${() => changePage(ctx, "/")}">Home</button></li>
  <li>
    <button @click="${() => changePage(ctx, "/")}">Games</button>
  </li>
  <li><button>Logout</button></li>
</ul>`;

function changePage(ctx, path) {
  window.isPageChanged = true;
  ctx.page.redirect(path);
}

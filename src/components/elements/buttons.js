import { html, nothing } from "../../../node_modules/lit-html/lit-html.js";

export const basicButton = (text, onClick) => html`
  <button
    style="color:black;font-size:1.4rem;padding:5px 10px; margin-top:20px; border:none;background-color:hsl(198, 69%, 47%);"
    @click="${onClick}"
  >
    ${text}
  </button>
`;

export const submitButton = (text) => html`
  <button
    type="submit"
    style="color:black;font-size:1.4rem;padding:5px 10px; margin-top:20px; border:none;background-color:hsl(198, 69%, 47%);"
  >
    ${text}
  </button>
`;

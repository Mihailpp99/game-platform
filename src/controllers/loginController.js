import { loginTemplate } from "../views/loginTemplate.js";

export const loginController = (ctx) => {
  ctx.renderMainContent(loginTemplate());
  logIn();
};

function logIn() {
  // Create a new instance of the user class
  var user = Parse.User.logIn("pesho", "pesho")
    .then(function (user) {
      console.log(
        "User created successful with name: " +
          user.get("username") +
          " and email: " +
          user.get("email")
      );
    })
    .catch(function (error) {
      console.log("Error: " + error.code + " " + error.message);
    });
}

import { loginTemplate } from "../views/loginTemplate.js";
import { registerTemplate } from "../views/registerTemplate.js";

export const logOutController = (ctx) => {
  console.log("in");
  Parse.User.logOut().then(() => {
    console.log("out");
    ctx.page.redirect("/");
  });
};

export const loginController = (ctx) => {
  ctx.renderMainContent(loginTemplate(ctx, logIn));
  //logIn(ctx);
};

function logIn(e, ctx) {
  // Create a new instance of the user class
  console.log(e);

  e.preventDefault();
  let { username, password } = Object.fromEntries(
    new FormData(e.currentTarget)
  );

  Parse.User.logIn(username, password)
    .then((user) => {
      ctx.page.redirect("/games");
    })
    .catch(function (error) {
      console.log("Error: " + error.code + " " + error.message);
    });
}

export const registerController = (ctx) => {
  ctx.renderMainContent(registerTemplate());
  //signUp();
};

function signUp() {
  // Create a new instance of the user class
  var user = new Parse.User();
  user.set("username", "pesho");
  user.set("password", "pesho");
  user.set("email", "misho9903@gmail.com");

  // other fields can be set just like with Parse.Object
  //user.set("phone", "415-392-0202");

  user
    .signUp()
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

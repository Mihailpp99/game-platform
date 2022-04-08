import { wizardHomeTemplate } from "../../views/wizardGame/wizardHomeTemplate.js";

export const wizardHomeController = (ctx) => {
  ctx.renderMainContent(wizardHomeTemplate());
  createUserForWizard();
};

async function createUserForWizard() {
  const user = Parse.User.current();
  const wizardUser = new Parse.Object("wizardUsers");
  const query = new Parse.Query(wizardUser);
  query.equalTo("user", user);
  const userPosts = await query.find();
  if (userPosts.length == 0) {
    const person = new Parse.Object("wizardUsers");
    person.set("user", user);
    person.set("power", 1);
    person.set("maxLevel", 1);
    person.set("heroHealth", 1);
    person.set("heroSpeed", 6);
    person.set("fireballSpeed", 6);
    await person.save();
  } else {
    console.log("already exist");
  }
}

async function saveNewPerson() {
  const person = new Parse.Object("Person");

  person.set("name", "John Snow");
  person.set("age", 27);
  try {
    let result = await person.save();
    alert("New object created with objectId: " + result.id);
  } catch (error) {
    alert("Failed to create new object, with error code: " + error.message);
  }
}

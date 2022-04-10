import { wizardHomeTemplate } from "../../views/wizardGame/wizardHomeTemplate.js";
import { getUserForWizardGame } from "../../services/wizardGame/wizardGame.js";

export const wizardHomeController = async (ctx) => {
  let userData = await createOrGetUserForWizard(ctx);
  ctx.renderMainContent(wizardHomeTemplate(userData));
};

async function createOrGetUserForWizard(ctx) {
  let wizardUsers = await getUserForWizardGame();
  if (!wizardUsers) {
    console.log("create new");
    const user = Parse.User.current();
    const person = new Parse.Object("WizardUsers");
    person.set("user", user);
    person.set("power", 1);
    person.set("maxLevel", 1);
    person.set("heroHealth", 1);
    person.set("heroSpeed", 6);
    person.set("fireballSpeed", 6);
    person.set("fireballSpawnInterval", 4000);
    person.set("fireballDamage", 1);
    await person.save();
    ctx.page.redirect("/games/wizard/home");
    return person;
  } else {
    return wizardUsers;
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

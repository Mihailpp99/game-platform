import { wizardHomeTemplate } from "../../views/wizardGame/wizardHomeTemplate.js";

export const wizardHomeController = async (ctx) => {
  let userData = await createOrGetUserForWizard();
  ctx.renderMainContent(wizardHomeTemplate(userData));
};

async function createOrGetUserForWizard() {
  let wizardUsers = await getUserForWizardGame();
  if (wizardUsers.length == 0) {
    const user = Parse.User.current();
    const person = new Parse.Object("WizardUsers");
    person.set("user", user);
    person.set("power", 1);
    person.set("maxLevel", 1);
    person.set("heroHealth", 1);
    person.set("heroSpeed", 6);
    person.set("fireballSpeed", 6);
    person.set("gold", 0);
    await person.save();
    return person;
  } else {
    return wizardUsers[0];
  }
}

export const getUserForWizardGame = async () => {
  const user = Parse.User.current();
  const query = new Parse.Query("WizardUsers");
  query.equalTo("user", user);

  let wizardUsers = await query.find();
  return wizardUsers;
};

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

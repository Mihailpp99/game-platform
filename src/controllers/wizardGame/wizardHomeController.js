import { wizardHomeTemplate } from "../../views/wizardGame/wizardHomeTemplate.js";

export const wizardHomeController = async (ctx) => {
  let userData = await createOrGetUserForWizard();
  ctx.renderMainContent(wizardHomeTemplate(userData));
};

async function createOrGetUserForWizard() {
  const user = Parse.User.current();

  const query = new Parse.Query("WizardUsers");
  query.equalTo("user", user);

  const wizardUsers = await query.find();
  if (wizardUsers.length == 0) {
    const person = new Parse.Object("WizardUsers");
    person.set("user", user);
    person.set("power", 1);
    person.set("maxLevel", 1);
    person.set("heroHealth", 1);
    person.set("heroSpeed", 6);
    person.set("fireballSpeed", 6);
    await person.save();
    return person;
  } else {
    return wizardUsers[0];
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

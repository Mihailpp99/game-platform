import { wizardHomeTemplate } from "../../views/wizardGame/wizardHomeTemplate.js";

export const wizardHomeController = (ctx) => {
  ctx.renderMainContent(wizardHomeTemplate());
  saveNewPerson();
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

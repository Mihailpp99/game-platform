export const getUserForWizardGame = async () => {
  const user = Parse.User.current();
  const query = new Parse.Query("WizardUsers");
  query.equalTo("user", user);

  let wizardUsers = await query.find();
  console.log(wizardUsers);
  console.log(wizardUsers[0]);
  let userData = {
    power: Number(wizardUsers[0].get("power")),
    heroHealth: Number(wizardUsers[0].get("heroHealth")),
    heroSpeed: Number(wizardUsers[0].get("heroSpeed")),
    fireballSpeed: Number(wizardUsers[0].get("fireballSpeed")),
    fireballSpawnInterval: Number(wizardUsers[0].get("fireballSpawnInterval")),
    fireballDamage: Number(wizardUsers[0].get("fireballDamage")),
    maxLevel: Number(wizardUsers[0].get("maxLevel")),
    gold: Number(wizardUsers[0].get("gold")),
    objectId: wizardUsers[0].id,
  };
  console.log(userData);

  return userData;
};

export const saveAfterGame = async (goldWon, goldOld, isLevelUp) => {
  try {
    const user = Parse.User.current();
    const query = new Parse.Query("WizardUsers");
    query.equalTo("user", user);
    let wizardUsers = await query.find();
    let lastLevel = Number(wizardUsers[0].get("maxLevel"));
    wizardUsers[0].set("gold", goldOld + goldWon);
    if (isLevelUp) {
      wizardUsers[0].set("maxLevel", lastLevel + 1);
    }
    await wizardUsers[0].save();

    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const incrementWizardUsers = async (data, isAddition) => {
  const query = new Parse.Query("WizardUsers");
  query.equalTo("user", user);
  let wizardUsers = await query.find();

  wizardUsers[0].increment(data.name, data.value);
  await wizardUsers[0].save();
};

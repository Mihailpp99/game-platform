export const getUserForWizardGame = async () => {
  const user = Parse.User.current();
  const query = new Parse.Query("WizardUsers");
  query.equalTo("user", user);

  let wizardUsers = await query.find();
  let userData = {
    power: Number(wizardUsers[0].get("power")),
    heroHealth: Number(wizardUsers[0].get("heroHealth")),
    heroSpeed: Number(wizardUsers[0].get("heroSpeed")),
    fireballSpeed: Number(wizardUsers[0].get("fireballSpeed")),
    fireballSpawnInterval: Number(wizardUsers[0].get("fireballSpawnInterval")),
    fireballDamage: Number(wizardUsers[0].get("fireballDamage")),
    maxLevel: Number(wizardUsers[0].get("maxLevel")),
    gold: Number(wizardUsers[0].get("gold")),
  };
  return userData;
};

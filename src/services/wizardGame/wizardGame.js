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

export const saveAfterGame = async (
  goldWon,
  goldOld,
  isLastLevel,
  wizardUserId
) => {
  try {
    const wizardUsers = new Parse.Query("WizardUsers");
    const player = await wizardUsers.get(wizardUserId);
    console.log(goldOld);
    console.log(goldWon);
    player.set("gold", goldOld + goldWon);
    player.save();
    return true;
  } catch (err) {
    return false;
  }
};

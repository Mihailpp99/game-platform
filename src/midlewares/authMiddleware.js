export const authMiddleware = (ctx, next) => {
  ctx.user = Parse.User.current();
  next();
};

async function getSession() {
  const sessionUser = new Parse.Query("Session");

  try {
    const user = await query.get("");
  } catch (error) {
    alert(`Failed to retrieve the object, with error code: ${error.message}`);
  }
}

async function retrievePlayer() {
  //Create your Parse Query, and define the class it will be searched
  const soccerPlayers = new Parse.Query("SoccerPlayers");

  try {
    //Query the soccerPlayers object using the objectId you've copied
    const player = await query.get("HMcTr9rD3s");
    //access each object propertie using the get method
    const name = player.get("namePlayer");
    const email = player.get("emailContact");
    const birth = player.get("yearOfBirth");
    const attributes = player.get("attributes");
  } catch (error) {
    alert(`Failed to retrieve the object, with error code: ${error.message}`);
  }
}

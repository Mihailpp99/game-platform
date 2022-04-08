//Basic query
// const GameScore = Parse.Object.extend("GameScore");
// const query = new Parse.Query(GameScore);
// query.equalTo("playerName", "Dan Stemkoski");
// const results = await query.find();

// query.notEqualTo("playerName", "Michael Yabuti");
// query.greaterThan("playerAge", 18);
// query.limit(10); // limit to at most 10 results
// query.skip(10);
// query.ascending("score");
// query.lessThan("wins", 50);
// query.lessThanOrEqualTo("wins", 50);
// query.greaterThan("wins", 50);
// query.greaterThanOrEqualTo("wins", 50);
// query.containedIn("playerName", ["Jonathan Walsh", "Dario Wunsch", "Shawn Simon"]);

// Finds objects that have the score set
// query.exists("score");
// Finds objects that don't have the score set
// query.doesNotExist("score");

//query.select("score", "playerName");
// query.find().then(function(results) {
//     // each of results will only have the selected fields available.
//   });
// query.exclude

//            Arrays
// Find objects where the array in arrayKey contains 2.
//query.equalTo("arrayKey", 2);

// Find objects where the array in arrayKey contains all of the elements 2, 3, and 4.
// query.containsAll("arrayKey", [2, 3, 4]);

//destroy save find

// add append the given object to the end of an array field.
// addUnique add the given object only if it isn’t already contained in an array field. The position of the insert is not guaranteed.
// remove remove all instances of the given object from an array field.

// const query = new Parse.Query(Parse.User);
// query.equalTo("gender", "female");  // find all the women
// const women = await query.find();

// const user = Parse.User.current();

// // Make a new post
// const Post = Parse.Object.extend("Post");
// const post = new Post();
// post.set("title", "My New Post");
// post.set("body", "This is some great content.");
// post.set("user", user);
// await post.save();
// // Find all posts by the current user
// const query = new Parse.Query(Post);
// query.equalTo("user", user);
// const userPosts = await query.find();
// // userPosts contains all of the posts by the current user.
// });

var _database = new Firebase('https://formfollowscode.firebaseio.com/pollster');
var auth = new FirebaseSimpleLogin(_database, function(error, user) {
  if (error) {
    // an error occurred while attempting login
    console.log(error);
  } else if (user) {
    // user authenticated with Firebase
    console.log('User ID: ' + user.uid + ', Provider: ' + user.provider);
    console.log(user);
  } else {
    // user is logged out
    auth.login('google', {
        preferRedirect: true
    });
  }
});
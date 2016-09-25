// Get a reference to the database service
var database = firebase.database();

var vote = function(name) {
  var voteRef = database.ref('projects/' + name + '/vote');
  voteRef.transaction(function(currentVote){
    return currentVote + 1;
  });
};

var get_vote = function(name, callback) {
  var voteRef = database.ref('projects/' + name);
  voteRef.once("value", function(snapshot){
    if (!snapshot)
      console.log(name + " is null");
    else
    {
      var voteCount = snapshot.val().vote;
      callback(voteCount);
    }
  });
}

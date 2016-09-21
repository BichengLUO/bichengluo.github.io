// Get a reference to the database service
  var database = firebase.database();

  var vote = function(name) {
    var voteRef = database.ref('projects/' + name + '/vote');
    voteRef.transaction(function(currentVote){
      return currentVote + 1;
    });
  };

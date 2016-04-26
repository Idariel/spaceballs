if (Meteor.isClient) {

  // HELPERS
  //   Template.nbJoueurs.helpers({ // affiche le nombre de joueurs
  //     nombreJoueurs: function () {
  //       return Session.get('nombreJoueurs');
  //     }
  //   });
  //
  // Template.body.helpers({ //Define joueurs collection and load joueursCol from it
  //   user: function(){
  //     return Joueurs.find({}, {sort: {createdAt: -1}}); //sort: -1 => ordre inverse
  //   }
  // });

// EVENTS
  Template.body.events({
    "submit.user": function (event) {
      event.preventDefault(); // Prevent default browser form submit

      var pseudoJoueur = event.target.pseudo.value; // Get value from form element
      var mdp = event.target.password.value;
      // var avatarJoueur = event.target.avatar.value;

      // Insert a task into the collection
      Joueurs.insert({
        pseudo: pseudoJoueur,
        password: mdp,
        createdAt: new Date() // current time - pour info
      });

      // Clear form
      event.target.pseudo.value = "";
      event.target.password.value = "";
    }
  });

  Template.button.events({
  // $('#gaucheHaut').css('visibility', 'visible');
  });

} // find de if Meteor isClient




if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

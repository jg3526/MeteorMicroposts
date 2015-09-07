Meteor.subscribe('posts');
Meteor.subscribe('ProfileImages');
Meteor.subscribe('UserImages');

Meteor.startup(function () {
    AccountsEntry.config({
      homeRoute: '/',                   // mandatory - path to redirect to after sign-out
      dashboardRoute: '/',      // mandatory - path to redirect to after successful sign-in
      passwordSignupFields: 'USERNAME_AND_EMAIL'
    });
    Accounts.ui.config({
      passwordSignupFields: 'USERNAME_AND_EMAIL'
    });
});

Template.registerHelper('getProfileImg', function(userId) {
    var img = UserImages.findOne({userId: userId});
    if (img) {
      return img.image;
    } else{
      return "img/noimage.jpeg";
    }      
});
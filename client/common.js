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
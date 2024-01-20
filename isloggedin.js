
// Check if a user is signed in based on the presence of user information in localStorage
const isUserSignedIn = () => {
   const userData = localStorage.getItem('user');
   return userData !== null; // Return true if user information is present, indicating the user is signed in
};

document.addEventListener('DOMContentLoaded', function() {
   const userLink = document.getElementById('userLink');

   // Set the initial href based on the user's sign-in status
   userLink.href = isUserSignedIn() ? 'user-page.html' : 'account-signup.html';

   // If the user clicks on the link, dynamically update the href
   userLink.addEventListener('click', function(event) {
       event.preventDefault();
       if (isUserSignedIn()) {
           // If the user is signed in, redirect to the user page
           window.location.href = 'user-page.html';
       } else {
           window.location.href = 'account-signup.html';
           // You can also add additional logic or prevent the default behavior if needed
           // For example, prevent the default behavior to handle redirection in your own logic
           // event.preventDefault();
       }
   });
});


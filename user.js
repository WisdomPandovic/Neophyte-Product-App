  // Assuming you have some way to determine if the user is signed in, e.g., a variable called isUserSignedIn
  const isUserSignedIn = /* Your logic to check if the user is signed in */;

  document.addEventListener('DOMContentLoaded', function() {
      const userLink = document.getElementById('userLink');

      // Set the initial href based on the user's sign-in status
      userLink.href = isUserSignedIn ? 'user-page.html' : 'account-signup.html';

      // If the user clicks on the link, dynamically update the href
      userLink.addEventListener('click', function(event) {
          if (isUserSignedIn) {
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
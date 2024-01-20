const isUserSignedIn = () => {
    // Retrieve user information from local storage
    const userData = JSON.parse(localStorage.getItem('user'));

    // Check if user information exists
    return userData !== null && userData !== undefined;
};


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
          }
      });
  });
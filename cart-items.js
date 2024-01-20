document.addEventListener('DOMContentLoaded', function () {
    // Retrieve cart items from local storage
    const cartItems = JSON.parse(localStorage.getItem('wishList')) || [];

    // Find the element that displays the cart icon
    const cartIconElement = document.querySelector('.nav-link i.fa-shopping-cart');

    // Update the content with the number of cart items
    if (cartIconElement) {
        cartIconElement.innerHTML = `${cartItems.length}`;
    }
});

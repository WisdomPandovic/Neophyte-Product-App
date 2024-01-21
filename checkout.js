// Function to calculate the subtotal from the cart items
// Function to calculate the subtotal from the cart items
const calculateSubtotal = () => {
    // Retrieve cart items from local storage
    const cartItems = JSON.parse(localStorage.getItem('wishList')) || [];

    // Check if cart items exist and are an array
    if (!Array.isArray(cartItems)) {
        console.error('Invalid or missing cart items.');
        return 0;
    }

    // Calculate subtotal by summing up the prices of all cart items
    const subtotal = cartItems.reduce((total, item) => {
        // Ensure the item has a valid numerical price
        const itemPrice = parseFloat(item.price);

        // If the item has a valid price, add it to the total
        if (!isNaN(itemPrice)) {
            total += itemPrice;
        }

        return total;
    }, 0);

    return subtotal;
};


// Function to update the checkout summary
const updateCheckoutSummary = () => {
    const discount = 7000.00; // You can set the discount amount dynamically or as needed

    // Get the elements for subtotal, discount, and total
    const subtotalElement = document.querySelector('.subtotal .summary-value');
    const discountElement = document.querySelector('.discount .summary-value');
    const totalElement = document.querySelector('.total .summary-value');

    // Calculate subtotal and total
    const subtotal = calculateSubtotal();
    const total = subtotal - discount;

    // Update the elements with the calculated values
    subtotalElement.textContent = `₦${subtotal.toFixed(2)}`;
    discountElement.textContent = `-₦${discount.toFixed(2)}`;
    totalElement.textContent = `₦${total.toFixed(2)}`;
};

// Call the updateCheckoutSummary function to initialize the values
updateCheckoutSummary();

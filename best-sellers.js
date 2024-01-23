function load(productId) {
    // Your logic to fetch and update product details in the DOM goes here
    console.log("Loading product details for ID:", productId);
    // Replace the following lines with your actual logic
    $(".shop-p1x").html("Product Name");
    $(".shop-p2x").html("Product Description");
    $(".amt").html("$100");
}

function renderProduct(product) {
    return `
    <div class="col-lg-6 col-md-6 mb-4">
        <a href="view-product.html?q=${product._id}">
        <div class="h-100">
            <img src="${'http://159.65.21.42:9000' + product.image}" class="card-img-top rounded-4" alt="${product.name}">
           
            <div class="d-flex justify-content-between card-body p-3">
                <div>
                    <p class="card-text overflow-hidden mt-2">${product.name}</p>
                    <p class="price">₦ ${product.price}</p>
                </div>
                <div class="d-flex align-items-center bg-success p-3 rounded-circle" style="width: 50px; height: 50px;">
                    <i class="fas fa-arrow-right text-white"></i>
                </div>
            </div>
        </div>
        </a>
        <i class="fas fa-heart heart-icon" data-product-id="${product._id}"></i>
    </div>
`;
}

// Array of product IDs to fetch and render
const productIds = ["65abf4743b88d36925ae237a", "65a7b63e3b88d36925ae1c33"];

// Fetch product data and render
productIds.forEach(productId => {
    $.ajax({
        type: "GET",
        url: `http://159.65.21.42:9000/product/${productId}`,
        success: function (productData) {
            let html = renderProduct(productData);
            $('#productContainer').append(html);
        },
        error: function (err) {
            console.error("Error fetching product:", err);
        }
    });
});

$('#productContainer').on('click', '.heart-icon', function () {
    console.log("Heart icon clicked");
    var productId = $(this).data('product-id');
    console.log("Product ID:", productId);

    // Assuming load function updates the product details in the DOM
    load(productId);

    // Get product details from the DOM (replace this with your actual logic)
    var productDetails = {
        id: productId,
        name: $(".shop-p1x").html(),
        description: $(".shop-p2x").html(),
        price: $(".amt").html(),
    };

    console.log("Product Details:", productDetails);

     // Get the existing wishList from local storage
     var wishListProducts = localStorage.getItem('wishList');
 
     if (wishListProducts) {
         wishListProducts = JSON.parse(wishListProducts);

         // Check if the product with the same ID is already in the wish list
         var existingProductIndex = wishListProducts.findIndex(product => product.id === productId);

         if (existingProductIndex !== -1) {
             // Product with the same ID already exists, show an alert
             alert('Item already in cart');
         } else {
             // Product is not in the wish list, add a new entry
             productDetails.quantity = 1; // Add quantity property
             wishListProducts.push(productDetails);
         }

     } else {
         // Wish list is empty, add the first product entry
         wishListProducts = [productDetails];
     }

     // Save the updated wishList to local storage
     localStorage.setItem("wishList", JSON.stringify(wishListProducts));

     // Display appropriate alert message
     if (existingProductIndex === -1) {
         alert('Item added to cart');
     }

});




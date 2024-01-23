function render(data) {
    return `<div class="col-lg-3 col-md-6 mb-4">
        <a href="view-product.html?q=${data._id}">
            <div class="h-100">
                <img src="${'http://159.65.21.42:9000' + data.image}" class="img-fluid rounded-4 product-image" alt="Service 1">
               
                <div class="d-flex justify-content-between card-body p-3">
                    <div class="">
                        <p class="card-text overflow-hidden mt-2">${data.name}</p>
                        <p class="price">₦ ${data.price}</p>
                    </div>
                    <div class="d-flex align-items-center p-3 rounded-circle">
                        <i class="fas fa-arrow-right text-dark"></i>
                        <i class="fas fa-heart heart-icon wish-list" data-product-id="${data._id}"></i>
                    </div>
                </div>
            </div>
        </a>
    </div>`;
}

function load() {
    $.ajax({
        type: "GET",
        url: "http://159.65.21.42:9000/products",
        dataType: "json",
        crossDomain: true,
        success: function (res) {
            res.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));

            for (let i = res.length - 1; i >= 0; i--) {
                let d = res[i];
                if (d.category == "Neophyte-women-wedding-collection") {
                    let html = render(d);
                    $('#women-wedding-products').append(html);
                }
            }

            // Check if there are no products
            if (res.length === 0) {
                $('#noProductsMessage').html('<p>No products available at the moment.</p>');
            }
        },
        error: function (err) {
            console.error("Error fetching products:", err);
        }
    });
}

load();


$(document).ready(function () {
    // Use event delegation for dynamically created elements
    $('#women-wedding-products').on('click', '.wish-list', function () {
        var productId = $(this).data('product-id');
        console.log("product:", productId);

         // Assuming load function updates the product details in the DOM
         load(productId);

         // Get product details from the DOM
         var productDetails = {
             id: productId,
             name: $(".shop-p1x").html(),
             description: $(".shop-p2x").html(),
             price: $(".amt").html(),
         };
 
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
  
});

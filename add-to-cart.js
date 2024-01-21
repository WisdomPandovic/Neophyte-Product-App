$(document).ready(function () {
    // Check if 'wishList' key exists in localStorage
    if ('wishList' in localStorage) {
        // Parse the 'wishList' JSON string into an array
        let products = JSON.parse(localStorage.getItem('wishList'));

        // Check if there are products in the wishlist
        if (products && products.length > 0) {
            $("#wishListNum").text(products.length);

            // Iterate through each product in the wishlist
            products.forEach(element => {
                console.log('Product ID:', element.id);
                $.ajax({
                    type: "get",
                    url: "http://159.65.21.42:9000/product/" + element.id,
                    success: function (res) {
                        console.log('Product Data:', res); // Log product data

                        $("#products").append(`
                        <div class="col-lg-3 col-md-6 mb-4">
                            <div class="h-100">
                                <img src="${'http://159.65.21.42:9000' + res.image}" alt="" class="img-fluid product-image">
                                <div class="card-body p-3">
                                    <div class="product-title">${res.name}</div>                                           
                                    <div class="price">₦ ${res.price}</div> 
                                    <div class="mt-2">
                                        <button class="btn cart-delete" data-id="${element.id}">REMOVE</button>
                                    </div>
                                </div>
                            </div>
                        </div>`
                    );
                    
                    
                    },
                    error: function (err) {
                        console.log(err);
                    }
                });
            });
        }
    }
});


$(document).on("click", ".cart-delete", function(){
    let id = $(this).attr("data-id");
    let res = confirm("Do you want to delete?");
    
    if (res) {
        // Remove the deleted item from the local storage
        updateLocalStorage(id);

        // Refresh or update the UI after successful deletion
    }
});

function updateLocalStorage(productId, callback) {
    // Get the existing wishList from local storage
    let wishListProducts = localStorage.getItem('wishList');

    if (wishListProducts) {
        wishListProducts = JSON.parse(wishListProducts);

        // Find the index of the product with the specified ID
        let productIndex = wishListProducts.findIndex(product => product.id === productId);

        if (productIndex !== -1) {
            // Product found, remove it from the array
            wishListProducts.splice(productIndex, 1);

            // Save the updated wishList to local storage
            localStorage.setItem("wishList", JSON.stringify(wishListProducts));

            // Update the UI immediately (replace this with your actual UI update logic)
            $("#products").empty();
            loadProductsFromLocalStorage();

            // Call the callback with true for successful removal
            callback(true);
            return; // Successful removal
        }
    }

    // Call the callback with false for failed removal
    callback(false);
}

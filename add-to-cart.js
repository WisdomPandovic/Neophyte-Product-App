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
                // Make an AJAX request for each product
                $.ajax({
                    type: "get",
                    url: "http://159.65.21.42:9000/product/" + element,
                    success: function (res) {
                        $("#products").append(`
                            <div class="col-lg-3 col-md-6 mb-4">
                                <a href="view-product.html?q=${element}">
                                    <div class="h-100">
                                        <img src="${'http://159.65.21.42:9000' + res.image}" alt="" class="img-fluid product-image">
                                        <div class=" card-body p-3">
                                            <div class="product-title">${res.name}</div>                                           
                                            <div class="price">₦ ${res.price}</div> 
                                            <div class="mt-2"><button class="btn cart-delete">REMOVE</button></div>
                                       </div>
                                    </div>
                                </a>
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

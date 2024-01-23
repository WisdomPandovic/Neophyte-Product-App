function renderProducts(inStoreproduct) {
    return `
    <div class="col-lg-6">
        <img src="${'http://159.65.21.42:9000' + inStoreproduct.image}" alt="Product Image" class="img-fluid">
    </div>
    <div class="col-lg-6">
        <h3>${inStoreproduct.name}</h3>
        <p>${inStoreproduct.description}</p>
        <p>₦ ${inStoreproduct.price}</p>
        <div class="mb-3">
            <select class="form-select" id="sizeSelect_${inStoreproduct._id}" style="background-color: #D9D9D9;">
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
            </select>
        </div>
        <div class="mb-3">
            <select class="form-select" id="colorSelect_${inStoreproduct._id}" style="background-color: #D9D9D9;">
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
            </select>
        </div>
        <button class="btn btn-primary btn-block addToCartBtn" data-product-id="${inStoreproduct._id}">Add to Cart</button>
    </div>
    `;
}

$.ajax({
    type: "GET",
    url: "http://159.65.21.42:9000/product/65a91a283b88d36925ae1eab",
    success: function (inStoreproductData) {
        let html = renderProducts(inStoreproductData);
        $('#productDetails').append(html);
    },
    error: function (err) {
        console.error("Error fetching product:", err);
    }
});

$.ajax({
    type: "GET",
    url: "http://159.65.21.42:9000/product/65a91ddf3b88d36925ae1ed4",
    success: function (inStoreproductData) {
        let html = renderProducts(inStoreproductData);
        $('#productDetails').append(html);
    },
    error: function (err) {
        console.error("Error fetching product:", err);
    }
});

$(document).ready(function(){
    $('#productDetails').on('click', '.addToCartBtn', function () {
        var productId = $(this).data('product-id');
        console.log("Product ID:", productId);
        // Check if the product is already in the cart
        var wishListProducts = localStorage.wishList ? JSON.parse(localStorage.wishList) : [];
        var existingProductIndex = wishListProducts.findIndex(product => product.id === productId);

        if (existingProductIndex !== -1) {
            // Product with the same ID already exists in the cart, show an alert
            alert('Item already in cart');
        } else {
            // Product is not in the cart, add it
            var productDetails = {
                id: productId,
                name: $(".shop-p1x").html(),
                description: $(".shop-p2x").html(),
                price: $(".amt").html(),
            };
            wishListProducts.push(productDetails);
            localStorage.setItem("wishList", JSON.stringify(wishListProducts));
            alert('Item added to cart');
        }
    });
});

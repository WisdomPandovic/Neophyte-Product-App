function renderProduct(product) {
    return `
        <div class="col-lg-6 col-md-6 mb-4">
            <a href="view-product.html?q=${product._id}">
            <div class="h-100">
                <img src="${'http://159.65.21.42:9000' + product.image}" class="card-img-top rounded-4" alt="${product.name}">
                <i class="fas fa-heart heart-icon"></i>
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
        </div>
    `;
}

$.ajax({
    type: "GET",
    url: "http://159.65.21.42:9000/product/65a7c4e93b88d36925ae1c4b",
    success: function (productData) {
        let html = renderProduct(productData);
        $('#productContainer').append(html);
    },
    error: function (err) {
        console.error("Error fetching product:", err);
    }
});

$.ajax({
    type: "GET",
    url: "http://159.65.21.42:9000/product/65a7b63e3b88d36925ae1c33",
    success: function (productData) {
        let html = renderProduct(productData);
        $('#productContainer').append(html);
    },
    error: function (err) {
        console.error("Error fetching product:", err);
    }
});
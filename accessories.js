function render(data) {
    return `<div class="col-lg-3 col-md-6 mb-4">
        <a href="view-product.html?q=${data._id}">
            <div class="h-100">
                <img src="${'http://159.65.21.42:9000' + data.image}" class="img-fluid rounded-4 product-image" alt="Service 1">
                <i class="fas fa-heart heart-icon"></i>
                <div class="d-flex justify-content-between card-body p-3">
                    <div class="">
                        <p class="card-text overflow-hidden mt-2">${data.name}</p>
                        <p class="price">₦ ${data.price}</p>
                    </div>

                    <div class="d-flex align-items-center p-3 rounded-circle" style="width: 50px; height: 50px;">
                        <i class="fas fa-arrow-right text-dark"></i>
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
        dataType: "json", // Set the dataType to 'json'
        crossDomain: true,
        success: function (res) {
            let productsToShow = 8;

            for (let i = 0; i < res.length && productsToShow > 0; i++) {
                let d = res[i];
                if (d.category == "Neophytegarment-Accessories") {
                    let html = render(d);
                    $('#accessories-product').append(html);
                    productsToShow--;
                }
            }

            // Check if no products were found
            if (productsToShow === 8) {
                $('#noAccessoriesMessage').html('<p>No products available at the moment.</p>');
            }
        },
        error: function (err) {
            console.error("Error fetching products:", err);
        }
    });
}

load();
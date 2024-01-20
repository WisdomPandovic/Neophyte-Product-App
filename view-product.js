// function load (id){
//     $.ajax({
//         type:"get",
//         url:"http://159.65.21.42:9000/product/"+id,
//         success:function(res){
//             $(".shop-p1x").html(res.name)
//             $(".shop-p2x").html(res.description)
//             $(".amt").html(res.price)
//             $(".img").attr("src", "http://159.65.21.42:9000"+res.image)
//             console.log("arr: ", res);
//         },
//         error:function(err){
//             console.log(err)
//         }
//     })
//     $("#wish-list").attr("product",id);

//     $(".wishlist").attr("product",id);
// }

// let url = location.href
// let arr = url.split("=")
// load(arr[1])



// $(document).ready(function(){
//     $("#wish-list").click(function(){
//         var productId = $(this).attr('product');
//         console.log("product:",productId);
//         var wishListProducts = localStorage.wishList;
//         if(wishListProducts){
//             wishListProducts = JSON.parse(wishListProducts);
            
//         }else{
//             wishListProducts = [];
//         }
//         wishListProducts.push($(this).attr('product'));
//         localStorage.setItem("wishList",JSON.stringify(wishListProducts));
//         alert('Item added to cart')
//     });
// });

function load(id) {
    $.ajax({
        type: "get",
        url: "http://159.65.21.42:9000/product/" + id,
        success: function (res) {
            $(".shop-p1x").html(res.name);
            $(".shop-p2x").html(res.description);
            $(".amt").html(res.price);
            $(".img").attr("src", "http://159.65.21.42:9000" + res.image);
            console.log("arr: ", res);

            // Update the #wish-list element with the product ID
            $("#wish-list").attr("product", id);
        },
        error: function (err) {
            console.log(err);
        }
    });
}

let url = location.href
let arr = url.split("=")
load(arr[1])


$(document).ready(function () {
    $("#wish-list").click(function () {
        // Get the product ID from the #wish-list element
        var productId = $(this).attr('product');
        console.log("product:", productId);

        // Assuming load function updates the product details in the DOM
        load(productId);

        // Get product details from the DOM
        var productDetails = {
            id: productId,
            name: $(".shop-p1x").html(),
            description: $(".shop-p2x").html(),
            price: $(".amt").html(),
            // Add other details as needed
        };

        // Get the existing wishList from local storage
        var wishListProducts = localStorage.getItem('wishList');

        if (wishListProducts) {
            wishListProducts = JSON.parse(wishListProducts);
        } else {
            wishListProducts = [];
        }

        // Push the entire product details to the array
        wishListProducts.push(productDetails);

        // Save the updated wishList to local storage
        localStorage.setItem("wishList", JSON.stringify(wishListProducts));
        alert('Item added to cart');
    });
});

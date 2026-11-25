
document.addEventListener("DOMContentLoaded", function () {

    // Add to Cart functionality

    let cartItems = JSON.parse(localStorage.getItem("vyoraCart")) || [];

    const cartCount = document.getElementById("cartCount");
    const addToCartButtons = document.querySelectorAll(".product-card button");

    // Display saved cart count
    if (cartCount) {
        cartCount.textContent = cartItems.length;
    }

    addToCartButtons.forEach(button => {

        button.addEventListener("click", function () {

            const productCard = button.closest(".product-card");

            const productName =
                productCard.querySelector("h3").textContent;

const priceText = productCard
    .querySelector(".price")
    .childNodes[0].textContent.trim();

const productPrice = Number(
    priceText.replace(/[^\d.]/g, "")
);
            const product = {
                name: productName,
                price: productPrice
            };

            cartItems.push(product);

            localStorage.setItem(
                "vyoraCart",
                JSON.stringify(cartItems)
            );

            if (cartCount) {
                cartCount.textContent = cartItems.length;
            }

            alert(productName + " added to cart!");

            console.log("Saved Cart:", cartItems);

        });

    });

});

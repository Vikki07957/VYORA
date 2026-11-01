
const searchInput = document.getElementById("productSearch");

const products = document.querySelectorAll(".product-card");
const categories = document.querySelectorAll(".category-card");

let selectedCategory = "all";

function filterProducts() {
    const searchValue = searchInput.value.toLowerCase();
    let visibleCount = 0;

    products.forEach(product => {
        const productName =
            product.querySelector("h3").textContent.toLowerCase();

        const productCategory = product.dataset.category;

        const matchesSearch = productName.includes(searchValue);

        const matchesCategory =
            selectedCategory === "all" ||
            productCategory === selectedCategory;

        if (matchesSearch && matchesCategory) {
            product.style.display = "block";
            visibleCount++;
        } else {
            product.style.display = "none";
        }
    });

    const message = document.getElementById("noProducts");

    if (message) {
        message.style.display = visibleCount === 0 ? "block" : "none";
    }
}

searchInput.addEventListener("input", filterProducts);

categories.forEach(category => {
    category.addEventListener("click", () => {
        selectedCategory = category.dataset.filter;
        filterProducts();
    });
});

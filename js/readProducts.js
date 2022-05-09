const productsEl = document.querySelector(".pro-container");

//Render Products
function renderProducts() {
    products.forEach((product) => {
        productsEl.innerHTML += `
        <div class="pro">
                <img src="${product.imgSrc}" alt="${product.name}">
                <div class="desc">
                    <span>${product.brand}</span>
                    <h5>${product.name}</h5>
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h4>${product.price}</h4>
                </div>
                <i class="fas fa-shopping-cart cart" onclick="addToCart(${product.id})"></i>
            </div>
        `;
    })
}

renderProducts();
const feautureEl = document.querySelector(".feautre-container");
const arrivalEl = document.querySelector(".arrival");

function feautreProducts() {
    for (let i = 0; i <= 7; i++) {
        feautureEl.innerHTML += `
        <div class="pro">
        <img src="${products[i].imgSrc}" alt="${products[i].name}">
        <div class="desc">
            <span>${products[i].brand}</span>
            <h5>${products[i].name}</h5>
            <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
            <h4>${products[i].price}</h4>
        </div>
        <i class="fas fa-shopping-cart cart" onclick="addToCart(${products[i].id})"></i>
    </div>
        `;
    }
}

feautreProducts();

function arrivalProducts() {
    for (let i = 8; i <= 15; i++) {
        arrivalEl.innerHTML += `
        <div class="pro">
        <img src="${products[i].imgSrc}" alt="${products[i].name}">
        <div class="desc">
            <span>${products[i].brand}</span>
            <h5>${products[i].name}</h5>
            <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
            <h4>${products[i].price}</h4>
        </div>
        <i class="fas fa-shopping-cart cart" onclick="addToCart(${products[i].id})"></i>
    </div>
        `;
    }
}

arrivalProducts();
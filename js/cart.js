const cartItemsEl = document.querySelector(".cart-container");
const subtotalEl = document.querySelector(".subtotal");
const totalitemsInCart = document.querySelector(".lg-bag span");
const mobileItemCart = document.querySelector(".mobile span");

//cart array
let cart = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();

//Add To Cart
function addToCart(id) {
    //check if product already exist in cart
    if (cart.some((item) => item.id === id)) {
        changeNumberOfUnits("plus", id);
    } else {
        const item = products.find((product) => product.id === id);
        cart.push({
            ...item,
            numberOfUnits: 1
        });
    }
    updateCart();
}

//Update Cart
function updateCart() {
    renderCartItems();
    renderSubTotal();

    //Save Cart To Local Storage
    localStorage.setItem("CART", JSON.stringify(cart));
}

//render Cart Items
function renderCartItems() {
    //Clear Cart Element
    cartItemsEl.innerHTML = "";
    cart.forEach((item) => {
        cartItemsEl.innerHTML += `
        <div class="cart-item">
            <div class="cart-info" onclick="removeItemFromCart(${item.id})">
                <div><i class="fas fa-times"></i></div>
            </div>
            <div class="cart-info">
                <img src="${item.imgSrc}" alt="${item.name}">
                <h4>${item.name}</h4>
            </div>
            <div class="unit-price">
                <small>$</small>${item.price}
            </div>
            <div class="units">
                <div class="btn minus" onclick="changeNumberOfUnits('minus', ${item.id})"><i class="fas fa-minus"></i></div>
                <div class="number">${item.numberOfUnits}</div>
                <div class="btn plus" onclick="changeNumberOfUnits('plus', ${item.id})"><i class="fas fa-plus"></i></div>
            </div>
        </div>
        `;
    })
}

renderCartItems();

//Change number of units fo an item
function changeNumberOfUnits(action, id) {
    cart = cart.map((item) => {

        let numberOfUnits = item.numberOfUnits;
        if (item.id === id) {
            if (action === "minus" && numberOfUnits > 0) {
                numberOfUnits --;
            } else if (action === "plus" && numberOfUnits < item.instock) {
                numberOfUnits ++;
            }

        }
        return {
            ...item,
            numberOfUnits,
        };
    });
    updateCart();
}

//Calculate and render subTotal
function renderSubTotal() {
    let totalPrice = 0,
        totalItems = 0;
    cart.forEach((item) => {
        totalPrice += item.price * item.numberOfUnits;
        totalItems += item.numberOfUnits;
    });
    subtotalEl.innerHTML = `SubTotal (${totalItems} items):$${totalPrice.toFixed(2)}`;
    totalitemsInCart.innerHTML = totalItems;
    mobileItemCart.innerHTML = totalItems;
}

//Remove Item From Cart
function removeItemFromCart(id) {
    //give all items that doesn't have this id number
    cart = cart.filter((item) => item.id !== id);
    updateCart();
}
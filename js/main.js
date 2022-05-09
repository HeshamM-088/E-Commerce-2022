let btnMenu = document.querySelector('#bar');
let btnClose = document.querySelector('#close');
let menu = document.querySelector('#navbar');

btnMenu.addEventListener("click", () => {
    menu.classList.add("active");
});

btnClose.addEventListener("click", () => {
    menu.classList.remove("active");
});

//SProduct image gallery

let bigImg = document.querySelector('.main-img');
let smallImgs = document.querySelectorAll('.small-img-group img');

smallImgs.forEach((img) => {
    img.addEventListener("click", function (e) {
        imageName = img.src;
        bigImg.src = imageName;
    })
})

const cartBtn = document.querySelector(".lg-bag");
const mobileCartBtn = document.querySelector("#shopcart")
const cartproduct = document.querySelector("#cart-product");
const closeCartBtn = document.querySelector(".close-cart");

cartBtn.addEventListener("click", () => {
    cartproduct.classList.add("show");
});

mobileCartBtn.addEventListener("click", () => {
    cartproduct.classList.add("show");
});

closeCartBtn.addEventListener("click", () => {
    cartproduct.classList.remove("show");
});
let footer = `
<div class="container">
<div class="footer-content">
    <div class="col">
        <img src="img/logo.png" class="logo" alt="">
        <h4>contact</h4>
        <Address>
            <p><strong>Address:</strong> 562 Wellingtom Road, Street 32, San Francisco</p>
            <p><strong>Phone:</strong> +01 2222 365/(+9) 012345 6789</p>
            <p><strong>Hours:</strong> 10:00 - 1800, Mon - Sat</p>
        </Address>
        <div class="follow">
            <h4>follow us</h4>
            <div class="icon">
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-pinterest-p"></i>
                <i class="fab fa-youtube"></i>
            </div>
        </div>
    </div>
    <div class="col">
        <h4>about</h4>
        <a href="#">about us</a>
        <a href="#">delivery information</a>
        <a href="#">privacy policy</a>
        <a href="#">terms & conditions</a>
        <a href="#">contact us</a>
    </div>

    <div class="col">
        <h4>my account</h4>
        <a href="#">sign in</a>
        <a href="#">view vart</a>
        <a href="#">my wishlist</a>
        <a href="#">track my order</a>
        <a href="#">help</a>
    </div>
    <div class="col install">
        <h4>install app</h4>
        <p>From App Store or Google Play</p>
        <div class="row">
            <img src="img/pay/app.jpg" alt="app">
            <img src="img/pay/play.jpg" alt="play">
        </div>
        <p>SEcured Payment Gateways</p>
        <img src="img/pay/pay.png" alt="pay">
    </div>
</div>
<div class="copyright">
    <p>&copy; Ecommerce Company</p>
</div>
</div>`;
document.querySelector('footer').innerHTML += footer;
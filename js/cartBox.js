let cartBox = `
<section class="cart-product" id="cart-product">
    <div class="close-cart">
        <i class="fas fa-times-circle"></i>
    </div>
    
        <div class="cart-header">
            <div class="item">Item</div>
            <div class="price">Unit Price</div>
            <div class="unit">Units</div>
        </div>
        <div class="cart-container"></div>
        <div class="cart-footer">
            <div class="subtotal">
                SubTotal (0 items):$0
            </div>
            </div>
            
        </div>

</section>
`;
document.querySelector("body").innerHTML += cartBox;
import React from 'react';
import './Cart.css'
const Cart = (props) => {
    let total = 0;

    for (const product of props.cart) {
        total += product.price;
    }
    const shipping = total > 0 ? 15 : 0;
    const totalBeforeTax = total + shipping;
    const tax = totalBeforeTax * 0.10;
    const grandTotal = totalBeforeTax + tax;
    return (
        <div className="cart">
            <h3>Order Summary</h3>
            <p>Items Ordered: {props.cart.length}</p>

            <div>
                <p className="cart-info"><small>Items:</small><small>${total.toFixed(2)}</small> </p>
                <p className="cart-info"><small>Shipping & Handling:</small><small>${shipping}</small> </p>
                <p className="cart-info"><small>Total before tax:</small><small>${totalBeforeTax.toFixed(2)}</small> </p>
                <p className="cart-info"><small>Estimated Tax:</small><small>${tax.toFixed(2)}</small> </p>
                <p className="cart-info"><span>Order Total:</span><span>${grandTotal.toFixed(2)}</span> </p>
            </div>
            <button>Review your order</button>




        </div>
    );
};

export default Cart;
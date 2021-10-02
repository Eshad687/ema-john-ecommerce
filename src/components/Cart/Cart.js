import React from 'react';
import './Cart.css'
const Cart = (props) => {
    let total = 0;
    let totalQuantity = 0;

    for (const product of props.cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }
    const shipping = total > 0 ? 15 : 0;
    const totalBeforeTax = total + shipping;
    const tax = totalBeforeTax * 0.10;
    const grandTotal = totalBeforeTax + tax;

    // props.topOrderedItemCount(totalQuantity);
    return (
        <div className="cart">
            <h3>Order Summary</h3>
            <p>Items Ordered: {totalQuantity}</p>

            <div>
                <p className="cart-info"><small>Items:</small><small>${total.toFixed(2)}</small> </p>
                <p className="cart-info"><small>Shipping & Handling:</small><small>${shipping}</small> </p>
                <p className="cart-info"><small>Total before tax:</small><small>${totalBeforeTax.toFixed(2)}</small> </p>
                <p className="cart-info"><small>Estimated Tax:</small><small>${tax.toFixed(2)}</small> </p>
                <p className="cart-info"><span>Order Total:</span><span>${grandTotal.toFixed(2)}</span> </p>
            </div>
            <div>
                {props.children}
            </div>




        </div>
    );
};

export default Cart;
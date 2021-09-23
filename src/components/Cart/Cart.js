import React from 'react';

const Cart = (props) => {
    let total = 0;

    for (const product of props.cart) {
        total += product.price;
    }
    return (
        <div className="cart">
            <h3>Order Summary</h3>
            <p>Items Ordered: {props.cart.length}</p>
            <h3>Order Total: {total.toFixed(2)} </h3>
        </div>
    );
};

export default Cart;
import React from 'react';

const ReviewItem = (props) => {

    const { name, price, seller, quantity, key } = props.product;
    return (
        <div className="single-product">
            <div className="product-info">
                <h4>{name}</h4>
                <p className="price">${price}</p>
                <p><small>by: {seller}</small></p>
                <p>Quantity: {quantity}</p>
                <button onClick={() => props.removeProductHandler(key)} className="button">Remove</button>
            </div>

        </div>
    );
};

export default ReviewItem;
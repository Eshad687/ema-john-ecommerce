import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props.product);
    const { img, name, price, seller, stock } = props.product;

    return (
        <div className="single-product">
            <img src={img} alt="" />
            <div className="product-info">
                <h4>{name}</h4>
                <p><small>by: {seller}</small></p>
                <p className="price">${price}</p>
                <p><small>only {stock} in stock - order soon</small></p>
                <button onClick={() => props.handleAddToCart(props.product)}>add to cart</button>
            </div>


        </div>
    );
};

export default Product;
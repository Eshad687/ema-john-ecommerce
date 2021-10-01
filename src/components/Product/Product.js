import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Rating from 'react-rating';
import './Product.css';

const Product = (props) => {
    const { img, name, price, seller, stock, star, features } = props.product;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    const featArray = [];
    for (const feature of features) {

        featArray.push(<li key={features.indexOf(feature)}><small>{feature.description}</small>: <small className="feature-value">{feature.value}</small></li>)
    }

    return (
        <div className="single-product">
            <img src={img} alt="" />
            <div className="product-info">
                <h4>{name}</h4>
                <p><small>by: {seller}</small></p>
                <div className="more-info">
                    <div>
                        <p className="price">${price}</p>
                        <p><small>only {stock} in stock - order soon</small></p>
                        <button className="button" onClick={() => props.handleAddToCart(props.product)}>{element}add to cart</button>
                    </div>
                    <div>
                        <p><Rating
                            initialRating={star}
                            emptySymbol="fa fa-star-o rating"
                            fullSymbol="fa fa-star rating"
                            readonly
                        /></p>
                        {featArray.length ? <h3>Features:</h3> : ''}

                        <ul className="features">{featArray}</ul>
                    </div>

                </div>

            </div>


        </div>
    );
};

export default Product;
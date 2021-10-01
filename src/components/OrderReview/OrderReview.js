import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakeDb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {

    // getting all the products
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);

    // removing the item
    const removeProductHandler = productKey => {
        const remainingProducts = cart.filter(product => product.key !== productKey);
        setCart(remainingProducts);
        removeFromDb(productKey);

    }
    return (
        // getting classes from other component
        <div className="main-container">
            <div className="product-container">
                {
                    cart.map(product => <ReviewItem
                        key={product.key}
                        product={product}
                        removeProductHandler={removeProductHandler}
                    ></ReviewItem>)
                }
            </div>
            <div>
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default OrderReview;
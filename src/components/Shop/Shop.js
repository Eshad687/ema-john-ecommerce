import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { addToDb, getStoredCart } from '../../utilities/fakeDb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import useOrderedQuantity from '../../hooks/useOrderedQuantity';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';

const Shop = () => {
    const [products, setProducts] = useState([]);

    // const [cart, setCart] = useState([]);
    const [cart, setCart] = useCart(products);

    const [displayProducts, setDisplayProducts] = useState([]);

    // const [orderedItemsCount, setOrderedItemsCount] = useState(0);

    const element = <FontAwesomeIcon icon={faShoppingCart} />


    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDisplayProducts(data);
            });
    }, []);

    // useEffect(() => {
    //     if (products.length) {
    //         const storedData = getStoredCart();
    //         const addedProductCart = [];

    //         for (const key in storedData) {

    //             const addedProduct = products.find(product => product.key === key
    //             )
    //             if (addedProduct) {
    //                 // adding a new property named quantity to the product
    //                 const quantity = storedData[key];
    //                 addedProduct.quantity = quantity;
    //                 addedProductCart.push(addedProduct);
    //             }

    //         }
    //         setCart(addedProductCart);
    //     }


    // }, [products])

    const handleAddToCart = (product) => {

        const exists = cart.find(pd => pd.key === product.key);
        let newCart = [];
        if (exists) {
            // filtering all the other product
            const rest = cart.filter(pd => pd.key !== product.key);
            //adding one more quantity value
            exists.quantity = exists.quantity + 1;
            //add the product with the filtered rest products
            newCart = [...rest, product]
            // product and exists are the same here
        }
        // if it is a new product
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }


        setCart(newCart);
        addToDb(product.key);

    }
    const searchEventHandler = (event) => {
        const searchText = event.target.value;

        const searchProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
        console.log(searchProducts.length)

        setDisplayProducts(searchProducts);
    }

    // const topOrderedItemCount = count => {
    //     setOrderedItemsCount(count);
    // }
    const [topOrderedItemCount] = useOrderedQuantity(cart);

    return (
        <>
            <div className='search-bar'>
                <input type="text" placeholder="Search Products..." onChange={searchEventHandler} />
                {/* <span >{element}</span> */}
                <Link className="order-link" to="/review"><span className="cart-logo">{element} <span className="count">{topOrderedItemCount}</span></span></Link>

            </div>
            <div className="main-container">
                <div className="product-container">
                    {
                        displayProducts.map(product => <Product
                            key={product.key}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                    }

                </div>
                <div className="cart-container">
                    <Cart cart={cart}>
                        <Link to="/review"><button className="cart-button">Review your order</button></Link>
                    </Cart>
                    {/* <Cart topOrderedItemCount={topOrderedItemCount} cart={cart}></Cart> */}

                </div>

            </div>
        </>
    );
};

export default Shop;
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { addToDb, getStoredCart } from '../../utilities/fakeDb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);

    const [displayProducts, setDisplayProducts] = useState([]);

    const [orderedItemsCount, setOrderedItemsCount] = useState(0);

    const element = <FontAwesomeIcon icon={faShoppingCart} />


    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDisplayProducts(data);
            });
    }, []);

    useEffect(() => {
        if (products.length) {
            const storedData = getStoredCart();
            const addedProductCart = [];

            for (const key in storedData) {

                const addedProduct = products.find(product => product.key === key
                )
                if (addedProduct) {
                    const quantity = storedData[key];
                    addedProduct.quantity = quantity;
                    addedProductCart.push(addedProduct);
                }

            }
            setCart(addedProductCart);
        }


    }, [products])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.key);

    }
    const searchEventHandler = (event) => {
        const searchText = event.target.value;

        const searchProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
        console.log(searchProducts.length)

        setDisplayProducts(searchProducts);
    }

    const topOrderedItemCount = count => {
        setOrderedItemsCount(count);
    }
    const prac = () => {

    }
    return (
        <>
            <div className='search-bar'>
                <input type="text" placeholder="Search Products..." onChange={searchEventHandler} />
                <span onClick={prac}>{element} <span className="count">{orderedItemsCount}</span></span>

            </div>
            <div className="shop">
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
                    <Cart topOrderedItemCount={topOrderedItemCount} cart={cart}></Cart>

                </div>

            </div>
        </>
    );
};

export default Shop;
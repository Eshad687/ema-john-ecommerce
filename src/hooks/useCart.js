import { useEffect, useState } from "react"
import { getStoredCart } from "../utilities/fakeDb";

const useCart = products => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        if (products.length) {
            const storedData = getStoredCart();
            const addedProductCart = [];
            for (const key in storedData) {
                const addedProduct = products.find(product => product.key === key);
                if (addedProduct) {
                    // adding a new property named quantity to the product
                    const quantity = storedData[key];
                    addedProduct.quantity = quantity;

                    addedProductCart.push(addedProduct);
                }
            }
            setCart(addedProductCart);
        }
    }, [products]);

    return [cart, setCart];
}

export default useCart;
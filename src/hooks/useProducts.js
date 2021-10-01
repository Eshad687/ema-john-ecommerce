//this is not the ideal way
// load all the data wherever we need
//ans call this function

import { useEffect, useState } from "react"

const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return [products, setProducts];


}

export default useProducts;


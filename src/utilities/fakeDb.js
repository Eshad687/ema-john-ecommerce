const getDb = () => localStorage.getItem('my_cart');
const updateDb = my_cart => localStorage.setItem('my_cart', JSON.stringify(my_cart));
const addToDb = (uniqueId) => {
    const item = getDb();
    let my_cart = {};
    if (!item) {

        my_cart[uniqueId] = 1;
    }
    else {
        my_cart = JSON.parse(item);
        if (my_cart[uniqueId]) {
            my_cart[uniqueId] += 1;
        }
        else {
            my_cart[uniqueId] = 1;
        }

    }
    updateDb(my_cart)
}
const getStoredCart = () => {
    const item = getDb();
    return item ? JSON.parse(item) : {};


}
const removeFromDb = (productKey) => {
    const item = getDb();
    if (item) {
        const my_cart = JSON.parse(item);
        delete my_cart[productKey];
        updateDb(my_cart);

    }
}

const clearStorage = () => {
    localStorage.removeItem('my_cart');
}

export { addToDb, getStoredCart, removeFromDb, clearStorage };
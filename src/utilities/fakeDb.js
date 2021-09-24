const getDb = () => localStorage.getItem('my_cart');
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
    localStorage.setItem('my_cart', JSON.stringify(my_cart));
}
const getStoredCart = () => {
    const item = getDb();
    return item ? JSON.parse(item) : {};


}

export { addToDb, getStoredCart };
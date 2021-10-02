const useOrderedQuantity = cart => {
    let totalQuantity = 0;

    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }

        totalQuantity = totalQuantity + product.quantity;
    }
    return [totalQuantity];

}
export default useOrderedQuantity;
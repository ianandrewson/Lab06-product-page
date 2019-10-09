export const findById = (productArray, id) => {
    const itemIdToFind = id;
    for (let i = 0; i < productArray.length; i++) {
        //debugger;
        if (productArray[i].id === itemIdToFind) {
            //console.log(productArray[i]);
            return productArray[i];
        }
        //console.log(`type of product.id is ${typeof productArray.id}`);
        //console.log(`type of itemIdToFind is ${typeof itemIdToFind}`);
    }
    return null;
};

export const calcLineItem = (quantity, price) => {
    return quantity * price;
};
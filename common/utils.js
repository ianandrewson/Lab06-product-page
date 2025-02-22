//import { cart } from "../Data/cart";

export const findById = (productArray, id) => {
    const itemIdToFind = id;
//    console.log('I AM IN THE FIND BY ID FUNCTION');
//   console.log(productArray, itemIdToFind);
//    console.log(productArray.length);
//    console.log(productArray);
    for (let i = 0; i < productArray.length; i++) { //!!!!!!!!!!!!!!!!!!
        //debugger;
//        console.log('I AM IN THE FOR LOOP');
        if (productArray[i].id === itemIdToFind) {
            return productArray[i];
        }
        //console.log(`type of product.id is ${typeof productArray.id}`);
        //console.log(`type of itemIdToFind is ${typeof itemIdToFind}`);
    }
    return null;
};

export const calcLineItem = (quantity, price) => {
    const amount = quantity * price;
    return roundToTwo(amount);
};

const roundToTwo = function(amountToRound) {
    return (amountToRound * 100) / 100;
};

export const toUSD = function(numberToConvert) {
    return numberToConvert.toLocaleString('en-US', { 
        style: 'currency', 
        currency: 'USD' 
    });
};

export const calcTotalOrder = function(cartArray, productArray) {
    let total = 0;
    for (let i = 0; i < cartArray.length; i++) {
        const productLookup = findById(productArray, cartArray[i].id);
        let lineItemPrice = calcLineItem(cartArray[i].quantity, productLookup.price);
        total += lineItemPrice;
    }
    total = toUSD(total);
    return total;
};
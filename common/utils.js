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


import { toUSD, findById } from '../common/utils.js';

const setCart = (arg1, arg2) => {
    localStorage.setItem(arg1, arg2);
};

const makeNewLineItem = (shoppingCart, instrument, addQuantityMenu) => {
    const lineItem = { id: instrument.id, quantity: Number(addQuantityMenu.value) };
    shoppingCart.push(lineItem);
};
export const renderProduct = (instrument) => {
    const newDiv = document.createElement('div');
    newDiv.id = instrument.id;
    newDiv.className = 'instrument';

    const nameP = document.createElement('p');
    nameP.className = 'name';
    nameP.textContent = instrument.name;
    newDiv.appendChild(nameP);

    const productImage = document.createElement('img');
    productImage.src = instrument.image;
    newDiv.appendChild(productImage);

    const descriptionP = document.createElement('p');
    descriptionP.className = 'description';
    descriptionP.textContent = instrument.description;
    newDiv.appendChild(descriptionP);

    const priceSection = document.createElement('section');
    priceSection.className = 'price';
    priceSection.textContent = toUSD(instrument.price);
    newDiv.appendChild(priceSection);

    const categoryFooter = document.createElement('footer');
    categoryFooter.className = 'category';
    categoryFooter.textContent = instrument.category;
    newDiv.appendChild(categoryFooter);

    const addQuantityMenu = document.createElement('input');
    addQuantityMenu.type = 'number';
    newDiv.appendChild(addQuantityMenu);


    const addButton = document.createElement('button');
    addButton.textContent = 'Add';
    addButton.value = instrument.id;
    addButton.addEventListener('click', () => {
        //Retrieve the existing shopping cart from localStorage
        //If there is no cart in data in localStorage, use an empty array: []
        if (!localStorage.getItem('shoppingCart')) {
            setCart('shoppingCart', '[]');
        }
        //If there is cart data in localStorage, turn into array using JSON.parse
        let shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
        // Check if the shopping cart already has the line item for this product. You can reuse your findById function for this taks.
        let lineItem = findById(shoppingCart, instrument.id);
        if (lineItem !== null){
            lineItem.quantity += Number(addQuantityMenu.value);
        } else {
            makeNewLineItem(shoppingCart, instrument, addQuantityMenu);
        }
        addQuantityMenu.value = null;
        setCart('shoppingCart', JSON.stringify(shoppingCart));
//     If it does exist, increment the quantity.
//     If it does not exist create a new line item with the following format: 
    });
    newDiv.appendChild(addButton);

    return newDiv;
};
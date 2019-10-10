import { toUSD, findById } from '../common/utils.js';

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
    //    console.log(`stored shoppingCart at beginning of event ${(localStorage.getItem('shoppingCart'))}`);
        if (!localStorage.getItem('shoppingCart')) {
            localStorage.setItem('shoppingCart', '[]');
    //        console.log('I MADE A NEW SHOPPING CART');
        //If there is cart data in localStorage, turn into array using JSON.parse
        } else {
    //        console.log('I DIDNT MAKE A NEW SHOPPING CART');
        }
    //    console.log(localStorage.getItem('shoppingCart'));
        let shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
    //    console.log(shoppingCart);
        // Check if the shopping cart already has the line item for this product. You can reuse your findById function for this taks.
        let lineItem = findById(shoppingCart, instrument.id);
    //    console.log(lineItem);
        if (lineItem !== null){
            lineItem.quantity += Number(addQuantityMenu.value);
        } else {
            lineItem = { id: instrument.id, quantity: addQuantityMenu.value };
    //        console.log(lineItem);
            shoppingCart.push(lineItem);
        }
        addQuantityMenu.value = null;
        localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
    //    console.log(`comparison test of instrument.id and shopping cart object id`);
    //    console.log(instrument.id === shoppingCart[0].id);

//     If it does exist, increment the quantity.
//     If it does not exist create a new line item with the following format: 

    });
    newDiv.appendChild(addButton);

    return newDiv;
};
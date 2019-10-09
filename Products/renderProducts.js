import { toUSD } from '../common/utils.js';

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

    const addButton = document.createElement('button');
    addButton.textContent = 'Add';
    addButton.value = instrument.id;
    newDiv.appendChild(addButton);

    return newDiv;
};
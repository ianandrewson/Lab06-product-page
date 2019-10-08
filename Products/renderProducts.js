export const renderProduct = (product) => {
    const newDiv = document.createElement('div');
    newDiv.id = product.id;
    newDiv.className = 'product';

    const nameP = document.createElement('p');
    nameP.className = 'name';
    nameP.textContent = product.name;
    newDiv.appendChild(nameP);

    const productImage = document.createElement('img');
    productImage.src = product.image;
    newDiv.appendChild(productImage);

    const descriptionP = document.createElement('p');
    descriptionP.className = 'description';
    descriptionP.textContent = product.description;
    newDiv.appendChild(descriptionP);

    const priceSection = document.createElement('section');
    priceSection.className = 'price';
    priceSection.textContent = product. price;
    newDiv.appendChild(priceSection);

    const categoryFooter = document.createElement('footer');
    categoryFooter.className = 'category';
    categoryFooter.textContent = product.category;
    newDiv.appendChild(categoryFooter);

    const addButton = document.createElement('button');
    addButton.textContent = 'Add';
    addButton.value = product.id;
    newDiv.appendChild(addButton);

    return newDiv;
};
import * as utils from '../common/utils.js';

export const renderTableRow = (product, order) => {
    const newTableRow = document.createElement('tr');
    
    const tableColOne = document.createElement('td');
    tableColOne.textContent = product.name;
    newTableRow.appendChild(tableColOne);

    const tableColTwo = document.createElement('td');
    tableColTwo.textContent = order.quantity;
    newTableRow.appendChild(tableColTwo);

    const tableColThree = document.createElement('td');
    tableColThree.textContent = utils.toUSD(product.price);
    newTableRow.appendChild(tableColThree);

    const tableColFour = document.createElement('td');
    tableColFour.textContent = utils.toUSD(utils.calcLineItem(order.quantity, product.price));
    newTableRow.appendChild(tableColFour);

    return newTableRow;
};
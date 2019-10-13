import * as utils from '../common/utils.js';

export const getSales = function() {
    if (!localStorage.getItem('sales')) {
        localStorage.setItem('sales', '[]');
    }
    let salesReport = JSON.parse(localStorage.getItem('sales'));
    return salesReport;
};

export const placeOrder = function() {
    let previousSales = getSales();
    let thisSale = JSON.parse(localStorage.getItem('shoppingCart'));

    thisSale.forEach(item => {
        let previouslySoldItem = utils.findById(previousSales, item.id);
        if (!previouslySoldItem) {
            previousSales.push(item);
        } else {
            previouslySoldItem.quantity += item.quantity;
        }
    });
    localStorage.setItem('sales', JSON.stringify(previousSales));
    return;
};
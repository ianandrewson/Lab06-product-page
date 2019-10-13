import { instrumentList } from '../Products/instruments.js';
import { renderTableRow } from './render-table-row.js';
import * as utils from '../common/utils.js';
import { placeOrder } from '../sales-report/sales-functions.js';
//import { cart } from '../Data/cart.js';

//get the shopping cart to render
let cart = JSON.parse(localStorage.getItem('shoppingCart'));

//if there is no shopping cart, disable checkout button
if (!cart){
    document.getElementById('checkout').style.cssText = 'display: none';
}

//Add an event handler to the "Place Order" button that:
document.getElementById('checkout').addEventListener('click', () => {
//    Displays an alert with the contents of the cart
    let orderMessage = '';
    for (let i = 0; i < cart.length; i++){
        orderMessage += cart[i].quantity + ' ' + utils.findById(instrumentList, cart[i].id).name + '\n';
    }
    alert(`You are ordering: \n ${orderMessage}`);
    // Add the shopping cart to the sales report;
    placeOrder();
    //    Remove the cart from localStorage (.removeItem)
    localStorage.removeItem('shoppingCart');
    //    Redirect the user back to the home page
    window.location.href = '../index.html';
});



//render shopping cart
let shoppingCartTable = document.querySelector('tbody');
for (let i = 0; i < cart.length; i++) {
    let boughtProduct = utils.findById(instrumentList, cart[i].id);
    shoppingCartTable.appendChild(renderTableRow(boughtProduct, cart[i]));
}

let grandTotalCell = document.getElementById('grand-total');
grandTotalCell.textContent = utils.calcTotalOrder(cart, instrumentList);

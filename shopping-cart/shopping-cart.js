import { instrumentList } from '../Products/instruments.js';
import { renderTableRow } from './render-table-row.js';
import * as utils from '../common/utils.js';
import { cart } from '../Data/cart.js';

let shoppingCartTable = document.querySelector('tbody');
for (let i = 0; i < cart.length; i++) {
    let boughtProduct = utils.findById(instrumentList, cart[i].id);
    shoppingCartTable.appendChild(renderTableRow(boughtProduct, cart[i]));
}

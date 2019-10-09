import { instrumentList } from '../Products/instruments.js';
import { renderTableRow } from './render-table-row.js';
import * as utils from '../common/utils.js';

export const cart = [{
    id: 'ms20',
    quantity: 2
}, {
    id: 'roland808',
    quantity: 1
}, {
    id: 'polyEvolver',
    quantity: 3
}, {
    id: 'superSix',
    quantity: 1
}];

const shoppingCartTable = document.querySelector('tbody');
for (let i = 0; i < cart.length; i++) {
    let boughtProduct = utils.findById(instrumentList, cart[i].id);
    shoppingCartTable.appendChild(renderTableRow(boughtProduct, cart[i]));
}

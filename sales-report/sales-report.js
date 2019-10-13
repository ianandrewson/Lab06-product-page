import { instrumentList } from '../Products/instruments.js';
import { renderTableRow } from '../shopping-cart/render-table-row.js';
import * as utils from '../common/utils.js';
import { getSales } from './sales-functions.js';



// //get the sales to render
let salesList = getSales();

let salesTable = document.getElementById('sales-table');
for (let i = 0; i < salesList.length; i++) {
    let boughtProduct = utils.findById(instrumentList, salesList[i].id);
    salesTable.appendChild(renderTableRow(boughtProduct, salesList[i]));
}

let grandTotalCell = document.getElementById('grand-total');
grandTotalCell.textContent = utils.calcTotalOrder(salesList, instrumentList);

import { renderProduct } from './renderProducts.js';
import { instrumentList } from './instruments.js';

const renderedProductList = document.getElementById('product-list');

for (let i = 0; i < instrumentList.length; i++) {
    let instrument = instrumentList[i];
    const instrumentToRender = renderProduct(instrument);
    renderedProductList.appendChild(instrumentToRender);
}
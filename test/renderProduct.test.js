// IMPORT MODULES under test here:
// import example from '../src/example.js';

import { renderProduct } from '../Products/renderProducts.js';
import { renderTableRow } from '../shopping-cart/render-table-row.js';
import * as utils from '../common/utils.js';
import { instrumentList } from '../Products/instruments.js';
import { cart } from '../Data/cart.js';

const test = QUnit.test;

test('renders a product', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = '<div id="ms20" class="instrument"><p class="name">Korg MS-20</p><img src="./assests/ms20.png"><p class="description">Analog Subtractive Synthesizer</p><section class="price">$400.00</section><footer class="category">Synth</footer><input type=\"number\"><button value="ms20">Add</button></div>';

    const ms20 = {
        id: 'ms20',
        name: 'Korg MS-20',
        image: './assests/ms20.png',
        description: 'Analog Subtractive Synthesizer',
        category: 'Synth',
        price: 400
    };

    //Act 
    // Call the function you're testing and set the result to a const

    const dom = renderProduct(ms20);
    const html = dom.outerHTML;


    //Assert
    // Make assertions about what is expected valid result
    assert.equal(html, expected);
});

test('renders a table row', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = '<tr><td>Korg MS-20</td><td>2</td><td>$400.00</td><td>$800.00</td></tr>';

    const ms20 = {
        id: 'ms20',
        name: 'Korg MS-20',
        image: '../assests/ms20.png',
        description: 'Analog Subtractive Synthesizer',
        category: 'Synth',
        price: 400.00
    };

    const ms20Order = {
        id: 'ms20',
        quantity: 2
    };
    //Act 
    // Call the function you're testing and set the result to a const

    const dom = renderTableRow(ms20, ms20Order);
    const html = dom.outerHTML;


    //Assert
    // Make assertions about what is expected valid result
    assert.equal(html, expected);
});

test('returns item matching given ID', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const ms20 = {
        id: 'ms20',
        name: 'Korg MS-20',
        image: '../assests/ms20.png',
        description: 'Analog Subtractive Synthesizer',
        category: 'Synth',
        price: 400.00
    };

    const expected = ms20;

    //Act 
    // Call the function you're testing and set the result to a const

    const returnedItem = utils.findById(instrumentList, 'ms20');
    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual((returnedItem), (expected));
});

test('returns total for particular item', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    

    const quantity = 2;
    const price = 400;
    const expected = 800;

    //Act 
    // Call the function you're testing and set the result to a const

    const result = utils.calcLineItem(quantity, price);


    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});

test('returns total for entire shopping cart', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    

    const shoppingCartItems = cart;
    const productList = instrumentList;
    const expected = '$15,100.00';

    //Act 
    // Call the function you're testing and set the result to a const

    const result = utils.calcTotalOrder(shoppingCartItems, productList);


    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});
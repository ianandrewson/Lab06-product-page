// IMPORT MODULES under test here:
// import example from '../src/example.js';

import { renderProduct } from '../Products/renderProducts.js';
import { renderTableRow } from '../shopping-cart/render-table-row.js';
import * as utils from '../common/utils.js';
import { instrumentList } from '../Products/instruments.js';
import { fakeCart } from '../Data/cart.js';
import { getSales } from '../sales-report/sales-functions.js';
import { placeOrder } from '../sales-report/sales-functions.js  ';

const test = QUnit.test;

test('renders a product', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = '<div id="ms20" class="instrument"><p class="name">Korg MS-20</p><img src="./assests/ms20.png"><p class="description">Analog Subtractive Synthesizer</p><section class="price">$400.00</section><footer class="category">Synth</footer><input type="number"><button value="ms20">Add</button></div>';

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
    

    const shoppingCartItems = fakeCart;
    const productList = instrumentList;
    const expected = '$15,100.00';

    //Act 
    // Call the function you're testing and set the result to a const

    const result = utils.calcTotalOrder(shoppingCartItems, productList);


    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});


test('.getSales returns empty sales array', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    
    function storageMock() {
        var storage = {};

        return {
            setItem: function(key, value) {
                storage[key] = value || '';
            },
            getItem: function(key) {
                return key in storage ? storage[key] : null;
            },
            removeItem: function(key) {
                delete storage[key];
            },
            get length() {
                return Object.keys(storage).length;
            },
            key: function(i) {
                var keys = Object.keys(storage);
                return keys[i] || null;
            }, 
            clear: function() {
                storage = {};
                return storage;
            }
        };
    }

    Object.defineProperty(window, 'localStorage', {
        value: storageMock(),
    });

    localStorage.clear();
    const expected = [];

    //Act 
    // Call the function you're testing and set the result to a const

    const result = getSales();


    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(result, expected);
});

test('.placeOrder correctly adds to sales array', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    function storageMock() {
        var storage = {};

        return {
            setItem: function(key, value) {
                storage[key] = value || '';
            },
            getItem: function(key) {
                return key in storage ? storage[key] : null;
            },
            removeItem: function(key) {
                delete storage[key];
            },
            get length() {
                return Object.keys(storage).length;
            },
            key: function(i) {
                var keys = Object.keys(storage);
                return keys[i] || null;
            }
        };
    }

    Object.defineProperty(window, 'localStorage', {
        value: storageMock(),
    });
    let historicalSales = fakeCart;
    //Set previously exisiting sales-report
    localStorage.setItem('sales', JSON.stringify(historicalSales));
    //Set new shopping cart, representing new order to place
    let strungCart = JSON.stringify([
        {
            id: 'arp2600',
            quantity: 2
        }, {
            id: 'deckards',
            quantity: 2
        }
    ]);
    localStorage.setItem('shoppingCart', strungCart);

    //old sales report plus new order
    const expected = JSON.stringify([{
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
    }, {
        id: 'arp2600',
        quantity: 2
    }, {
        id: 'deckards',
        quantity: 2
    }]);
    //Act 
    // Call the function you're testing and set the result to a const
    placeOrder();
    const result = localStorage.getItem('sales');


    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});
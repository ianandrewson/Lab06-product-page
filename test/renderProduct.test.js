// IMPORT MODULES under test here:
// import example from '../src/example.js';

import { renderProduct } from '../app.js';

const test = QUnit.test;

test('renders a product', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = '<div id="ms20" class="product"><p class="name">Korg MS-20</p><img src="./assests/ms20.png"><p class="description">Analog Subtractive Synthesizer</p><section class="price">$400.00</section><footer class="category">Synth</footer><button value="ms20">Add</button></div>';

    const ms20 = {
        id: 'ms20',
        name: 'Korg MS-20',
        image: './assests/ms20.png',
        description: 'Analog Subtractive Synthesizer',
        category: 'Synth',
        price: '$400.00'
    };

    //Act 
    // Call the function you're testing and set the result to a const

    const dom = renderProduct(ms20);
    const html = dom.outerHTML;


    //Assert
    // Make assertions about what is expected valid result
    assert.equal(html, expected);
});

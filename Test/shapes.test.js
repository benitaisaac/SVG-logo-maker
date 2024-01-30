const Shape = require('../lib/shapes.js');
const Triangle = require('../lib/triangle.js');
const Circle = require('../lib/circle.js');
const Square = require('../lib/square.js');
// const fixtures = require('fixture');

describe('Shape', () => {
    
    const texts = [
        ['Triangle', 'ABC', 'red', 'blue'],
        ['Triangle', 'xhy', 'blue', 'yellow'],
        ['Triangle', 'oqr', 'green', 'white'],
        ['Triangle', 'zap', 'purplee', 'black'],
];


    test.each(texts)(
        "TEST for shape %j, text %j, color1 %j, color 2 %j",
        (myshape, mytext, mycolor1, mycolor2) => {
    

      const shapeobj = new Triangle(mytext, mycolor1, mycolor2);
      const exp_result = `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">

    <polygon points="150 0, 0 200, 300 200" fill="${mycolor2}" />

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${mycolor1}">${mytext}</text>

</svg>`
      
expect(shapeobj.renderSvg()).toEqual(exp_result);
    });
  });

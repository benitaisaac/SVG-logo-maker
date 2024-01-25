const Shape = require('../lib/shapes.js');
const Triangle = require('../lib/triangle.js');
const Circle = require('../lib/circle.js');
const Square = require('../lib/square.js');

describe('Shape', () => {
    
    // const texts = ['ABC', 'uuu', 'apz', 'pqr', 'XYZ'];


    // test.each(texts)(
    //     "passes for text %j",
    //     (fixture) => expect(triangle.renderSvg()).toEqual(result)
    

    //     const result = `<svg version="1.1"
    //     width="300" height="200"
    //     xmlns="http://www.w3.org/2000/svg">
    
    // <polygon points="150 0, 0 200, 300 200" fill="red" />
    
    // <text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">${fixture}</text>
    
    // </svg>`
       
    // );
    

    test('should render the correct triangle svg string', () => {
      const triangle = new Triangle('abc', 'blue', 'red');
      const result = `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">

    <polygon points="150 0, 0 200, 300 200" fill="red" />

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">abc</text>

</svg>`
      expect(triangle.renderSvg()).toEqual(result);
    });
  });


describe('Shape', () => {
    test('should render correct circle svg string', () => {
        const circle = new Circle('acb', 'purple', 'blue');
        const result = `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">

<circle cx="150" cy="100" r="80" fill="blue" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="purple">acb</text>

</svg>`
expect(circle.renderSvg()).toEqual(result);
    });
});


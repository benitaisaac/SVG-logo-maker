//require shape class
const Shape = require('./shapes');
//create triangle class from shape class
class Triangle extends Shape{
    //include method to create the appropriate template literal based off of shape
    renderSvg(){
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">

    <polygon points="150 0, 0 200, 300 200" fill="${this.shapeColor}" />

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

</svg>`
    }
};
//export class in order to use in index.js
module.exports = Triangle; 
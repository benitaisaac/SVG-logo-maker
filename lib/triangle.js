const Shape = require('./shapes');

class Triangle extends Shape{
    renderSvg(){
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">

    <polygon points="150 0, 0 200, 300 200" fill="${this.shapeColor}" />

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

</svg>`
    }
};

module.exports = Triangle; 
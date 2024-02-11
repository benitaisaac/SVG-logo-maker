//Create the shape class
class Shape {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
}

//export shape class in order to use in other library files 
module.exports = Shape;

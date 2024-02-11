const inquirer = require('inquirer'); 
const fs = require('fs');

const Shape = require('./lib/shapes.js');
const Circle = require('./lib/circle.js');
const Triangle = require('./lib/triangle.js');
const Square = require('./lib/square.js');


// Create all questions that user will have to answer
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three letter to appear on your logo.',
    },
    {
        type: 'input',
        name: 'text_color',
        message: 'What color do you want the text to be?',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape do you want your logo to be?',
        choices: [
            'circle',
            'triangle',
            'square',
        ]
    },
    {
        type: 'input',
        name: 'shape_color',
        message: 'What color do you want the shape to be?',
    }
]
 
inquirer
.prompt(questions)

.then((answers) => {

switch(answers.shape){
    case 'circle':
        mm = new Circle(answers.text, answers.text_color, answers.shape_color);
        break

    case 'square':
        mm = new Square(answers.text, answers.text_color, answers.shape_color);
        break

    case 'triangle':
        mm = new Triangle(answers.text, answers.text_color, answers.shape_color);
        break
}

    //const mm = new Shape(answers.text, answers.text_color, answers.shape_color, answers.shape);
    fs.writeFile('logo.svg', mm.renderSvg(), function (err) {
        if (err) throw err;
        console.log('Saved!');
      });

    
} );
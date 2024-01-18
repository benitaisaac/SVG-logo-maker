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

//TO DO: have this function create an SVC file and populate answers in there 
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



    // let mm = new Shape('ABC', 'white', 'red', 'square');

    //console.log(mm);

    // const myShape = new Shape(answers.text, answers.textColor, answers.shapeColour, answers.shape);
    // console.log(myShape.render());
    // fs.writeFile('logo.svg', myShape.render(), function (err) {
    //         if (err) throw err;
    //         console.log('Saved!');
    //       });
    // fs.writeFile('input.JSON', JSON.stringify(answers, null, '  '));
    //return JSON.stringify(answers, null, '  ');

    
} );

// fs.writeFile('logo.svg', myShape.render(), function (err) {
    //     if (err) throw err;
    //     console.log('Saved!');
    //   });




// .then((answers) => {
//     fs.writeFile('README.md', generateREADME(answers), (err) => {
//         if (err) throw err;
//         console.log('The README was created!');
//     })
//   });


//Acceptance Criteria: 
//GIVEN a command-line application that accepts user input
// WHEN I am prompted for text
// THEN I can enter up to three characters

// WHEN I am prompted for the text color
// THEN I can enter a color keyword (OR a hexadecimal number)

// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square

// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword (OR a hexadecimal number)

// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line

// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered


class Shape{
    constructor(text, textColor, shapeColor){
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
}

class Circle extends Shape{
    //There is a shorthand way of copying all the properties of the parent class right?
    constructor(text, textColor, shapeColor){
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
    
    render(){
        return 
        `
        <svg version="1.1"
                width="300" height="200"
                xmlns="http://www.w3.org/2000/svg">
      
        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
   
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
   
        </svg>`
    }
}

class square extends Shape{
    constructor(){

    }
    render(){
        return 
        `<svg version="1.1"
                width="300" height="200"
                xmlns="http://www.w3.org/2000/svg">
      
         <rect x="50" y="0" width="200" height="200" fill="${this.shapeColor}" />
   
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
   
        </svg>`
    }

}

class Triangle extends Shape{
    constructor(){

    }
    render(){
        return 
        `
        <svg version="1.1"
                width="300" height="200"
                xmlns="http://www.w3.org/2000/svg">
      
            <<polygon points="150 0, 0 200, 300 200" fill="${this.shapeColor}" />
   
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
   
        </svg>`
    }

}



const { writeFile } = require('fs/promises');
const jsdom = require('jsdom');
const inquirer = require('inquirer');

const { JSDOM } = jsdom;
const { window } = new JSDOM();
global.document = window.document;



class Shape {
constructor ( colour, text){
        this.colour = colour;
        this.text = text;             
}
renderText() {
    const createtext = document.createElementNS("http://www.w3.org/2000/svg", "text");
    createtext.setAttribute("x", "150");
    createtext.setAttribute("y", "125");
    createtext.setAttribute("font-size", "60");
    createtext.setAttribute("text-anchor", "middle");
    createtext.setAttribute("fill", "white");
    createtext.textContent = this.text;
    return createtext;
  }
}

class Render {
    render() {
      const imageArea = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      imageArea.setAttribute("version", "1.1");
      imageArea.setAttribute("width", "300");
      imageArea.setAttribute("height", "200");
      imageArea.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      imageArea.setAttribute("id", "print-area");
      document.body.appendChild(imageArea);
      return imageArea;
    }
  }

class Circle extends Shape {
  renderShape() {
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", "150");
    circle.setAttribute("cy", "100");
    circle.setAttribute("r", "80");
    circle.setAttribute("fill", this.colour);
    return circle;
  }
}

class Square extends Shape {
    renderShape() {
      const square = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      square.setAttribute("x", "110");
      square.setAttribute("y", "60");
      square.setAttribute("width", "80");
      square.setAttribute("height", "80");
      square.setAttribute("fill", this.colour);
      return square;
    }

}

class Triangle extends Shape {
    renderShape() {
      const triangle = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
      triangle.setAttribute("points", "150,50 50,150 250,150");
      triangle.setAttribute("fill", this.colour);
      return triangle;
    }
  }

var canvasArea = new Render();

const questions = [
    {
        type: "list",
        name: "Shape",
        message: "please select shape",
        choices: ["Circle", "Square", "Triangle"],
    },
    {
        type: "input",
        name: "colour",
        message: "please choose a logo colour",

    },
    {
        type: "input",
        name: "message",
        message: "please enter a three character message for your logo",

    },

];

inquirer.prompt(questions).then(async (answer) =>{
    if(answer.Shape == "Circle"){
        var newShape = new Circle(answer.colour, answer.message);
    }
    if(answer.Shape == "Square"){
        var newShape = new Square(answer.colour, answer.message);
    }
    if(answer.Shape == "Triangle"){
        var newShape = new Triangle(answer.colour, answer.message);
    }
    const svgContent = canvasArea.render();
    svgContent.appendChild(newShape.renderShape());
    svgContent.appendChild(newShape.renderText());
    try {
    await writeFile(`logo.svg`, svgContent.outerHTML)
    console.log("Successfull written to file");
    } catch (err) {
        console.log(err);
    }

}).catch((err)=>{err ? console.log(err) : console.log("Shape Successfull Creates")});  












module.exports =  {Shape, Circle, Square, Triangle};



// const { writeFile } = require('fs/promises');
//$(document).ready(function() {

    //const inquirer = require("inquirer");
const fs = require("fs");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const $ = require('jquery')(window);

class Shape {
constructor ( colour, text){
        this.colour = colour;
        this.text = text;             
}
renderText(){
    var createtext = $("<text>");
    createtext.attr({"x":"150",
    "y":"125",
    "font-size":"60",
    "text-anchor":"middle",
    "fill":"white"});
    createtext.text(this.text);
    //$("#print-area").append(createtext);
    return createtext;
}
}

class Render{
    render(){
        var imageArea = $("<svg>");
        imageArea.attr({"version":"1.1",
        "width":"300",
        "height":"200",
        "xmlns":"http://www.w3.org/2000/svg",
        "id":"print-area"});
        $("body").append(imageArea);
        return imageArea;

    }
}

class Circle extends Shape{
    renderShape (){
        //var doc = document.$("body");
        var circle = $("<circle>");
        circle.attr({"cx":"150",
        "cy":"100",
        "r":"80",
        "fill":`${this.colour}`});
       // $("#print-area").append(circle);
       return circle;
    }

}

class Square extends Shape{
    renderShape (){
        //var doc = document.$("body");
        var square = $("<rect>");
        square.attr({"x":"150",
        "y":"100",
        "width":"80",
        "height": "80",
        "fill":`${this.colour}`});
        return square;
    }

}

class Triangle extends Shape{
    renderShape (){
        //var doc = document.$("body");
        var triangle = $("<polygon>");
        triangle.attr({"points":"150,50 50,150 250,150",
        fill:`${this.colour}`});
        return triangle;

    
    }

}

var canvasArea = new Render();


var newCircle = new Circle("green", "test");

var svgContent = canvasArea.render();
svgContent.append(newCircle.renderShape());
svgContent.append(newCircle.renderText());

fs.writeFile(`logo.svg`, svgContent[0].outerHTML , (err)=>{
    err ? console.log(err) : console.log("Successfull written to file")});

module.exports = {Shape, Circle, Square, Triangle};



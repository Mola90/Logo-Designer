// const { writeFile } = require('fs/promises');
$(document).ready(function() {

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
        $("#print-area").append(circle);
    }

}

class Square extends Shape{
    renderShape (){
        //var doc = document.$("body");
        var circle = $("<square>");
        circle.attr({"x":"150",
        "y":"100",
        "width":"80",
        "fill":`${this.colour}`});
    }

}

class Triangle extends Shape{
    renderShape (){
        //var doc = document.$("body");
        var circle = $("<polygon>");
        circle.attr({"points":"150,50 50,150 250,150",
        fill:`${this.colour}`});
    }

}

var canvasArea = new Render();

canvasArea.render();

var newCircle = new Circle("green", "test");

newCircle.renderShape();

});
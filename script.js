class Shape {
constructor ( colour, text){
        this.colour = colour;
        this.text = text;

        renderCanvas(){
            var imageArea = $("<svg>");
            imageArea.attr({"version":"1.1",
            "width":"300",
            "height":"200",
            "xmlns":"http://www.w3.org/2000/svg"});
        }
}
}

class Circle extends Shape{
    render (){
        var doc = document.$("body");

    }
}
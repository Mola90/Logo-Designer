const {Triangle} = require("./script");

test("Triangle render correct SVG", ()=> {
    const triangle = new Triangle ("green", "test");
    const renderedShape = triangle.renderShape()[0].outerHTML;
    const expectedShape = '<polygon points="150,50 50,150 250,150" fill="green"></polygon>';
    expect(renderedShape).toBe(expectedShape);
});


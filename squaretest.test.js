const {Square} = require("./script");

test("Square render correct SVG", ()=> {
    const square = new Square ("blue", "test");
    const renderedShape = square.renderShape()[0].outerHTML;
    const expectedShape = '<rect x="150" y="100" width="80" height="80" fill="blue"></rect>';
    expect(renderedShape).toBe(expectedShape);
});

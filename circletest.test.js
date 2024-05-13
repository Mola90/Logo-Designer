const {Circle} = require("./script");

test("Cirlse render correct SVG", ()=> {
    const circle = new Circle ("green", "test");
    const renderedShape = circle.renderShape()[0].outerHTML;
    const expectedShape = '<circle cx="150" cy="100" r="80" fill="green"></circle>';
    expect(renderedShape).toBe(expectedShape);
});

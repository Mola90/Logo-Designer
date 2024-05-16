const { JSDOM } = require('jsdom');
const {Square} = require("./script");
const { window } = new JSDOM();
global.document = window.document;

test("Square render correct SVG", ()=> {
    const square = new Square ("blue", "test");
    const renderedShape = square.renderShape().outerHTML;
    const expectedShape = '<rect x="110" y="60" width="80" height="80" fill="blue"></rect>';
    expect(renderedShape).toBe(expectedShape);
});

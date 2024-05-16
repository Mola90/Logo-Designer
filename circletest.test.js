const { JSDOM } = require('jsdom');
const {Circle} = require("./script");

const { window } = new JSDOM();
global.document = window.document;

test("Cirlse render correct SVG", ()=> {
    const circle = new Circle ("green", "test");
    const renderedShape = circle.renderShape().outerHTML;
    const expectedShape = '<circle cx="150" cy="100" r="80" fill="green"></circle>';
    expect(renderedShape).toBe(expectedShape);
});

// CommonJS is the format which most modules on npm are delivered in. Even if you're writing using the ES Modules syntax above,
// having a brief understanding of how CommonJS syntax works will help you debug easier.

// Exporting
// Identifiers are exported via setting the exports property on a global called module.

function absolute(num: number) {
    return num * (num < 0 ? -1 : 1);
}

/*
module.exports = {
    pi: 3.14,
    squareTwo: 1.41,
    phi: 1.61,
    absolute,
};

Then these files can be imported via a require statement

const maths = require("maths");
maths.pi;

Or you can simolify a bit using the destructuring feature in Javascript:

const { squareTwo } = require("maths";

*/
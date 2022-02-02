var changingString = "Hello World";
changingString = "Olá Mundo";
// Because "changingString" can represent any possible string, that is how Typescript describes it in the type system
// let changingString: string
var constantString = "Hello World";
// Cause "constantString" can only represent 1 possible string, it has a literal type representation
// const constantString: "Hello World"
function printTextAlignment(alignment) {
    console.log("text-alignment: ".concat(alignment));
}
printTextAlignment("left");
printTextAlignment("center");
printTextAlignment("right");
function configure(x) {
    console.log(x);
}
configure({ width: 10 });
configure("auto");

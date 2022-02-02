let changingString = "Hello World";
changingString = "Olá Mundo";
// Because "changingString" can represent any possible string, that is how Typescript describes it in the type system
// let changingString: string

const constantString = "Hello World";
// Cause "constantString" can only represent 1 possible string, it has a literal type representation
// const constantString: "Hello World"

function printTextAlignment(alignment: "left" | "right" | "center"): void {
    console.log(`text-alignment: ${alignment}`);
}
printTextAlignment("left")
printTextAlignment("center");
printTextAlignment("right");

interface Options {
    width: number;
}

function configure(x: Options | "auto"): void {
    console.log(x);
}

configure({width: 10});
configure("auto");
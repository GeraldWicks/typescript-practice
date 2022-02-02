// Sometimes you will have information about the type of a value that Typescript can't know about.
// In this situation, you can use a type assertion to specify a more specific type.
// const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
// You can also use the angle-bracket syntax (except if the code is in a .tsx file), which is equivalent
// const myNewCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");
// Typescript only allows type assertions which convert to a more specific or less specific version of a type. This rule prevents "impossible" 
// coercions like:
// const x = "hello" as number;
// Probelm: Conversion of type 'string' to type 'number' may be a mistake...
var code = 123;
var newCode = code;
console.log(typeof (newCode)); //Output : number

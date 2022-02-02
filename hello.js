// tsc hello.ts -> generate a Javascript file from the Typescript file
// node hello.js -> runs the javascript file with nodeJS
// The Basics
function printGreeting(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), " !"));
}
printGreeting("Gerald", new Date());
// Everyday Types
// Use the compiler flag "noImplicitAny" to flag any implicit any as an error.
var myName = "Gerald";
function getFavoriteNumber() {
    return 42;
}
console.log("My favorite number is ".concat(getFavoriteNumber()));
function printCoordinate(coordinate) {
    console.log("The coordinate x is ".concat(coordinate.x));
    console.log("The coordinate y is ".concat(coordinate.y));
}
printCoordinate({ x: 2, y: 4 });
function printName(obj) {
    console.log(obj.first);
    obj.last !== undefined && console.log(obj.last);
}
printName({ first: "Bob" });
printName({ first: "Bob", last: "Marley" });
function printId(id) {
    console.log("Your ID is: ".concat(id));
}
printId(101);
printId("202");
// const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");
function printText(alignemnt) {
    console.log("".concat(alignemnt, "."));
}
printText("left");
printText("right");
printText("center");
function compare(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
}
console.log(compare("123", "123"));
console.log(compare("14", "12"));
console.log(compare("12", "14"));
/*
TypeScript also has a special syntax for removing null and undefined from a type without doing any explicit checking. Writing ! after any expression
is effectively a type assertion that the value isn’t null or undefined:
*/
function printMyNumber(x) {
    console.log(x.toFixed());
}
printMyNumber(42);
function getUserOnlineMessage(numUsersOnline) {
    return numUsersOnline ? "There are ".concat(numUsersOnline, " online now !") : "Nobody's here.";
}
console.log(getUserOnlineMessage(10));
function greeter(fn) {
    fn("Hello, World");
}
function printToConsole(s) {
    console.log(s);
}
greeter(printToConsole);
function doSomething(fn) {
    console.log(fn.description + " returned " + fn(6));
}
function fn(ctor) {
    return new ctor("hello");
}
function getFirstElement(arr) {
    return arr[0];
}
var elements = ['a', 'b', 'c', 'd'];
console.log(getFirstElement(elements));

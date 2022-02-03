// The simplest way to describe a function with a function type expression. These types are syntactically similar to arrow functions:
function greeter(action) {
    action("Hello world !");
}
function printToConsole(s) {
    console.log(s);
}
greeter(printToConsole);

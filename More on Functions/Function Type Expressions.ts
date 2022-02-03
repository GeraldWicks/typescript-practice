// The simplest way to describe a function with a function type expression. These types are syntactically similar to arrow functions:

type Fn =  (a: string) => void;

function greeter(action: Fn) {
    action("Hello world !");
}

function printToConsole(s: string) {
    console.log(s);
}

greeter(printToConsole);
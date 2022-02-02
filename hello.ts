// tsc hello.ts -> generate a Javascript file from the Typescript file
// node hello.js -> runs the javascript file with nodeJS

// The Basics

function printGreeting(person: string, date: Date): void {
    console.log(`Hello ${person}, today is ${date.toDateString()} !`);
}

printGreeting("Gerald", new Date());


// Everyday Types

// Use the compiler flag "noImplicitAny" to flag any implicit any as an error.

let myName: string = "Gerald";

function getFavoriteNumber(): number {
    return 42;
}

console.log(`My favorite number is ${getFavoriteNumber()}`);

function printCoordinate(coordinate: {x: number, y: number}): void {
    console.log(`The coordinate x is ${coordinate.x}`);
    console.log(`The coordinate y is ${coordinate.y}`);
}

printCoordinate({ x: 2, y: 4 });

// Object types can also specify that some or all of they properties are optional. To do this, add a ? after the property name

interface fullNameType {
    first: string,
    last?: string
}

function printName(obj: fullNameType) {
    console.log(obj.first);
    obj.last !== undefined && console.log(obj.last);
}

printName({ first: "Bob" });
printName({ first: "Bob", last: "Marley" });

function printId(id:number | string) {
    console.log(`Your ID is: ${id}`);
}

printId(101);
printId("202");

// const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");

function printText(alignemnt: "left" | "right" | "center"): void {
    console.log(`${alignemnt}.`);
}

printText("left");
printText("right");
printText("center");

function compare(a: string, b: string): -1 | 0 | 1 {
    return a === b ? 0 : a > b ? 1 : -1;
}

console.log(compare("123", "123"));
console.log(compare("14", "12"));
console.log(compare("12", "14"));

/*
TypeScript also has a special syntax for removing null and undefined from a type without doing any explicit checking. Writing ! after any expression 
is effectively a type assertion that the value isn’t null or undefined:
*/

function printMyNumber(x?: number | null): void {
    console.log(x!.toFixed());
} 

printMyNumber(42);

function getUserOnlineMessage(numUsersOnline: number) {
    return numUsersOnline ? `There are ${numUsersOnline} online now !` : "Nobody's here.";
}

console.log(getUserOnlineMessage(10));

type GreetFunction = (a: string) => void;

function greeter(fn: GreetFunction) {
    fn("Hello, World");
}

function printToConsole(s: string) {
    console.log(s);
}

greeter(printToConsole);

type DescribableFunction = {
    description: string;
    (someArg: number): boolean;
}

function doSomething(fn: DescribableFunction) {
    console.log(fn.description + " returned " + fn(6) )
}

type SomeObject = any;

type SomeConstructor = {
    new (s: string): SomeObject;
};

function fn(ctor: SomeConstructor) {
    return new ctor("hello");
}

function getFirstElement<Type>(arr: Type[]): Type | undefined {
    return arr[0];
}

const elements = ['a', 'b', 'c', 'd'];

console.log(getFirstElement(elements));
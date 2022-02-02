// tsc "tsc, the Typescript compiler.ts"
// node "tsc, the Typescript compiler.js"

console.log("Hello world !");

function greet(person: string, date: Date) {
    console.log(`Hello ${person}, today is ${date} !`);
}

greet("Gerald", new Date());
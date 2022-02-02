// tsc "tsc, the Typescript compiler.ts"
// node "tsc, the Typescript compiler.js"
console.log("Hello world !");
function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date, " !"));
}
greet("Gerald", new Date());

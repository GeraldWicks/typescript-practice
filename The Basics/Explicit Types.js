// tsc "Explicit Types.ts"
// node "Explicit Types.js"
function greetSecond(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString()));
}
greetSecond("Joao", new Date());

// tsc --target es2015 "Downleveling.ts"
// target: meaning code should be able to run wherever ECMAScript 2015
// node "Downleveling.js"
function thirdGreet(person, date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}`);
}
thirdGreet("Gerrard", new Date());

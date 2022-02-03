//Generics are used when we want to describe a correspondence bewtween two values. We do this by declaring a type parameter in the function signature
function getFirstElement(arr) {
    return arr[0];
}
var firstElement = getFirstElement(["a", "b", "c"]);
console.log(typeof firstElement);
var firstNumber = getFirstElement([1, 2, 3]);
console.log(typeof firstNumber);
// By adding a type parameter Type to this function and using it in two places, we've created a link between the input of the function and the output.
// We can use more than one parameter
function printValues(valueOne, valueTwo) {
    console.log("valeOne = ".concat(valueOne, ", typeof valueOne = ").concat(typeof valueOne));
    console.log("valueTwo = ".concat(valueTwo, ", typeof valeTwo = ").concat(typeof valueTwo));
}
printValues(10, "arroz");
function checkSomething(firstValue, secondValue, output) {
    if (firstValue > secondValue) {
        return output;
    }
}
console.log(checkSomething(10, 8, true));

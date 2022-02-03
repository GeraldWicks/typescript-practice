// A rest parameter appear after all othe parameterm and use the ... syntax.
function logNumbers(firstNumber) {
    var numbers = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numbers[_i - 1] = arguments[_i];
    }
    console.log(firstNumber);
    numbers.map(function (number) { return console.log(number); });
}
logNumbers(1, 2, 3, 4, 5);
// Rest Arguments: We can also provide a variable number of arguments from an array using spread syntax.
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
arr1.push.apply(arr1, arr2);
console.log(arr1);

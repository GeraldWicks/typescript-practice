// A rest parameter appear after all othe parameterm and use the ... syntax.
function logNumbers(firstNumber: number, ...numbers: number[]) {
    console.log(firstNumber);
    numbers.map((number) => console.log(number));
}

logNumbers(1, 2, 3, 4, 5);

// Rest Arguments: We can also provide a variable number of arguments from an array using spread syntax.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
arr1.push(...arr2);

console.log(arr1);
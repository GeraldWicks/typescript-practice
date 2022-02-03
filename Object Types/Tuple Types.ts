type StringNumberPair = [string, number];

let myTuple: StringNumberPair = ["Gerald", 23];
console.log(myTuple[0]);
console.log(myTuple[1]);

const [firstName, age] = myTuple;
console.log(firstName);
console.log(age);

type Point = [number, number, number?];

let firstPoint: Point = [1, 2];
console.log(firstPoint);

let secondPoint: Point = [1, 2, 3];
console.log(secondPoint);

type StringNumbers = [string, ...number[]];

let anotherTuple: StringNumbers = ["hey", 1, 2, 3];
console.log(anotherTuple);

const [message, ...numbers] = anotherTuple;
console.log(message);
console.log(numbers);
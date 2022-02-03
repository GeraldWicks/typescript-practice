//Generics are used when we want to describe a correspondence bewtween two values. We do this by declaring a type parameter in the function signature

function getFirstElement<Type>(arr: Type[]): Type | undefined {
    return arr[0];
}

const firstElement = getFirstElement(["a", "b", "c"]);
console.log(typeof firstElement);

const firstNumber = getFirstElement([ 1, 2, 3 ]);
console.log(typeof firstNumber);
// By adding a type parameter Type to this function and using it in two places, we've created a link between the input of the function and the output.

// We can use more than one parameter
function printValues<TypeOne, TypeTwo>(valueOne: TypeOne, valueTwo: TypeTwo) {
    console.log(`valeOne = ${valueOne}, typeof valueOne = ${typeof valueOne}`);
    console.log(`valueTwo = ${valueTwo}, typeof valeTwo = ${typeof valueTwo}`);
}

printValues(10, "arroz");

function checkSomething<Output>(firstValue: number, secondValue: number, output: Output): Output {
    if (firstValue > secondValue) {
        return output;
    }
}

console.log(checkSomething(10, 8, true));
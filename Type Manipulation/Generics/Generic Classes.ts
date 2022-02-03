class GenericNumber<Type> {
    zeroValue: number;
    add: (x: Type, y: Type) => Type;
}

let myGenericNumber = new GenericNumber<number>();
console.log(myGenericNumber);

myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };
console.log(myGenericNumber);
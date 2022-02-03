function longest<Type extends { length: number }>(a: Type, b: Type) {
    return (a.length >= b.length) ? a : b;
}

const longestArray = longest([1,2], [1, 2, 3]);
console.log(longestArray);

const longestString = longest("alice", "bob");
console.log(longestString);

//const longestNumber = longest(10, 100);
//Argument of type 'number' is not assignable to parameter of type '{ length : number }.
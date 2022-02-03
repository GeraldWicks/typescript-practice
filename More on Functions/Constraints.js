function longest(a, b) {
    return (a.length >= b.length) ? a : b;
}
var longestArray = longest([1, 2], [1, 2, 3]);
console.log(longestArray);
var longestString = longest("alice", "bob");
console.log(longestString);
//const longestNumber = longest(10, 100);
//Argument of type 'number' is not assignable to parameter of type '{ length : number }.

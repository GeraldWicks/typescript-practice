// TypeScript types:
// "string"
// "number"
// "bigint"
// "symbol"
// "undefined"
// "object"
// "function"
// In TypeScript, checking against the value returned by typeof is a type guard.
function printAll(strs) {
    if (typeof strs === "object") {
        console.log("object = ".concat(strs));
    }
    else if (typeof strs === "string") {
        console.log("string = ".concat(strs));
    }
}
printAll(["a", "b", "c"]);
printAll(null);
printAll("Hello World");

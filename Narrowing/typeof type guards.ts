// TypeScript types:
// "string"
// "number"
// "bigint"
// "symbol"
// "undefined"
// "object"
// "function"

// In TypeScript, checking against the value returned by typeof is a type guard.

function printAll(strs: string | string[] | null): void {
    if (typeof strs === "object") {
        console.log(`object = ${strs}`);
    }
    else if (typeof strs === "string") {
        console.log(`string = ${strs}`);
    }
}

printAll(["a", "b", "c"]); // Note that an array falls on typeof str === "object"
printAll(null); // Note that null falls on typeof str === "object"
printAll("Hello World");
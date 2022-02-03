function isString(test) {
    return typeof test === "string";
}
console.log("isString ? " + isString("something"));
console.log("isString ? " + isString(10));
function asKeyword(test) {
    if (test[2] !== undefined) {
        console.log(test);
    }
}
asKeyword(10);
asKeyword(["a", "b", "c"]);

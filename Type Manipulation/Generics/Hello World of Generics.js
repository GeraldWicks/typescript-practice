function identity(arg) {
    return arg;
}
var firstOutput = identity("Hello world");
console.log(firstOutput);
console.log(typeof firstOutput);
var secondOutput = identity("Hey there");
console.log(secondOutput);
console.log(typeof secondOutput);

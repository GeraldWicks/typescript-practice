function identity(arg) {
    console.log(arg.length);
    return arg;
}
identity([1, 2, 3]);
identity("abcd");
//identity(1) => error: Argument of type 'number' isn't assignable to parameter of type 'Lengthwise'
console.log(identity({ value: 10, length: 11 }));

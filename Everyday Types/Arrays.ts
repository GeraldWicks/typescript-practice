/*

To specify the type of an array like [1, 2, 3], you can use the syntax number[]; this syntax works for any type (e.g. string[] is an array of strings,
and so on). You may also see this written as Array<number>, which means the same thing. We’ll learn more about the syntax T<U> when we 
cover generics.

*/

type numberGroup = number[];
type newNumberGroup = Array<number>;

let newNum: numberGroup = [1, 2, 3];
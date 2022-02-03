console.log(typeof "hello world");

let s = "hello";
let n: typeof s = "hey";
console.log(typeof n);

// look at the predined type ReturnType<T>. It takes a function type and produces its return type.

type Predicate = (x: unknown) => boolean;
type K = ReturnType<Predicate>; // type K = boolean;
let isValid: K = true;

function f() {
    return { x: 10, y: 5 };
}

type P = ReturnType<typeof f>; // type P = { x: number, y: number }
let obj: P = {x: 5, y: 2};
function voidReturn() {
    return;
}

function objectReturn(x: string | number | bigint | symbol | null | undefined) {
    return x;
}

function unknownReturn(a: unknown) {
    return a;
}

function neverReturn(msg: string): never {
    throw new Error(msg);
}
// The never type represents values which are never observed. In a return type, this means that the function throws an exception or terminates execution of
// the program

// never also appear when TypeScript determines there's nothing left in a union
function fn(x: string | number) {
    if (typeof x === "string") {
        // do this
    }
    else if (typeof x === "number") {
        // do something else
    }
    else {
        return x; // has type never
    }
}
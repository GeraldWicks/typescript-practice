// Javascript function can also be invoked with the new operator.

type SomeConstructor = {
    new (s: string): boolean;
}

function fn(constructor: SomeConstructor) {
    return new constructor("hello");
}
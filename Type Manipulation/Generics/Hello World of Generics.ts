function identity<Type>(arg: Type): Type{
    return arg
}

let firstOutput = identity<string>("Hello world");
console.log(firstOutput);
console.log(typeof firstOutput);


let secondOutput = identity("Hey there");
console.log(secondOutput);
console.log(typeof secondOutput);
interface GenericIdentityFunction {
    <Type>(arg: Type): Type
}



function identity<Type>(arg: Type): Type {
    return arg;
}

let myIdentity: GenericIdentityFunction = identity;
let temp = myIdentity(10);
console.log(temp);

interface GenericIdentityFn<Type> {
    (arg: Type): Type;
}

let myNewIdentity: GenericIdentityFn<number> = identity;
temp = myNewIdentity(144);
console.log(temp);
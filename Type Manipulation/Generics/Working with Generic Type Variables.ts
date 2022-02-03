function identity<Type>(arg: Type[] | string): Type[] | string {
    console.log(arg.length);
    return arg;
}

identity([1, 2, 3]);
identity("abcd");
const obj = { counter: 0 };

if (true) {
    obj.counter = 1;
    console.log(obj); //Typescript doesn't assume the assignment of 1 to a field which previously had 0 is an error
}


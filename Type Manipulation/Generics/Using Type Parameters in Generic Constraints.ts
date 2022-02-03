function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
    console.log(obj[key]);
    console.log(key);
}

let x = {a: 1, b: 2, c: 3, d: 4};

getProperty(x, "b");
getProperty(x, "c");
getProperty(x, "d");
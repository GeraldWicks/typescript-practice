// There is a primitive in Javascript used to create a globally unique reference via the function Symbol();

const firstName = Symbol("Name");
const secondName = Symbol("name");

// firstName !== secondName , cause each are unique.
function printId(id) {
    if (typeof id === "string") {
        // In this branch, id is of type 'string'
        console.log(id.toUpperCase()); // toUpperCase just can be called in string type, that's why the if above is necessary
    }
    else {
        console.log(id);
    }
}
printId(1);
printId(2);
printId("3");
printId("4");

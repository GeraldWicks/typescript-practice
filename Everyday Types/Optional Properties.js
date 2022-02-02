function printName(name) {
    //...
    console.log('printName was called');
}
// NOte that, the Typescript let declare only the tag "first", cause the tag "last" is optional
printName({ first: "Bob" });
printName({ first: "Bob", last: "Marley" });

function printName(name: { first: string, last?: string }) {
    //...
    console.log('printName was called');
}

// Note that, the Typescript let declare only the tag "first", cause the tag "last" is optional
printName({ first: "Bob" });
printName({ first: "Bob", last: "Marley" });
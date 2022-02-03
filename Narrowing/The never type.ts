// Typescript will use a never type to represent a state which shiuldn't exist
// example:

function checkState(state: boolean) {
    if (state === true) console.log("true");
    else if (state === false) console.log("false");
    else console.log("never"); // it shouldn't exist
}
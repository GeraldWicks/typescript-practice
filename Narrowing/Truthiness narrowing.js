// If statements don't expect their condition to always have the type boolean
function getUsersOnlineMessage(usersOnline) {
    if (usersOnline) {
        console.log("There are ".concat(usersOnline, " users online now !"));
    }
    else
        console.log("Nobody is online.");
}
getUsersOnlineMessage(10);
getUsersOnlineMessage(null);
console.log(Boolean("hello")); // type: boolean, value: true
console.log(!!"world"); // type: true, value: true
console.log(!"world"); // type: false, value: false
console.log(!!"");
function printAll(strs) {
    if (strs && typeof strs === "object")
        console.log("object = ".concat(strs));
    else if (typeof strs === "string")
        console.log("string = ".concat(strs));
    else
        console.log("null = ".concat(strs));
}
printAll(["a", "b", "c"]);
printAll("Hellow");
printAll(null);

// If statements don't expect their condition to always have the type boolean
function getUsersOnlineMessage(usersOnline: number | null): void {
    if (usersOnline) {
        console.log(`There are ${usersOnline} users online now !`);
    }
    else console.log(`Nobody is online.`)
}

getUsersOnlineMessage(10);
getUsersOnlineMessage(null);

console.log(Boolean("hello"));// type: boolean, value: true
console.log(!!"world");// type: true, value: true
console.log(!"world");// type: false, value: false
console.log(!!""); // empty string falls on false

function printAll(strs: string | string[] | null): void {
    if (strs && typeof strs === "object") console.log(`object = ${strs}`);
    else if (typeof strs === "string") console.log(`string = ${strs}`);
    else console.log(`null = ${strs}`);
}

printAll(["a", "b", "c"]);
printAll("Hellow");
printAll(null);
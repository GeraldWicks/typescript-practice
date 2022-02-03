function checkMove(animal) {
    if ("swin" in animal)
        console.log("The animal is a fish.");
    if ("fly" in animal)
        console.log("The animal is a bird.");
}
checkMove({ swin: function () { return console.log('swin'); } });
checkMove({ fly: function () { return console.log('fly'); } });
function checkText(value) {
    if ("num" in value)
        console.log("The value is a number");
    if ("text" in value)
        console.log("The value is a string");
}
checkText({ num: 10 });
checkText({ text: "Hey" });

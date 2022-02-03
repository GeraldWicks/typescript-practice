type Fish = { swin: () => void };
type Bird = { fly: () => void };

function checkMove(animal: Fish | Bird): void {
    if ("swin" in animal) console.log("The animal is a fish.");
    if ("fly" in animal) console.log("The animal is a bird.");
}

checkMove({ swin: () => console.log('swin') });
checkMove({ fly: () => console.log('fly') });

type MyNumber = { num: number };
type MyText = { text: string };

function checkText(value: MyNumber | MyText): void {
    if ("num" in value) console.log("The value is a number");
    if ("text" in value) console.log("The value is a string");
}

checkText({ num: 10 });
checkText({ text: "Hey" });
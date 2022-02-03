let stringArray: string[] = ["hello", "world"];

let secondStringArray: Array<string> = ["hello", "world"];

let thirdStringArray: ReadonlyArray<string> = ["a", "b", "c"];

// thirdStringArray[0] = "2"; Index signature in type 'readonly string[]' only permits reading

let fourthStringArray = new Array<string>("d", "e", "f");
console.log(fourthStringArray);
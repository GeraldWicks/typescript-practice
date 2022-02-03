interface StringArray {
    [index: number]: string;
}

const myArray: StringArray = ["a", "b", "c"];

interface NumberOrStringDictionary {
    [index: string]: number | string,
    length: number,
    name: string
}
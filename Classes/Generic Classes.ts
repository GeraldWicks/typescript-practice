class Box<Type> {
    content: Type;

    constructor(value: Type) {
        this.content = value;
    }

    setContent(newContent: Type) {
        this.content = newContent;
    }
}

let box = new Box("hi");

console.log(box);
box.setContent("hello");

console.log(box);
console.log(typeof box.content);
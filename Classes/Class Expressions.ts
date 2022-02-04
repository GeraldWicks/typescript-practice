const someClass = class<Type> {
    content: Type;

    constructor(value: Type) {
        this.content = value;
    }
}

const anotherClass = new someClass("hey world");
console.log(anotherClass.content);
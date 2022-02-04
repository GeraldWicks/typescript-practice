abstract class Base {
    content: string;

    constructor(newValue: string) {
        this.content = newValue;
    }

    printName() {
        console.log("Hello, " + this.content);
    }
}

// const base = new Base(); // Error: Cannot create an instance of an abstract class.
// We can't instantiate Base with new because it's abstract. Instead, we need to make a derived lass and implement the abstract members

class Derived extends Base {}

const newBase = new Derived("Gerald");
newBase.printName();
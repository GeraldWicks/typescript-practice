class Box {
    content: string = "hello world";
    text: string = "ola mundo";

    setContent(newValue: string): void {
        this.content = newValue;
    }

    logClass(): void {
        console.log(this);
    }
}

let box = new Box();
console.log(box);
box.logClass();
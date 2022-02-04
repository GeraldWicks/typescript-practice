class Greeter {
    readonly name: string = "Earth";

    constructor(otherName?: string) {
        if (otherName !== undefined) this.name = otherName; // the readonly, can be changed only inside the constructor
    }
}

const g = new Greeter();
console.log(g);

// g.name = "Mars"; Error: Cannot assign to 'name' because it's a read-only property
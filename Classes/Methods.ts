// A function property on a class is called method.

class Point {
    x: number;
    y: number;

    constructor() {
        this.x = this.y = 10;
    }

    setX(newNumber: number): void {
        this.x = newNumber;
    }

    setY(newNumber: number): void {
        this.y = newNumber;
    }
}

let myPoint = new Point();
myPoint.setX(14);
console.log(myPoint);


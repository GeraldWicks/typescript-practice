class Point {
    x: number;
    y: number;

    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
}

let myPoint = new Point();
console.log(myPoint);

class Base {
    k = 4;
}

class Derived extends Base {
    constructor() {
        super(); // constructor for derived classes must contain a "super" call
        console.log(this.k);
    }
}

let derived = new Derived();
class Point {
    x: number;
    y: number;

    constructor() {
        this.x =  this.y = 0;
    }
}

const pt = new Point();
console.log(pt);

pt.x = pt.y = 2;
console.log(pt);
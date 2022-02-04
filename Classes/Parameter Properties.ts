class Params {
    x: number = 0;
    y: number = 0;
    z: number = 0;


    constructor(x: number, y: number, z: number) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    logPoint() {
        console.log(`(x, y, z) = (${this.x}, ${this.y}, ${this.z})`);
    }
}

let params = new Params(2, 3, 5);
params.logPoint();
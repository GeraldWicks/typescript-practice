interface Point {
    shape: "circle" | "square",
    x?: number,
    y?: number
}

let pointA: Point = { shape: "circle" };
let pointB: Point = { shape: "circle", x: 10 };
let pointC: Point = { shape: "square", x: 4, y: 4 };
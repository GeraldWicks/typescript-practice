interface Circle {
    kind: "circle",
    radius: number
}

interface Square {
    kind: "square",
    sideLength: number
}
type Shape = Circle | Square;

function getArea(shape: Shape) {
    if (shape.kind === "circle") return Math.PI * shape.radius ** 2;
    if (shape.kind === "square") return shape.sideLength ** 2;
}

let circle: Circle = { kind: "circle", radius: 10 };
let circleArea = getArea(circle);
console.log(circleArea);

let square: Square = { kind: "square", sideLength: 10 };
let squareArea = getArea(square);
console.log(squareArea);
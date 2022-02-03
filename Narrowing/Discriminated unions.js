function getArea(shape) {
    if (shape.kind === "circle")
        return Math.PI * Math.pow(shape.radius, 2);
    if (shape.kind === "square")
        return Math.pow(shape.sideLength, 2);
}
var circle = { kind: "circle", radius: 10 };
var circleArea = getArea(circle);
console.log(circleArea);
var square = { kind: "square", sideLength: 10 };
var squareArea = getArea(square);
console.log(squareArea);

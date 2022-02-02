type Point = {
    x: number,
    y: number
}

function printCoord(coordinate: Point) {
    console.log(`x = ${coordinate.x}`);
    console.log(`y = ${coordinate.y}`);
}

printCoord({ x: 1, y: 1.42 });

type ID = number | string;

function printId(id: ID) {
    console.log(id);
}

printId(1);
printId("2");
//Note that aliases are only aliases - you cannot use type aliases to create different/distinct “versions” of the same type.

type Coordinate = Point & {
    z: number
}

function printNewCoordinate(point: Coordinate) {
    console.log(`(x, y, z) = (${point.x}, ${point.y}, ${point.z})`);
}

printNewCoordinate({ x: 1, y: 2, z: 3 });
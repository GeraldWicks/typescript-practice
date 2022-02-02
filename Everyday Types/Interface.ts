interface newPoint {
    x: number,
    y: number
}

function printNewPoint(point: newPoint) {
    console.log(`(x, y) = (${point.x}, ${point.y})`);
}

printNewPoint({x: 2, y: 4});

interface thirdCoordinate extends newPoint{
    z: number
}
/* Same thig that: interface thirdCoordinate { x: number, y: number, z: number } */

function printThreeAxix(point: thirdCoordinate) {
    console.log(`(x, y, z) = (${point.x}, ${point.y}, ${point.z})`);
}

printThreeAxix({ x: 3, y: 6, z: 12 });

interface window {
    size: number
}

interface window {
    label: string
}

let newWindow: window = { size: 10, label: "my window" };
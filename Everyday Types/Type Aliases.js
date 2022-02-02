function printCoord(coordinate) {
    console.log("x = ".concat(coordinate.x));
    console.log("y = ".concat(coordinate.y));
}
printCoord({ x: 1, y: 1.42 });
function printId(id) {
    console.log(id);
}
printId(1);
printId("2");
function printNewCoordinate(point) {
    console.log("(x, y, z) = (".concat(point.x, ", ").concat(point.y, ", ").concat(point.z, ")"));
}
printNewCoordinate({ x: 1, y: 2, z: 3 });

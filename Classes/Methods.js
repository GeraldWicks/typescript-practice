// A function property on a class is called method.
var Point = /** @class */ (function () {
    function Point() {
        this.x = this.y = 10;
        console.log(this);
    }
    Point.prototype.setX = function (newNumber) {
        this.x = newNumber;
    };
    Point.prototype.setY = function (newNumber) {
        this.y = newNumber;
    };
    return Point;
}());
var myPoint = new Point();
myPoint.setX(14);
console.log(myPoint);

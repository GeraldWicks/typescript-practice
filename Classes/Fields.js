var Point = /** @class */ (function () {
    function Point() {
        this.x = this.y = 0;
    }
    return Point;
}());
var pt = new Point();
console.log(pt);
pt.x = pt.y = 2;
console.log(pt);

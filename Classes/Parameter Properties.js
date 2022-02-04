var Params = /** @class */ (function () {
    function Params(x, y, z) {
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.x = x;
        this.y = y;
        this.z = z;
    }
    Params.prototype.logPoint = function () {
        console.log("(x, y, z) = (".concat(this.x, ", ").concat(this.y, ", ").concat(this.z, ")"));
    };
    return Params;
}());
var params = new Params(2, 3, 5);
params.logPoint();

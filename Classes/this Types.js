var Box = /** @class */ (function () {
    function Box() {
        this.content = "hello world";
    }
    Box.prototype.setContent = function (newValue) {
        this.content = newValue;
    };
    Box.prototype.logClass = function () {
        console.log(this);
    };
    return Box;
}());
var box = new Box();
console.log(box);
box.logClass();

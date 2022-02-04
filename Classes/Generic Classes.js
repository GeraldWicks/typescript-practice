var Box = /** @class */ (function () {
    function Box(value) {
        this.content = value;
    }
    Box.prototype.setContent = function (newContent) {
        this.content = newContent;
    };
    return Box;
}());
var box = new Box("hi");
console.log(box);
box.setContent("hello");
console.log(box);
console.log(typeof box.content);

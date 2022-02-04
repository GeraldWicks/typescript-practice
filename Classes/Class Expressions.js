var someClass = /** @class */ (function () {
    function class_1(value) {
        this.content = value;
    }
    return class_1;
}());
var anotherClass = new someClass("hey world");
console.log(anotherClass.content);

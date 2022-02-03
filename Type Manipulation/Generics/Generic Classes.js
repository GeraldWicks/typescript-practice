var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
        this.zeroValue = 10;
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
console.log(myGenericNumber);
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };
console.log(myGenericNumber);

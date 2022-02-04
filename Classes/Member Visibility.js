// The default visibility of class member is public. A public member can be accessed anywhere.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Greeter = /** @class */ (function () {
    function Greeter() {
        this.x = 0; // private is like protected, but doesn't allow access to the member even from subclasses
    }
    Greeter.prototype.greet = function () {
        console.log("Hi !");
    };
    Greeter.prototype.logName = function () {
        console.log("Gerald");
    };
    return Greeter;
}());
var SpecialGreeter = /** @class */ (function (_super) {
    __extends(SpecialGreeter, _super);
    function SpecialGreeter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpecialGreeter.prototype.myGreet = function () {
        _super.prototype.greet.call(this);
    };
    SpecialGreeter.prototype.myLogName = function () {
        _super.prototype.logName.call(this); // here we can access
        // The main thing to note here is that in the derived class, we need to be careful to repeat the protected modifier if this exposure isn’t intentional.
    };
    SpecialGreeter.prototype.getX = function () {
        //console.log(this.x); // Error: property 'x' is private and only accessible within class 'Greeter'
    };
    return SpecialGreeter;
}(Greeter));
var greeter = new Greeter();
greeter.greet();
// greeter.logName(); // Error: property 'logName' is protected and only accessible with class 'Greeter' and its subclasses

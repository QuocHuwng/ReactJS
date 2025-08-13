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
var Vehicle = /** @class */ (function () {
    function Vehicle(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    Vehicle.prototype.slowDown = function () {
        this.speed -= 5;
    };
    Vehicle.prototype.speedUp = function () {
        this.speed += 5;
    };
    Vehicle.prototype.showSpeed = function () {
        "Toc do hien tai: ".concat(this.speed);
    };
    return Vehicle;
}());
var Bicyle = /** @class */ (function (_super) {
    __extends(Bicyle, _super);
    function Bicyle(name, speed, id, gear) {
        var _this = _super.call(this, name, speed, id) || this;
        _this.gear = gear;
        return _this;
    }
    Bicyle.prototype.showInfo = function () {
        console.log("Ten phuong tien: ".concat(this.name));
        console.log("Toc do: ".concat(this.speed));
        console.log("Id: ".concat(this.id));
        console.log("So banh rang: ".concat(this.gear));
    };
    return Bicyle;
}(Vehicle));
var bike = new Bicyle("RolRoyce", 4000, "1", 5);
bike.showInfo();
bike.showSpeed();
bike.slowDown();
bike.speedUp();

var Vehicle = /** @class */ (function () {
    function Vehicle() {
        this.speed = 0;
    }
    Vehicle.prototype.speedUp = function () {
        this.speed += 10;
        console.log("Tang toc: ".concat(this.speed, " km/h"));
    };
    Vehicle.prototype.slowDown = function () {
        this.speed = Math.max(0, this.speed - 5);
        console.log("Giam toc: ".concat(this.speed, " km/h"));
    };
    Vehicle.prototype.stop = function () {
        this.speed = 0;
        console.log("Dung lai: ".concat(this.speed, " km/h"));
    };
    return Vehicle;
}());
var myVehicle = new Vehicle();
myVehicle.speedUp();
myVehicle.speedUp();
myVehicle.slowDown();
myVehicle.stop();

var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.calculateArea = function () {
        return Math.PI * this.radius * this.radius;
    };
    Circle.prototype.calculatePerimeter = function () {
        return 2 * Math.PI * this.radius;
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.calculateArea = function () {
        return this.width * this.height;
    };
    Rectangle.prototype.calculatePerimeter = function () {
        return 2 * (this.width + this.height);
    };
    return Rectangle;
}());
var myCircle = new Circle(5);
var myRectangle = new Rectangle(10, 20);
console.log("Circle:");
console.log("Dien tich:", myCircle.calculateArea());
console.log("Chu vi:", myCircle.calculatePerimeter());
console.log("Rectangle:");
console.log("Dien tich:", myRectangle.calculateArea());
console.log("Chu vi:", myRectangle.calculatePerimeter());

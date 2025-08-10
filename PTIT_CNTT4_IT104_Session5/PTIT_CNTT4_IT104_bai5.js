var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getWidth = function () {
        return this.width;
    };
    Rectangle.prototype.getHeight = function () {
        return this.height;
    };
    Rectangle.prototype.setWidth = function (width) {
        this.width = width;
    };
    Rectangle.prototype.setHeight = function (height) {
        this.height = height;
    };
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    Rectangle.prototype.getPerimeter = function () {
        return 2 * (this.width + this.height);
    };
    return Rectangle;
}());
var rectangle1 = new Rectangle(5, 10);
console.log("Chieu rong: ", rectangle1.getWidth());
console.log("Chieu dai: ", rectangle1.getHeight());
console.log("Dien tich: ", rectangle1.getArea());
console.log("Chu vi: ", rectangle1.getPerimeter());
rectangle1.setWidth(7);
rectangle1.setHeight(12);
console.log("Sau khi update");
console.log("Chieu rong: ", rectangle1.getWidth());
console.log("Chieu dai: ", rectangle1.getHeight());
console.log("Dien tich: ", rectangle1.getArea());
console.log("Chu vi: ", rectangle1.getPerimeter());

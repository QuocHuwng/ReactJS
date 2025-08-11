// Abstract method
// Không có phần thân (body)<br>- Chỉ được khai báo trong abstract class<br>
//  Bắt buộc lớp con phải triển khai
// Sử dụng khi: 
// Khi muốn ép buộc các lớp con phải định nghĩa hành vi cụ thể
// Method
//Có phần thân<br> Có thể dùng trực tiếp hoặc ghi đè nếu cần
// Sử dụng khi: Khi đã biết cách xử lý chung hoặc muốn chia sẻ logic mặc định
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
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function () {
        console.log("Di chuyen...");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.makeSound = function () {
        console.log("Gau gau");
    };
    return Dog;
}(Animal));
var myDog = new Dog();
myDog.makeSound();
myDog.move();

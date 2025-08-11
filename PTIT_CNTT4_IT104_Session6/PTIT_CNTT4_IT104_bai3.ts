// Abstract method
    // Không có phần thân (body)<br>- Chỉ được khai báo trong abstract class<br>
    //  Bắt buộc lớp con phải triển khai
    // Sử dụng khi: 
    // Khi muốn ép buộc các lớp con phải định nghĩa hành vi cụ thể
// Method
    //Có phần thân<br> Có thể dùng trực tiếp hoặc ghi đè nếu cần
    // Sử dụng khi: Khi đã biết cách xử lý chung hoặc muốn chia sẻ logic mặc định

abstract class Animal {
    abstract makeSound(): void; // abstract method

    move(): void {              // method 
        console.log("Di chuyen...");
    }
}

class Dog extends Animal {
    makeSound(): void {
        console.log("Gau gau");
    }
}

const myDog = new Dog();
myDog.makeSound(); 
myDog.move();     
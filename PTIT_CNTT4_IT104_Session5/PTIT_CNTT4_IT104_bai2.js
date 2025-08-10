var Student = /** @class */ (function () {
    function Student(id, age, email) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
    Student.prototype.print = function () {
        console.log("ID: ".concat(this.id, ", Tuoi sinh vien: ").concat(this.age, ", Email: ").concat(this.email));
    };
    return Student;
}());
var student1 = new Student(1, 18, "Abc123@gmail.com");
var student2 = new Student(2, 19, "boss123@gmail.com");
student1.print();
student2.print();

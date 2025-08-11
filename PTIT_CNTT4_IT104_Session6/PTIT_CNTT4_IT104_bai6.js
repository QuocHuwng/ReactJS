var Student = /** @class */ (function () {
    function Student(id, name) {
        this.id = id;
        this.name = name;
    }
    Student.prototype.getId = function () {
        return this.id;
    };
    Student.prototype.getName = function () {
        return this.name;
    };
    return Student;
}());
var allStudents = [];
var Classroom = /** @class */ (function () {
    function Classroom() {
        this.students = [];
    }
    Classroom.prototype.showStudents = function () {
        console.log("Danh sach hoc sinh trong lop:");
        this.students.forEach(function (student) {
            console.log("ID: ".concat(student.getId(), ", Ten: ").concat(student.getName()));
        });
    };
    Classroom.prototype.addStudent = function (student) {
        this.students.push(student);
    };
    Classroom.prototype.filterStudent = function (id) {
        return this.students.find(function (student) { return student.getId() === id; });
    };
    Classroom.prototype.addStudentInClass = function (id) {
        var index = allStudents.findIndex(function (student) { return student.getId() === id; });
        if (index !== -1) {
            this.students.push(allStudents[index]);
            allStudents.splice(index, 1);
        }
    };
    return Classroom;
}());
allStudents.push(new Student(1, "An"));
allStudents.push(new Student(2, "Binh"));
allStudents.push(new Student(3, "Cuong"));
allStudents.push(new Student(4, "Dung"));
allStudents.push(new Student(5, "Hoa"));
allStudents.push(new Student(6, "Khanh"));
var classA = new Classroom();
var classB = new Classroom();
classA.addStudentInClass(1);
classA.addStudentInClass(2);
classA.addStudentInClass(3);
classB.addStudentInClass(4);
classB.addStudentInClass(5);
classB.addStudentInClass(6);
console.log("Lop A:");
classA.showStudents();
console.log("Lop B:");
classB.showStudents();

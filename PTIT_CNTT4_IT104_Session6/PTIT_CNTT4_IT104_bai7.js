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
    Student.prototype.setName = function (newName) {
        this.name = newName;
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
    Classroom.prototype.removeStudent = function (id) {
        var index = this.students.findIndex(function (student) { return student.getId() === id; });
        if (index !== -1) {
            var removed = this.students.splice(index, 1)[0];
            allStudents.push(removed);
        }
    };
    Classroom.prototype.editStudent = function (id, newName) {
        var student = this.students.find(function (student) { return student.getId() === id; });
        if (student) {
            student.setName(newName);
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
classA.addStudentInClass(1);
classA.addStudentInClass(2);
classA.addStudentInClass(3);
console.log("Truoc khi thay doi:");
classA.showStudents();
classA.removeStudent(2);
classA.editStudent(3, "Cuong Updated");
console.log("Sau khi thay doi:");
classA.showStudents();
console.log("Mang tat ca hoc sinh:");
allStudents.forEach(function (student) {
    console.log("ID: ".concat(student.getId(), ", Ten: ").concat(student.getName()));
});

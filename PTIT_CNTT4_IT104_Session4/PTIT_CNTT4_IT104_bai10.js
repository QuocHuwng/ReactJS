function getCompletedStudents(course) {
    return course.students.filter(function (student) { return student.hasCompleted; });
}
function calculateAverageScore(course) {
    var scores = course.students
        .filter(function (student) { return student.finalScore !== undefined; })
        .map(function (student) { return student.finalScore; });
    if (scores.length === 0)
        return null;
    var total = scores.reduce(function (sum, score) { return sum + score; }, 0);
    return total / scores.length;
}
function printCourseReport(manager) {
    manager.courses.forEach(function (course, index) {
        var tong = course.students.length;
        var hoanThanh = getCompletedStudents(course).length;
        var diemTB = calculateAverageScore(course);
        var trangThai = course.isActive ? "DANG MO" : "DA DONG";
        console.log("".concat(index + 1, ". Khoa: ").concat(course.title, " (GV: ").concat(course.instructor, ")"));
        console.log("   - Tong hoc vien: ".concat(tong));
        console.log("   - Hoan thanh: ".concat(hoanThanh, " hoc vien"));
        console.log("   - Trung binh diem: ".concat(diemTB !== null ? diemTB.toFixed(1) : "N/A"));
        console.log("   - Trang thai: ".concat(trangThai, "\n"));
    });
}
var manager = {
    schoolName: "Rikkei Academy",
    year: 2025,
    courses: [
        {
            courseId: "C001",
            title: "TypeScript Co Ban",
            instructor: "Nguyen Van A",
            isActive: true,
            students: [
                { studentId: "S001", name: "Le Thi B", email: "b@example.com", hasCompleted: true, finalScore: 8.0 },
                { studentId: "S002", name: "Tran Van C", email: "c@example.com", hasCompleted: true, finalScore: 9.0 },
                { studentId: "S003", name: "Pham Thi D", email: "d@example.com", hasCompleted: false }
            ]
        },
        {
            courseId: "C002",
            title: "HTML & CSS",
            instructor: "Tran Thi B",
            isActive: false,
            students: [
                { studentId: "S004", name: "Nguyen Van E", email: "e@example.com", hasCompleted: false },
                { studentId: "S005", name: "Hoang Thi F", email: "f@example.com", hasCompleted: false }
            ]
        }
    ]
};
printCourseReport(manager);

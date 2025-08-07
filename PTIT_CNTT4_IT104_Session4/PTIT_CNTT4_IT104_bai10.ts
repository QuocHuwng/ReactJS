interface Student {
    readonly studentId: string;
    name: string;
    email: string;
    hasCompleted: boolean;
    finalScore?: number;
}

interface Course {
    courseId: string;
    title: string;
    instructor: string;
    students: Student[];
    isActive: boolean;
}

interface CourseManager {
    schoolName: string;
    year: number;
    courses: Course[];
}
function getCompletedStudents(course: Course): Student[] {
    return course.students.filter(student => student.hasCompleted);
}

function calculateAverageScore(course: Course): number | null {
    const scores = course.students
        .filter(student => student.finalScore !== undefined)
        .map(student => student.finalScore as number);

    if (scores.length === 0) return null;

    const total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
}

function printCourseReport(manager: CourseManager): void {
    manager.courses.forEach((course, index) => {
        const tong = course.students.length;
        const hoanThanh = getCompletedStudents(course).length;
        const diemTB = calculateAverageScore(course);
        const trangThai = course.isActive ? "DANG MO" : "DA DONG";

        console.log(`${index + 1}. Khoa: ${course.title} (GV: ${course.instructor})`);
        console.log(`   - Tong hoc vien: ${tong}`);
        console.log(`   - Hoan thanh: ${hoanThanh} hoc vien`);
        console.log(`   - Trung binh diem: ${diemTB !== null ? diemTB.toFixed(1) : "N/A"}`);
        console.log(`   - Trang thai: ${trangThai}\n`);
    });
}
const manager: CourseManager = {
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

class Student {
    private id: number;
    private name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    setName(newName: string): void {
        this.name = newName;
    }
}

let allStudents: Student[] = [];

class Classroom {
    private students: Student[] = [];

    showStudents(): void {
        console.log("Danh sach hoc sinh trong lop:");
        this.students.forEach(student => {
            console.log(`ID: ${student.getId()}, Ten: ${student.getName()}`);
        });
    }

    addStudent(student: Student): void {
        this.students.push(student);
    }

    filterStudent(id: number): Student | undefined {
        return this.students.find(student => student.getId() === id);
    }

    addStudentInClass(id: number): void {
        const index = allStudents.findIndex(student => student.getId() === id);
        if (index !== -1) {
            this.students.push(allStudents[index]);
            allStudents.splice(index, 1);
        }
    }

    removeStudent(id: number): void {
        const index = this.students.findIndex(student => student.getId() === id);
        if (index !== -1) {
            const removed = this.students.splice(index, 1)[0];
            allStudents.push(removed);
        }
    }

    editStudent(id: number, newName: string): void {
        const student = this.students.find(student => student.getId() === id);
        if (student) {
            student.setName(newName);
        }
    }
}

allStudents.push(new Student(1, "An"));
allStudents.push(new Student(2, "Binh"));
allStudents.push(new Student(3, "Cuong"));
allStudents.push(new Student(4, "Dung"));
allStudents.push(new Student(5, "Hoa"));
allStudents.push(new Student(6, "Khanh"));

const classA = new Classroom();

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
allStudents.forEach(student => {
    console.log(`ID: ${student.getId()}, Ten: ${student.getName()}`);
});

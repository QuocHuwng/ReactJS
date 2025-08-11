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
}

allStudents.push(new Student(1, "An"));
allStudents.push(new Student(2, "Binh"));
allStudents.push(new Student(3, "Cuong"));
allStudents.push(new Student(4, "Dung"));
allStudents.push(new Student(5, "Hoa"));
allStudents.push(new Student(6, "Khanh"));

const classA = new Classroom();
const classB = new Classroom();

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

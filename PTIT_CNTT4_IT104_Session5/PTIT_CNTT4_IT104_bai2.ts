class Student{
    id: number;
    age: number;
    email: string;

    constructor(id: number, age: number, email: string) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
    print(): void{
        console.log(`ID: ${this.id}, Tuoi sinh vien: ${this.age}, Email: ${this.email}`);
    }
}
const student1 = new Student(1, 18, "Abc123@gmail.com");
const student2 = new Student(2, 19, "boss123@gmail.com");
student1.print();
student2.print();
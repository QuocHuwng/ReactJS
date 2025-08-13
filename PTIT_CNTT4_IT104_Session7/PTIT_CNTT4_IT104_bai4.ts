abstract class Person{
    public name: string;
    constructor(name: string) {
        this.name = name;
    }
    displayInfo(): void{
        console.log(`Ten: ${this.name}`);
    }
}
class Student extends Person{
    id: string;
    constructor(name: string, id: string) {
        super(name);
        this.id = id;
    }
    displayInfo(): void {
        console.log(`Ma sinh vien: ${this.id}`);
        console.log(`Ten: ${this.name}`);
        
    }
}
class Teacher extends Person{
    subject: string;
    constructor(name:string,subject: string) {
        super(name);
        this.subject = subject;
    }
    displayInfo(): void {
        console.log(`Ten giao vien: ${this.name}`);
        console.log(`Mon hoc: ${this.subject}`);
    }
}
const student1 = new Student("Hung", '1');
const teacher1 = new Teacher("Hao", "Ngu Van");
student1.displayInfo();
teacher1.displayInfo();
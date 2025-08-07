type Student = {
    name: string;
    age: number;
    email: string;
}
const student: Student = {
    name: "Nguyen Quoc Hung",
    age: 18,
    email: "abc123@gmail.com"
};
function print(student: Student): void{
    console.log(`Ten toi la ${student.name}, toi ${student.age} tuoi va email cua toi la ${student.email}`);
}
print(student);
var student = {
    name: "Nguyen Quoc Hung",
    age: 18,
    email: "abc123@gmail.com"
};
function print(student) {
    console.log("Ten toi la ".concat(student.name, ", toi ").concat(student.age, " tuoi va email cua toi la ").concat(student.email));
}
print(student);

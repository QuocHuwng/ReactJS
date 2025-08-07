function printStaffinfo(staff) {
    console.log("Nhan vien: ".concat(staff.name, "(").concat(staff.age, " tuoi), Ma nhan vien ").concat(staff.employeeId, " - Phong ").concat(staff.department));
}
var staff = {
    name: "Nguyen Quoc Hung",
    age: 18,
    employeeId: "EMP001",
    department: "Ke toan"
};
printStaffinfo(staff);

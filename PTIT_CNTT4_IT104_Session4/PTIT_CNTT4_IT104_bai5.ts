type person = {
    name:string
    age: number,
};
type employee = {
    employeeId: string
    department: string,
};
type StaffMember= person & employee;
function printStaffinfo(staff: StaffMember): void {
    console.log(`Nhan vien: ${staff.name}(${staff.age} tuoi), Ma nhan vien ${staff.employeeId} - Phong ${staff.department}`);
}
const staff: StaffMember = {
    name: "Nguyen Quoc Hung",
    age: 18,
    employeeId: "EMP001",
    department: "Ke toan"
};
printStaffinfo(staff);
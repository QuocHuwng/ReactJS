var Employee = /** @class */ (function () {
    function Employee(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    Employee.prototype.printInfo = function () {
        console.log("Ten nhan vien: ".concat(this.name, ", Ten cong ty: ").concat(this.company, ", Phone: ").concat(this.phone));
    };
    return Employee;
}());
var employee1 = new Employee("NguyenVanA", "RIKKEI", "012345");
var employee2 = new Employee("NguyenThiB", "FPT", "09999");
employee1.printInfo();
employee2.printInfo();
tsc;

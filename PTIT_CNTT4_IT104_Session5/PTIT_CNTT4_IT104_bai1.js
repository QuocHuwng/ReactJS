var Vehicle = /** @class */ (function () {
    function Vehicle(name, year, company) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
    Vehicle.prototype.print = function () {
        console.log("Ten xe: ".concat(this.name, ", San xuat nam: ").concat(this.year, ", Hang xe: ").concat(this.company));
    };
    return Vehicle;
}());
var vehicle1 = new Vehicle("Ferari", 2006, "Toyota");
var vehicle2 = new Vehicle("Lamboghinir", 2021, "Toyota");
vehicle1.print();
vehicle2.print();

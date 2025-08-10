var Vehicle = /** @class */ (function () {
    function Vehicle(name, year, company) {
        this.id = 1;
        this.name = name;
        this.year = year;
        this.company = company;
    }
    Vehicle.prototype.print = function () {
        console.log("Id:".concat(this.id, ", Name: ").concat(this.name, ", Year: ").concat(this.year, ", Company: ").concat(this.company));
    };
    return Vehicle;
}());
var vehicle1 = new Vehicle("NguyenVanA", 2006, "RIKKEI");
vehicle1.print();

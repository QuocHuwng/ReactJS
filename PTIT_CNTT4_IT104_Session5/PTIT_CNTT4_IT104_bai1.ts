class Vehicle {
    name: string;
    year: number;
    company: string;
    
    constructor(name: string, year: number, company: string) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
    print(): void{
        console.log(`Ten xe: ${this.name}, San xuat nam: ${this.year}, Hang xe: ${this.company}`);
    }
}
const vehicle1 = new Vehicle("Ferari", 2006, "Toyota");
const vehicle2 = new Vehicle("Lamboghinir", 2021, "Toyota");
vehicle1.print();
vehicle2.print();
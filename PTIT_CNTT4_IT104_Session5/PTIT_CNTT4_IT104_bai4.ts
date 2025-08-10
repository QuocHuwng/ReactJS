class Vehicle{
    public name: string;
    protected year: number;
    private company: string;
    readonly id = 1;
    constructor(name: string, year: number, company: string) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
    print(): void{
        console.log(`Id:${this.id}, Name: ${this.name}, Year: ${this.year}, Company: ${this.company}`);
    }
}
const vehicle1 = new Vehicle("NguyenVanA", 2006, "RIKKEI");
vehicle1.print();

class Employee{
    public name: string;
    protected company: string;
    private phone: string;
    
    constructor(name: string, company: string, phone: string) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo(): void{
        console.log(`Ten nhan vien: ${this.name}, Ten cong ty: ${this.company}, Phone: ${this.phone}`);
    }
}
const employee1 = new Employee("NguyenVanA", "RIKKEI","012345");
const employee2 = new Employee("NguyenThiB", "FPT", "09999");
employee1.printInfo();
employee2.printInfo();tsc
class Employee{
    public name: string;
    protected company: string;
    private phone: string;
    
    constructor(name: string, company: string, phone: string) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() :void {
        console.log(`Ten nhan vien: ${this.name}`);
        console.log(`Ten cong ty: ${this.company}`);
        console.log(`So dien thoai: ${this.phone}`);
    }
}
class Manager extends Employee{
    temSize: number;
    constructor(name: string, company: string, phone: string, temSize: number) {
        super(name, company, phone);
        this.temSize = temSize;
    }
    printInfo(): void {
        super.printInfo();
        console.log(`So luong thanh vien: ${this.temSize}`);
    }
}
const manager1 = new Manager("Nguyen Quoc Hung", "RIKKEI", "0123", 5);
manager1.printInfo();
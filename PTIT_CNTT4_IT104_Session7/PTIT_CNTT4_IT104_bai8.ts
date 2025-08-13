class Account {
    public accountNumber: string;
    protected balance: number;
    protected history: string[];
    protected status: string;

    constructor(accountNumber: string, balance: number, status: string) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.status = status;
        this.history = [];
    }

    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            this.history.push(`Nap ${amount} VND`);
        } else {
            this.history.push(`Nap ${amount} VND that bai - So tien khong hop le`);
        }
    }

    withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            this.history.push(`Rut ${amount} VND`);
        } else {
            this.history.push(`Rut ${amount} VND that bai - So du khong du`);
        }
    }

    showHistory(): void {
        console.log(`Lich su giao dich cua tai khoan ${this.accountNumber}:`);
        this.history.forEach(item => console.log(item));
        console.log(`So du hien tai: ${this.balance} VND`);
    }
}

class CheckingAccount extends Account {
    public overdraftLimit: number;

    constructor(accountNumber: string, balance: number, status: string, overdraftLimit: number) {
        super(accountNumber, balance, status);
        this.overdraftLimit = overdraftLimit;
    }

    withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance + this.overdraftLimit) {
            this.balance -= amount;
            this.history.push(`Rut ${amount} VND`);
        } else {
            this.history.push(`Rut ${amount} VND that bai - Vuot qua han muc thau chi`);
        }
    }
}
const acc2 = new CheckingAccount("AC002", 1000000, "active", 500000);

acc2.deposit(200000);

acc2.withdraw(1300000); 

acc2.withdraw(300000); 

acc2.showHistory();


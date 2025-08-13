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
        }
    }

    withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            this.history.push(`Rut ${amount} VND`);
        }
    }

    showHistory(): void {
        console.log(`Lich su giao dich cua tai khoan ${this.accountNumber}:`);
        this.history.forEach(item => console.log(item));
        console.log(`So du hien tai: ${this.balance} VND`);
    }
}

class SavingAccount extends Account {
    public interestRate: number;

    constructor(accountNumber: string, balance: number, status: string, interestRate: number) {
        super(accountNumber, balance, status);
        this.interestRate = interestRate;
    }

    withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            this.history.push(`Rut ${amount} VND`);
        } else {
            this.history.push(`Rut ${amount} VND that bai - So du khong du`);
        }
    }
}

const acc1 = new SavingAccount("AC001", 1000000, "active", 0.05);
acc1.deposit(500000);
acc1.withdraw(300000);
acc1.withdraw(1500000);
acc1.showHistory();

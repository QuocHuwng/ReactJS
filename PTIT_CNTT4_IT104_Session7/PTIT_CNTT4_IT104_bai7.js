var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = /** @class */ (function () {
    function Account(accountNumber, balance, status) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.status = status;
        this.history = [];
    }
    Account.prototype.deposit = function (amount) {
        if (amount > 0) {
            this.balance += amount;
            this.history.push("Nap ".concat(amount, " VND"));
        }
    };
    Account.prototype.withdraw = function (amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            this.history.push("Rut ".concat(amount, " VND"));
        }
    };
    Account.prototype.showHistory = function () {
        console.log("Lich su giao dich cua tai khoan ".concat(this.accountNumber, ":"));
        this.history.forEach(function (item) { return console.log(item); });
        console.log("So du hien tai: ".concat(this.balance, " VND"));
    };
    return Account;
}());
var SavingAccount = /** @class */ (function (_super) {
    __extends(SavingAccount, _super);
    function SavingAccount(accountNumber, balance, status, interestRate) {
        var _this = _super.call(this, accountNumber, balance, status) || this;
        _this.interestRate = interestRate;
        return _this;
    }
    SavingAccount.prototype.withdraw = function (amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            this.history.push("Rut ".concat(amount, " VND"));
        }
        else {
            this.history.push("Rut ".concat(amount, " VND that bai - So du khong du"));
        }
    };
    return SavingAccount;
}(Account));
var acc1 = new SavingAccount("AC001", 1000000, "active", 0.05);
acc1.deposit(500000);
acc1.withdraw(300000);
acc1.withdraw(1500000);
acc1.showHistory();

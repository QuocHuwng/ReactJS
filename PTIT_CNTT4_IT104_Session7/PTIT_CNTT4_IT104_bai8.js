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
        else {
            this.history.push("Nap ".concat(amount, " VND that bai - So tien khong hop le"));
        }
    };
    Account.prototype.withdraw = function (amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            this.history.push("Rut ".concat(amount, " VND"));
        }
        else {
            this.history.push("Rut ".concat(amount, " VND that bai - So du khong du"));
        }
    };
    Account.prototype.showHistory = function () {
        console.log("Lich su giao dich cua tai khoan ".concat(this.accountNumber, ":"));
        this.history.forEach(function (item) { return console.log(item); });
        console.log("So du hien tai: ".concat(this.balance, " VND"));
    };
    return Account;
}());
var CheckingAccount = /** @class */ (function (_super) {
    __extends(CheckingAccount, _super);
    function CheckingAccount(accountNumber, balance, status, overdraftLimit) {
        var _this = _super.call(this, accountNumber, balance, status) || this;
        _this.overdraftLimit = overdraftLimit;
        return _this;
    }
    CheckingAccount.prototype.withdraw = function (amount) {
        if (amount > 0 && amount <= this.balance + this.overdraftLimit) {
            this.balance -= amount;
            this.history.push("Rut ".concat(amount, " VND"));
        }
        else {
            this.history.push("Rut ".concat(amount, " VND that bai - Vuot qua han muc thau chi"));
        }
    };
    return CheckingAccount;
}(Account));
var acc2 = new CheckingAccount("AC002", 1000000, "active", 500000);
acc2.deposit(200000);
acc2.withdraw(1300000);
acc2.withdraw(300000);
acc2.showHistory();

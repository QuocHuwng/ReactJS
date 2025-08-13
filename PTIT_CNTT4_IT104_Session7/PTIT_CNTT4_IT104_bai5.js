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
    function Account(id, userName, password, role) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = false;
        this.role = role;
    }
    Account.prototype.login = function () {
        console.log("Dang nhap");
    };
    Account.prototype.logout = function () {
        if (this.isLogin) {
            console.log("Dang xuat thanh cong");
            this.isLogin = false;
        }
    };
    return Account;
}());
var userAcc = /** @class */ (function (_super) {
    __extends(userAcc, _super);
    function userAcc(id, userName, password, role, status) {
        var _this = _super.call(this, id, userName, password, role) || this;
        _this.status = status;
        return _this;
    }
    userAcc.prototype.login = function () {
        if (this.status === "active") {
            this.isLogin = true;
            console.log("Dang nhap thanh cong");
        }
        else if (this.status === "banned") {
            console.log("Tai khoan da bi khoa");
        }
    };
    return userAcc;
}(Account));
var acc1 = new userAcc(1, "Hung", "hung123", "user", "active");
var acc2 = new userAcc(2, "Hieu", "Hieu123", "user", "banned");
acc1.login();
acc1.logout();
acc2.login();
acc2.logout();

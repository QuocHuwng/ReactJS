class Account {
    public id: number;
    public userName: string;
    private password: string;
    public isLogin: boolean;
    public role: string;

    constructor(id: number, userName: string, password: string, role: string) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = false;
        this.role = role;
    }
    login(): void {
        console.log(`Dang nhap`);
    }
    logout(): void {
        if (this.isLogin) {
            console.log(`Dang xuat thanh cong`);
            this.isLogin = false;
        }
    }
}
class userAcc extends Account {
    status: string;
    constructor(id: number, userName: string, password: string, role: string, status: string) {
        super(id, userName, password, role);
        this.status = status;
    }
    login(): void {
        if (this.status === "active") {
            this.isLogin = true;
            console.log(`Dang nhap thanh cong`);
        } else if (this.status === "banned") {
            console.log(`Tai khoan da bi khoa`);
        }
    }
}
class admin extends Account {
    constructor(id: number, userName: string, password: string, role: string) {
        super(id, userName, password, role);
    }
    banUser(user: userAcc): void {
        user.status = "banned";
        console.log(`Tai khoan ${user.userName} da bi khoa`);
    }
}
const admin1 = new admin(99, "Admin", "admin123", "admin");
const acc1 = new userAcc(1, "Hung", "hung123", "user", "active");
const acc2 = new userAcc(2, "Hieu", "Hieu123", "user", "banned");
acc1.login();
acc1.logout();

acc2.login();
acc2.logout();

admin1.banUser(acc1);
acc1.login();
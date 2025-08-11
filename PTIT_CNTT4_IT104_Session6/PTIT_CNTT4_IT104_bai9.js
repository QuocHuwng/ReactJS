var Member = /** @class */ (function () {
    function Member(id, name, contact, status) {
        if (status === void 0) { status = "Dang hoat dong"; }
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.status = status;
        this.lendedBooks = [];
    }
    return Member;
}());
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
        this.members = [];
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
    };
    Library.prototype.showBooks = function () {
        console.log("Danh sach sach trong thu vien:");
        this.books.forEach(function (book) {
            console.log("ID: ".concat(book.id, ", Tieu de: ").concat(book.title, ", Tac gia: ").concat(book.author, ", So luong: ").concat(book.stock, ", Tinh trang: ").concat(book.status));
        });
    };
    Library.prototype.registerMember = function (id, name, contact) {
        var newMember = new Member(id, name, contact);
        this.members.push(newMember);
    };
    Library.prototype.blockMember = function (id) {
        var member = this.members.find(function (m) { return m.id === id; });
        if (member) {
            member.status = "Bi khoa";
        }
    };
    Library.prototype.showMembers = function () {
        console.log("Danh sach thanh vien thu vien:");
        this.members.forEach(function (member) {
            console.log("ID: ".concat(member.id, ", Ten: ").concat(member.name, ", Lien he: ").concat(member.contact, ", Trang thai: ").concat(member.status));
        });
    };
    return Library;
}());
var myLibrary = new Library();
myLibrary.registerMember(1, "Nguyen Van A", "0123456789");
myLibrary.registerMember(2, "Tran Thi B", "0987654321");
myLibrary.blockMember(2);
myLibrary.showMembers();

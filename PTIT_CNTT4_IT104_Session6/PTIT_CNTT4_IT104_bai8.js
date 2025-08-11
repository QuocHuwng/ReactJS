var Book = /** @class */ (function () {
    function Book(id, title, author, stock, status) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = status;
    }
    return Book;
}());
var Member = /** @class */ (function () {
    function Member(id, name, contact, status) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.status = status;
        this.lendedBooks = [];
    }
    return Member;
}());
var LendedBook = /** @class */ (function () {
    function LendedBook(memberId, bookId, dueDate) {
        this.memberId = memberId;
        this.bookId = bookId;
        this.dueDate = dueDate;
    }
    return LendedBook;
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
    return Library;
}());
var myLibrary = new Library();
var book1 = new Book(1, "Lap trinh JavaScript", "Nguyen Van A", 5, "Co san");
var book2 = new Book(2, "React nang cao", "Tran Thi B", 3, "Co san");
var book3 = new Book(3, "TypeScript co ban", "Le Van C", 2, "Co san");
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);
myLibrary.showBooks();

var Book = /** @class */ (function () {
    function Book(id, title, author, year) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
    }
    Book.prototype.getId = function () {
        return this.id;
    };
    Book.prototype.getTitle = function () {
        return this.title;
    };
    Book.prototype.getAuthor = function () {
        return this.author;
    };
    Book.prototype.getYear = function () {
        return this.year;
    };
    Book.prototype.setTitle = function (title) {
        this.title = title;
    };
    Book.prototype.setAuthor = function (author) {
        this.author = author;
    };
    Book.prototype.setYear = function (year) {
        this.year = year;
    };
    return Book;
}());
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
    };
    Library.prototype.listBooks = function () {
        console.log("Danh sach sach trong thu vien:");
        this.books.forEach(function (book, index) {
            console.log("".concat(index + 1, ". [ID: ").concat(book.getId(), "] ").concat(book.getTitle(), " - ").concat(book.getAuthor(), " (").concat(book.getYear(), ")"));
        });
    };
    Library.prototype.deleteBookById = function (id) {
        var index = this.books.findIndex(function (book) { return book.getId() === id; });
        if (index !== -1) {
            this.books.splice(index, 1);
            console.log("Da xoa sach co id ".concat(id));
        }
        else {
            console.log("Khong tim thay sach co id ".concat(id));
        }
    };
    Library.prototype.updateBookById = function (id, newTitle, newAuthor, newYear) {
        var book = this.books.find(function (book) { return book.getId() === id; });
        if (book) {
            book.setTitle(newTitle);
            book.setAuthor(newAuthor);
            book.setYear(newYear);
            console.log("Da cap nhat thong tin sach co id ".concat(id));
        }
        else {
            console.log("Khong tim thay sach co id ".concat(id));
        }
    };
    return Library;
}());
var book1 = new Book(1, "De Men Phieu Luu Ky", "To Hoai", 1941);
var book2 = new Book(2, "Tuoi Tre Dang Gia Bao Nhieu", "Rosie Nguyen", 2016);
var book3 = new Book(3, "Nha Gia Kim", "Paulo Coelho", 1988);
var book4 = new Book(4, "Dac Nhan Tam", "Dale Carnegie", 1936);
var book5 = new Book(5, "Muon Kiep Nhan Sinh", "Nguyen Phong", 2020);
var library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
library.listBooks();
library.updateBookById(3, "Nha Gia Kim - Ban Cap Nhat", "Paulo Coelho", 2023);
library.deleteBookById(2);
library.listBooks();

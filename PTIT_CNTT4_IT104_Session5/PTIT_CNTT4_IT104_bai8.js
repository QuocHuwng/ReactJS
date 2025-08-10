var Book = /** @class */ (function () {
    function Book(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
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
    Book.prototype.setTitle = function (title) {
        this.title = title;
    };
    Book.prototype.setAuthor = function (author) {
        this.author = author;
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
            console.log("".concat(index + 1, ". [ID: ").concat(book.getId(), "] ").concat(book.getTitle(), " - ").concat(book.getAuthor()));
        });
    };
    Library.prototype.updateBookById = function (id, newTitle, newAuthor) {
        var book = this.books.find(function (b) { return b.getId() === id; });
        if (book) {
            book.setTitle(newTitle);
            book.setAuthor(newAuthor);
            console.log("Da cap nhat thong tin sach co id ".concat(id));
        }
        else {
            console.log("Khong tim thay sach co id ".concat(id));
        }
    };
    Library.prototype.searchBooksByTitle = function (keyword) {
        var foundBooks = this.books.filter(function (book) {
            return book.getTitle().toLowerCase().includes(keyword.toLowerCase());
        });
        if (foundBooks.length > 0) {
            console.log("Ket qua tim kiem voi tu khoa \"".concat(keyword, "\":"));
            foundBooks.forEach(function (book, index) {
                console.log("".concat(index + 1, ". [ID: ").concat(book.getId(), "] ").concat(book.getTitle(), " - ").concat(book.getAuthor()));
            });
        }
        else {
            console.log("Khong tim thay sach nao voi tu khoa \"".concat(keyword, "\""));
        }
    };
    return Library;
}());
var book1 = new Book(1, "De Men Phieu Luu Ky", "To Hoai");
var book2 = new Book(2, "Tuoi Tre Dang Gia Bao Nhieu", "Rosie Nguyen");
var book3 = new Book(3, "Nha Gia Kim", "Paulo Coelho");
var book4 = new Book(4, "Dac Nhan Tam", "Dale Carnegie");
var book5 = new Book(5, "Muon Kiep Nhan Sinh", "Nguyen Phong");
var library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
library.listBooks();
library.updateBookById(3, "Nha Gia Kim - Ban Cap Nhat", "Paulo Coelho");
library.listBooks();
library.searchBooksByTitle("kim");

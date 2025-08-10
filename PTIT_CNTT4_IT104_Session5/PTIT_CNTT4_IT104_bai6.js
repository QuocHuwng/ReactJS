var Book = /** @class */ (function () {
    function Book(title, author) {
        this.title = title;
        this.author = author;
    }
    Book.prototype.getTitle = function () {
        return this.title;
    };
    Book.prototype.getAuthor = function () {
        return this.author;
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
            console.log("".concat(index + 1, ". ").concat(book.getTitle(), " - ").concat(book.getAuthor()));
        });
    };
    return Library;
}());
var book1 = new Book("De Men Phieu Luu Ky", "To Hoai");
var book2 = new Book("Tuoi Tre Dang Gia Bao Nhieu", "Rosie Nguyen");
var book3 = new Book("Nha Gia Kim", "Paulo Coelho");
var book4 = new Book("Dac Nhan Tam", "Dale Carnegie");
var book5 = new Book("Muon Kiep Nhan Sinh", "Nguyen Phong");
var library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
library.listBooks();

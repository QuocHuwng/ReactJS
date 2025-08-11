class Book {
    id: number;
    title: string;
    author: string;
    stock: number;
    status: string;

    constructor(id: number, title: string, author: string, stock: number, status: string) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = status;
    }
}

class Member {
    id: number;
    name: string;
    contact: string;
    lendedBooks: Book[];
    status: string;

    constructor(id: number, name: string, contact: string, status: string) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.status = status;
        this.lendedBooks = [];
    }
}

class LendedBook {
    memberId: number;
    bookId: number;
    dueDate: string;

    constructor(memberId: number, bookId: number, dueDate: string) {
        this.memberId = memberId;
        this.bookId = bookId;
        this.dueDate = dueDate;
    }
}

class Library {
    books: Book[];
    members: Member[];

    constructor() {
        this.books = [];
        this.members = [];
    }

    addBook(book: Book): void {
        this.books.push(book);
    }

    showBooks(): void {
        console.log("Danh sach sach trong thu vien:");
        this.books.forEach(book => {
            console.log(`ID: ${book.id}, Tieu de: ${book.title}, Tac gia: ${book.author}, So luong: ${book.stock}, Tinh trang: ${book.status}`);
        });
    }
}

const myLibrary = new Library();

const book1 = new Book(1, "Lap trinh JavaScript", "Nguyen Van A", 5, "Co san");
const book2 = new Book(2, "React nang cao", "Tran Thi B", 3, "Co san");
const book3 = new Book(3, "TypeScript co ban", "Le Van C", 2, "Co san");

myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);

myLibrary.showBooks();

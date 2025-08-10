class Book {
    private id: number;
    private title: string;
    private author: string;

    constructor(id: number, title: string, author: string) {
        this.id = id;
        this.title = title;
        this.author = author;
    }

    public getId(): number {
        return this.id;
    }

    public getTitle(): string {
        return this.title;
    }

    public getAuthor(): string {
        return this.author;
    }

    public setTitle(title: string): void {
        this.title = title;
    }

    public setAuthor(author: string): void {
        this.author = author;
    }
}

class Library {
    private books: Book[] = [];

    public addBook(book: Book): void {
        this.books.push(book);
    }

    public listBooks(): void {
        console.log("Danh sach sach trong thu vien:");
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. [ID: ${book.getId()}] ${book.getTitle()} - ${book.getAuthor()}`);
        });
    }

    public updateBookById(id: number, newTitle: string, newAuthor: string): void {
        const book = this.books.find(b => b.getId() === id);
        if (book) {
            book.setTitle(newTitle);
            book.setAuthor(newAuthor);
            console.log(`Da cap nhat thong tin sach co id ${id}`);
        } else {
            console.log(`Khong tim thay sach co id ${id}`);
        }
    }
}

const book1 = new Book(1, "De Men Phieu Luu Ky", "To Hoai");
const book2 = new Book(2, "Tuoi Tre Dang Gia Bao Nhieu", "Rosie Nguyen");
const book3 = new Book(3, "Nha Gia Kim", "Paulo Coelho");
const book4 = new Book(4, "Dac Nhan Tam", "Dale Carnegie");
const book5 = new Book(5, "Muon Kiep Nhan Sinh", "Nguyen Phong");

const library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);

library.listBooks();

library.updateBookById(3, "Nha Gia Kim - Ban Cap Nhat", "Paulo Coelho");

library.listBooks();
class Book {
    private title: string;
    private author: string;

    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }

    public getTitle(): string {
        return this.title;
    }

    public getAuthor(): string {
        return this.author;
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
            console.log(`${index + 1}. ${book.getTitle()} - ${book.getAuthor()}`);
        });
    }
}

const book1 = new Book("De Men Phieu Luu Ky", "To Hoai");
const book2 = new Book("Tuoi Tre Dang Gia Bao Nhieu", "Rosie Nguyen");
const book3 = new Book("Nha Gia Kim", "Paulo Coelho");
const book4 = new Book("Dac Nhan Tam", "Dale Carnegie");
const book5 = new Book("Muon Kiep Nhan Sinh", "Nguyen Phong");

const library = new Library();

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);

library.listBooks();
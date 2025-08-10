class Book {
    private id: number;
    private title: string;
    private author: string;
    private year: number;

    constructor(id: number, title: string, author: string, year: number) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
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

    public getYear(): number {
        return this.year;
    }

    public setTitle(title: string): void {
        this.title = title;
    }

    public setAuthor(author: string): void {
        this.author = author;
    }

    public setYear(year: number): void {
        this.year = year;
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
            console.log(`${index + 1}. [ID: ${book.getId()}] ${book.getTitle()} - ${book.getAuthor()} (${book.getYear()})`);
        });
    }

    public deleteBookById(id: number): void {
        const index = this.books.findIndex(book => book.getId() === id);
        if (index !== -1) {
            this.books.splice(index, 1);
            console.log(`Da xoa sach co id ${id}`);
        } else {
            console.log(`Khong tim thay sach co id ${id}`);
        }
    }

    public updateBookById(id: number, newTitle: string, newAuthor: string, newYear: number): void {
        const book = this.books.find(book => book.getId() === id);
        if (book) {
            book.setTitle(newTitle);
            book.setAuthor(newAuthor);
            book.setYear(newYear);
            console.log(`Da cap nhat thong tin sach co id ${id}`);
        } else {
            console.log(`Khong tim thay sach co id ${id}`);
        }
    }
}

const book1 = new Book(1, "De Men Phieu Luu Ky", "To Hoai", 1941);
const book2 = new Book(2, "Tuoi Tre Dang Gia Bao Nhieu", "Rosie Nguyen", 2016);
const book3 = new Book(3, "Nha Gia Kim", "Paulo Coelho", 1988);
const book4 = new Book(4, "Dac Nhan Tam", "Dale Carnegie", 1936);
const book5 = new Book(5, "Muon Kiep Nhan Sinh", "Nguyen Phong", 2020);

const library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);

library.listBooks();

library.updateBookById(3, "Nha Gia Kim - Ban Cap Nhat", "Paulo Coelho", 2023);
library.deleteBookById(2);

library.listBooks();

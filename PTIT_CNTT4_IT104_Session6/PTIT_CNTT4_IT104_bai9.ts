class Member {
    id: number;
    name: string;
    contact: string;
    lendedBooks: Book[];
    status: string;

    constructor(id: number, name: string, contact: string, status: string = "Dang hoat dong") {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.status = status;
        this.lendedBooks = [];
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

    registerMember(id: number, name: string, contact: string): void {
        const newMember = new Member(id, name, contact);
        this.members.push(newMember);
    }

    blockMember(id: number): void {
        const member = this.members.find(m => m.id === id);
        if (member) {
            member.status = "Bi khoa";
        }
    }

    showMembers(): void {
        console.log("Danh sach thanh vien thu vien:");
        this.members.forEach(member => {
            console.log(`ID: ${member.id}, Ten: ${member.name}, Lien he: ${member.contact}, Trang thai: ${member.status}`);
        });
    }
}

const myLibrary = new Library();

myLibrary.registerMember(1, "Nguyen Van A", "0123456789");
myLibrary.registerMember(2, "Tran Thi B", "0987654321");

myLibrary.blockMember(2);

myLibrary.showMembers();

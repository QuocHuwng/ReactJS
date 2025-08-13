// b1: tao lop book
class Book{
    id: number;
    title: string;
    author: string;
    year: number;
    constructor(id: number, title: string, author:string, year:number) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
    }
}
// b2: tao lop thu vien Libarary
class Library<T extends {id:number, name:string}>{
    //Tao mang chua cac quyen sach trong thu vien
    books: T[] = [];
    //Dinh nghia cac phuong thuc
    //1.addBook
    addBook(book:T):void {
        this.books.push(book);
    }
    //2.search
    getBookByid(id:number): T | undefined {
        return this.books.find(item => item.id === id)
    }
    //3. delete
    removeBookId(id: number): void{
        let index = this.books.findIndex(item => item.id == id);
        if (index == -1) {
            console.log("Khong co sach trong thu vien");
        } else {
            let confirmDelete = confirm(`Ban co muon xoa sach: ${this.books[index].name}`);
            if (confirmDelete) {
                this.books.splice(index, 1);
            }
        }
    }
    //4. update
    updateBook(id: number, new_book: T): void{
        
    }
}
// b3: viet cac ham trien khai ung dung

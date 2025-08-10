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

    public getId(): number { return this.id; }
    public getTitle(): string { return this.title; }
    public getAuthor(): string { return this.author; }
    public getYear(): number { return this.year; }

    public getInfo(): string {
        return `ID: ${this.id}, Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`;
    }

    public setInfo(title: string, author: string, year: number): void {
        this.title = title;
        this.author = author;
        this.year = year;
    }
}

class Library {
    private books: Book[];

    constructor(books: Book[] = []) {
        this.books = books;
    }

    public addBook(book: Book): void {
        if (this.books.some(b => b.getId() === book.getId())) {
            console.log(`Sách có ID ${book.getId()} đã tồn tại. Không thêm trùng ID.`);
            return;
        }
        this.books.push(book);
    }

    public viewBooks(): void {
        if (this.books.length === 0) {
            console.log("Thư viện chưa có sách nào.");
            return;
        }
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. ${book.getInfo()}`);
        });
    }

    public updateBookById(id: number, newTitle: string, newAuthor: string, newYear: number): void {
        const matched = this.books.filter(b => b.getId() === id);
        if (matched.length === 0) {
            console.log(`Không tìm thấy sách có ID ${id}.`);
            return;
        }
        matched.forEach(b => b.setInfo(newTitle, newAuthor, newYear));
        console.log(`Đã cập nhật ${matched.length} sách có ID ${id}.`);
    }

    public deleteBookById(id: number): void {
        const originalLength = this.books.length;
        this.books = this.books.filter(b => b.getId() !== id);
        const removed = originalLength - this.books.length;
        if (removed > 0) {
            console.log(`Đã xóa ${removed} sách có ID ${id}.`);
        } else {
            console.log(`Không tìm thấy sách có ID ${id}.`);
        }
    }

    public searchBooksByTitle(keyword: string): void {
        const found = this.books.filter(b => b.getTitle().toLowerCase().includes(keyword.toLowerCase()));
        if (found.length === 0) {
            console.log(`Không tìm thấy sách nào với từ khóa "${keyword}".`);
            return;
        }
        console.log(`Kết quả tìm kiếm cho từ khóa "${keyword}":`);
        found.forEach(b => console.log(b.getInfo()));
    }
}

const b1 = new Book(1, "Dế Mèn Phiêu Lưu Ký", "Tô Hoài", 1941);
const b2 = new Book(2, "Harry Potter", "J.K. Rowling", 1997);
const b3 = new Book(3, "Lão Hạc", "Nam Cao", 1943);
const b4a = new Book(4, "Tắt Đèn", "Ngô Tất Tố", 1939);
const b4b = new Book(4, "Tắt Đèn (bản khác)", "Ngô Tất Tố", 1940);
const b5 = new Book(5, "Chí Phèo", "Nam Cao", 1941);

const library = new Library([b1, b2, b3, b4a, b4b, b5]);

console.log("\n Danh sách ban đầu:");
library.viewBooks();
console.log("\n Sửa thông tin sách có ID = 3:");
library.updateBookById(3, "Lão Hạc (Bản mới)", "Nam Cao",2022);
console.log("\n Danh sách sau khi sửa:");
library.viewBooks();
console.log("\n Tìm kiếm sách theo tên 'Nam':");
library.searchBooksByTitle("Nam");

console.log("Trước xóa:");
library.viewBooks();

library.deleteBookById(4); 

console.log("Sau xóa:");
library.viewBooks();

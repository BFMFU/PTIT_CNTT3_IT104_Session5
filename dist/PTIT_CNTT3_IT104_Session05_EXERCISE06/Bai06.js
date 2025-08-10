class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    getInfo() {
        return `Title: ${this.title}, Author: ${this.author}`;
    }
}
class Library {
    constructor(books = []) {
        this.books = books;
    }
    addBook(book) {
        this.books.push(book);
    }
    viewBooks() {
        if (this.books.length === 0) {
            console.log("Thư viện chưa có sách nào.");
        }
        else {
            this.books.forEach((book, index) => {
                console.log(`${index + 1}. ${book.getInfo()}`);
            });
        }
    }
}
let library = new Library;
const book1 = new Book("Dế Mèn Phiêu Lưu Ký", "Tô Hoài");
const book2 = new Book("Harry Potter", "J.K. Rowling");
const book3 = new Book("Lão Hạc", "Nam Cao");
const book4 = new Book("Tắt Đèn", "Ngô Tất Tố");
const book5 = new Book("Chí Phèo", "Nam Cao");
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
library.viewBooks();

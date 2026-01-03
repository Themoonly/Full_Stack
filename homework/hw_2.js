const library = {
    books: [],

    addBook: function (book) {
        // TODO: เขียนโค้ดสำหรับเพิ่มหนังสือ
        const isDuplicate = this.books.some(existingBook => existingBook.title === book.title);
        
        if (!isDuplicate) {
            this.books.push(book);
        } else {
            // ในกรณีที่ต้องการแจ้งเตือน (เลือกใส่หรือไม่ก็ได้)
            console.log(`หนังสือเรื่อง "${book.title}" มีอยู่แล้วในระบบ`);
        }
    },

    removeBook: function (title) {
        // TODO: เขียนโค้ดสำหรับลบหนังสือตามชื่อ
        const bookIndex = this.books.findIndex(book => book.title === title);
        
        if (bookIndex !== -1) {
            // ถ้าเจอ (Index ไม่ใช่ -1) ให้ลบออก
            this.books.splice(bookIndex, 1);
        }
    },

    listBooks: function () {
        // TODO: เขียนโค้ดสำหรับแสดงรายชื่อหนังสือทั้งหมด
        this.books.forEach((book, index) => {
            const status = book.isRead ? "อ่านแล้ว" : "ยังไม่ได้อ่าน";
            console.log(`${index + 1}. 
                ชื่อ: ${book.title}, 
                ผู้แต่ง: ${book.author}, 
                ปีที่พิมพ์: ${book.year}, 
                สถานะ: ${status}`);
        });
    },

    getUnreadBooks: function () {
        // TODO: เขียนโค้ดสำหรับส่งคืนหนังสือที่ยังไม่ได้อ่าน
        return this.books.filter(book => book.isRead === false);
    }
};


library.addBook({ title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, isRead: true });
library.addBook({ title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, isRead: false });
library.addBook({ title: "1984", author: "George Orwell", year: 1949, isRead: true });

library.listBooks();
/* Output:
1. ชื่อ: The Great Gatsby, ผู้แต่ง: F. Scott Fitzgerald, ปีที่พิมพ์: 1925, สถานะ: อ่านแล้ว
2. ชื่อ: To Kill a Mockingbird, ผู้แต่ง: Harper Lee, ปีที่พิมพ์: 1960, สถานะ: ยังไม่ได้อ่าน
3. ชื่อ: 1984, ผู้แต่ง: George Orwell, ปีที่พิมพ์: 1949, สถานะ: อ่านแล้ว
*/

console.log(library.getUnreadBooks());
// Output: [ { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, isRead: false } ]

library.removeBook("1984");
library.listBooks();
/* Output:
1. ชื่อ: The Great Gatsby, ผู้แต่ง: F. Scott Fitzgerald, ปีที่พิมพ์: 1925, สถานะ: อ่านแล้ว
2. ชื่อ: To Kill a Mockingbird, ผู้แต่ง: Harper Lee, ปีที่พิมพ์: 1960, สถานะ: ยังไม่ได้อ่าน
*/


module.exports = library;

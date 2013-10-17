var BookList = function(booksRead, booksUnread, nextBook, currentBook, lastBook){
    this.bookShelf = [];
    this.booksRead = booksRead;
    this.booksUnread = booksUnread;
    this.nextBook = nextBook;
    this.currentBook = currentBook;
    this.lastBook = lastBook;
    this.add = function(book){
        this.bookShelf.push(book);
    };
    this.finishCurrentBook = function() {
        this.currentBook.read = true;
        this.currentBook.readDate = new Date(Date.now());
        this.lastBook = this.currentBook;
        this.currentBook = this.nextBook;
        this.nextBook = this.bookShelf[this.readTrueOrFalse === false];
    };
};

var Book = function(title, genre, author, readTrueOrFalse, readDateIsObject){
    this.title = title;
    this.genre = genre;
    this.author = author;
    this.read = readTrueOrFalse;
    this.readDate = readDateIsObject;
};

var harryPotter = new Book("Harry Potter", "Fiction", "J.K. Rowling", false);
var kamaSutra = new Book("Kama Sutra", "Erotica", "Anonymous", false);
var theBible = new Book("The Bible", "Fiction", "God", true, new Date(2010, 9, 15));
var micasBookList = new BookList(5, 3, kamaSutra, harryPotter, theBible);

// console.log(kamaSutra);
// console.log(theBible);
// console.log(harryPotter);
// console.log(micasBookList);


// micasBookList.finishCurrentBook();
console.log("Empty bookshelf ", micasBookList.bookShelf);
micasBookList.add(kamaSutra);
micasBookList.add(harryPotter);
micasBookList.add(theBible);
console.log("With 3 added books: ", micasBookList.bookShelf);
micasBookList.finishCurrentBook();
console.log("After finishing HP: ", micasBookList.bookShelf);
console.log("The new book I'm reading: ", micasBookList.currentBook);
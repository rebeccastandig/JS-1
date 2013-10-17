var BookList = function(books){
    this.bookShelf = books;

    if (this.bookShelf) {
        for (var i = this.bookShelf.length - 1; i >= 0; i--) {
          if (this.bookShelf[i].read != true) {
            this.currentBook = this.bookShelf[i];
            break;
          }
        }
    }
        for (var i = this.bookShelf.length - 1; i >= 0; i--) {
          if (this.bookShelf[i].read){
            this.lastBook = this.bookShelf[i];
            }
          for (var i = this.bookShelf.length -1; i >= 0; i--) {
            if (this.bookShelf[i].readDate > this.lastBook.readDate) {
                this.lastBook = this.bookShelf[i];
            };
          }
        };
    

//     numReadBooks = this.readBooks(this.bookShelf);
//     this.readBooks = function(){
//         for (var i = this.bookShelf.length - 1; i >= 0; i--) {
//             if (this.bookShelf[i].read) {
//                 numReadBooks += 1;
//                 return numReadBooks;
//             }
//         }
//     };
//     this.add = function(newBook){
//         //add new book to this.bookShelf
//         this.Bookshelf.push(newBook);
//         if (newBook.read == true){
//             this.readBooks(this.bookShelf);
//         }
//         for (var i = this.bookShelf.length - 1; i >= 0; i--) {
//             if (newBook.readDate >= bookShelf[i].readDate) {
//                 this.lastBook = newBook;
//             };
//             if (newBook.read === false) { //this is some janky-ass code ahhhhhhh
//                 this.nextBook = newBook;
//             }
//     };
//     this.finishCurrentBook = function() {
//         this.currentBook.read = true;
//         this.currentBook.readDate = new Date(Date.now());
//         this.lastBook = this.currentBook;
//         this.currentBook = this.nextBook;
//         this.nextBook = this.bookShelf[this.readTrueOrFalse === false];
//     };
};

books = [];
var Book = function(title, genre, author, readTrueOrFalse, readDate){
    this.title = title;
    this.genre = genre;
    this.author = author;
    this.read = readTrueOrFalse;
    this.readDate = new Date(readDate);
    books.push(this);
};


var harryPotter = new Book("Harry Potter", "Fiction", "J.K. Rowling", false);
var kamaSutra = new Book("Kama Sutra", "Erotica", "Anonymous", false);
var theBible = new Book("The Bible", "Fiction", "God", true, "15 Sep 2013");
var greysAnatomy = new Book("Grey's Anatomy", "Medical", "Grey", true, "10 Sep 2004");
var littleWomen = new Book("Little Women", "Fiction", "Louisa May Alcott", true, "10 Sep 1999");
var ourBookList = new BookList(books);

// console.log(kamaSutra);
// console.log(theBible);
// console.log(harryPotter);
console.log(ourBookList.currentBook);
console.log(ourBookList.lastBook);
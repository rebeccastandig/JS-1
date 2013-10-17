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
        for (var i = this.bookShelf.length - 1; i >= 0; i--) {
            if(this.bookShelf[i].read == false) {
                this.nextBook = this.bookShelf[i];
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

    this.finishCurrentBook = function() {
        if (this.currentBook) {
            this.currentBook.read = true;
            this.currentBook.readDate = new Date(Date.now());
            this.lastBook = this.currentBook;
            

            for (var i = this.bookShelf.length - 1; i >= 0; i--) {
                if (!this.bookShelf[i].read){
                    this.nextBook = this.bookShelf[i];
                    var reassigned = true;
                    console.log("next book: ",this.nextBook)
                }
            }
            if (!reassigned){
                this.nextBook = null;
            }
            this.currentBook = this.nextBook;
        } else {
                console.log("You don't have a current book. Go to the library!");

            //update # of read books
           
        }
    };
};

books = [];
var Book = function(title, genre, author, readTrueOrFalse, readDate){
    this.titles = title;
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
console.log("current book: ", ourBookList.currentBook);
ourBookList.finishCurrentBook();
console.log("current book now: ", ourBookList.currentBook);
ourBookList.finishCurrentBook();
console.log("current book now: ", ourBookList.currentBook);
ourBookList.finishCurrentBook();

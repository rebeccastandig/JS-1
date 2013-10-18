var BookList = function(books){
    this.bookShelf = books;
    this.numReadBooks = 0;
    this.numUnreadBooks = 0;

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
    


    for (var i = 0; i < this.bookShelf.length; i++) {
        if (this.bookShelf[i].read) {
            this.numReadBooks += 1;
        }
    };



    for (var i = 0; i < this.bookShelf.length; i++) {
        if (!this.bookShelf[i].read) {
            this.numUnreadBooks += 1;
        }
    };

    this.add = function(bookObject){
        this.bookShelf.push(bookObject);

        if (bookObject.read) {
            this.numReadBooks += 1;
            if (bookObject.readDate > this.lastBook.readDate) {
                this.lastBook = bookObject;
            }
        } else {
            this.numUnreadBooks += 1;
        }
    } 


    this.finishCurrentBook = function() {
        if (this.currentBook) {
            this.currentBook.read = true;
            this.numReadBooks += 1;
            this.numUnreadBooks -= 1;
            this.currentBook.readDate = new Date(Date.now());
            this.lastBook = this.currentBook;
            
            for (var i = this.bookShelf.length - 1; i >= 0; i--) {
                if (!this.bookShelf[i].read){
                    this.nextBook = this.bookShelf[i];
                    var reassigned = true;
                }
            }
            if (!reassigned){
                this.nextBook = null;
            }
            this.currentBook = this.nextBook;
        } else {
                console.log("You don't have a current book. Go to the library!");           
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
};


var harryPotter = new Book("Harry Potter", "Fiction", "J.K. Rowling", false);
var kamaSutra = new Book("Kama Sutra", "Erotica", "Anonymous", false);
var theBible = new Book("The Bible", "Fiction", "God", true, "15 Sep 2013");
var greysAnatomy = new Book("Grey's Anatomy", "Medical", "Grey", true, "10 Sep 2004");
var warAndPeace = new Book("War and Peace", "Fiction", "Leo Tolstoy", false);
var littleWomen = new Book("Little Women", "Fiction", "Louisa May Alcott", true, "10 Sep 1999");
books.push(harryPotter, kamaSutra, theBible, greysAnatomy, warAndPeace, littleWomen);
var ourBookList = new BookList(books);


// console.log("current book: ", ourBookList.currentBook);
// ourBookList.finishCurrentBook();
// console.log("Now I've read ", ourBookList.numReadBooks, " books.")
// console.log("And I have ", ourBookList.numUnreadBooks, " books left to read.")
var lotr = new Book("Lord of the Rings", "Fiction", "JRR Tolkein", true, "17 Oct 2013");
console.log(ourBookList.lastBook);
console.log("*********************************");
ourBookList.add(lotr);
console.log(ourBookList.lastBook);
// console.log("current book now: ", ourBookList.currentBook);
// ourBookList.finishCurrentBook();
// console.log("current book now: ", ourBookList.currentBook);
// ourBookList.finishCurrentBook();

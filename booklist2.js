var Book = function(title, genre, author, read, readDate) {
    this.bookTitle = title;
    this.genre = genre;
    this.author = author;
    this.read = read;
    this.readDate = new Date(readDate);
};



var BookList = function(books){ //books is an array
    this.add = function(oneBook) {
        this.bookShelf.push(oneBook);
        if (oneBook.read === true) {
            this.booksRead.push(oneBook);
        } else {
            this.booksUnread.push(oneBook);
        }
    };
 
    this.numBooksRead = function(){
        return this.booksRead.length;
    };

    this.numBooksUnread = function(){
        return this.booksUnread.length;
    };

    //Finds first book un UnreadBooks list and returns it
    this.currentBook = function(){
        return this.booksUnread[0];
    };

    this.lastBook = function() {
        for (var i = 0; i < this.booksRead.length; i++) {
            latestRead = this.booksRead[i];

               for (var j = 0; j < this.booksRead.length; j++) {
                if (this.booksRead[j].readDate > latestRead.readDate) {
                    latestRead = this.booksRead[j];
                }
            }
        }
        return latestRead;
    };

    //---------------------------------

    this.booksRead = [];
    this.booksUnread = [];
    this.bookShelf = [];

    for (var i = 0; i < books.length; i++) {
        this.add(books[i]);
    }

}; //end of the booklist

var harryPotter = new Book("Harry Potter & the Sorcerer's Stone", "Fiction", "J.K.Rowling", true, "01 Sep 1998");
var theBible = new Book("The Bible", "Religion", "God", false);
var warAndPeace = new Book("War And Peace", "Fiction", "Leo Tolstoy", false);
var pridePrejudice = new Book("Pride and Prejudice", "Fiction", "Jane Austen", true, "01 Jan 2008");

myBooks = [];
myBooks.push(harryPotter, warAndPeace, theBible, pridePrejudice);
var micasBookList = new BookList(myBooks);

console.log(micasBookList.lastBook());

var foodMatters = new Book("Food Matters", "Non-Fiction", "Michael Pollan", true, "01 Dec 2013");
micasBookList.add(foodMatters);

console.log(micasBookList.lastBook());




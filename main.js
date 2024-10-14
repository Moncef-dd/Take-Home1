// interveiw question
/*
Implement the system of an online cloud reading platform. 
 - the users have a library they can add books to or emove from. 
 - Users can set a book from their library as active
 - the application remember where a user left off in a given book. 
 
 - it displays only one page at a time. 

*/

class Book {
    constructor(bookID, title, data) {
        this.bookID = bookID; 
        this.title = title; 
        this.data = data; // a list of strings (each string represent a single page)

        this.seen = false; 
        this.currPage = 0;
    }

    pageDisplay() {
        if(!this.seen && this.data){
            this.seen = true;
            this.currPage = 1; 

            return this.data[this.currPage]; 
        } else {
            return this.data[this.currPage]
        }
    }

    turnThePage() {
        if(this.currPage === this.data.length){
            return this.data[0]; // redirect to the cover page (paage 0)
        } else {
            this.currPage++; 
            return this.data[this.currPage]; 
        }

    }

}

class UserCollection {
    constructor() {
        this.collection = {}; // {id: title} format
        this.idCounter = 0;

        this.idActive = null;  
    }

    bookAdd(title, data) {
        const newBook = new Book(this.idCounter, title, data); 

        this.collection[newBook.bookID] = newBook; 
        this.idCounter++; 
    }

    bookRemove(bookID) {
        const found = this.collection.find(id => id === bookID)
        if(found) {
            this.collection = this.collection.filter((id) => id != bookID);
        } else {
            console.log("Book not found!"); 
        }

    }
    setActiveBook(bookID) {
        if(!this.idActive) {
            this.idActive = bookID; 
        } else {
            this.idActive = bookID; 
            console.log("the active book has been replaced!")
        }
    }

    
}
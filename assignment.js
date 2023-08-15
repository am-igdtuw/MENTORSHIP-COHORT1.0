const library = [
    { 
title: "The Great Gatsby", 
author: "F. Scott Fitzgerald", 
year: 1925,
   pages: 180 
},
    {
title: "To Kill a Mockingbird",
author: "Harper Lee", 
year: 1960, 
pages: 281
},
    {
title: "1984", 
author: "George Orwell", 
year: 1949, 
pages: 328 
},
    {
title: "Pride and Prejudice", 
author: "Jane Austen", 
year: 1813,
pages: 432 
} ]


// Total Number of Pages: Write a function getTotalPages that calculates and returns the total number of pages in the library.

const getTotalPages=library.reduce((pageCount, el) => {
    return pageCount + el.pages;
}, 0);


// List of Book Titles: Write a function getBookTitles that returns an array containing only the titles of the books in the library.

const getBookTitles=library.map(book=>book.title)

// Books Published After a Given Year: Write a function getBooksPublishedAfterYear(year) that takes a year as a parameter and returns an array containing the titles of books published after that year.

function getBooksPublishedAfterYear(year){
    let BookPublishedAfterYear=[]
    
    for (const book of library) {
        if (book.year > year) {
            BookPublishedAfterYear.push(book.title);
        }
    }
    return BookPublishedAfterYear;

}

// Average Number of Pages: Write a function getAveragePages that calculates and returns the average number of pages across all books in the library.

const gettotalbookcount=library.reduce((bookcount, el) => {
    return bookcount +1;
}, 0);

const getAveragePages=()=>{
    return getTotalPages/gettotalbookcount
}
function avg() {
    return  getTotalPages / gettotalbookcount
}

// Longest Book: Write a function getLongestBook that returns the title of the book with the most pages.

const getLongestBook= library.reduce((maxBook, currentBook) => {
    if (currentBook.pages > maxBook.pages) {
        return currentBook;
    } else {
        return maxBook;
    }
}, library[0]); 

// Authors and Their Books: Write a function getAuthorsAndBooks that returns an object where the keys are author names and the values are arrays of book titles written by each author.

function getAuthorsAndBooks(year){
    const AuthorsAndBooks=[];
    
    for (const book of library) {
        const author=book.author;
        const title= book.title;
        if (!AuthorsAndBooks[author]) {
            AuthorsAndBooks[author] = [];
        }

        AuthorsAndBooks[author].push(title);
    }
    return AuthorsAndBooks;

}


// Total Number of Pages by Author: Write a function getTotalPagesByAuthor that returns an object where the keys are author names and the values are the total number of pages of books written by each author.

const getTotalPagesByAuthor=(library)=>{
    const totalPagesByAuthor = {};

    for (const book of library) {
        const author = book.author;
        const pages = book.pages;
        if (!totalPagesByAuthor[author]) {
            totalPagesByAuthor[author] = 0;
        }

        totalPagesByAuthor[author] += pages;
    }

    return totalPagesByAuthor;
}
       

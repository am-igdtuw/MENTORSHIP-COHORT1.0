

 	//Assignment Title: Exploring Higher-Order Functions in JavaScript
    
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

/*Total Number of Pages: 
Write a function getTotalPages 
that calculates and returns the 
total number of pages in the library.*/

function getTotalPages() {
    const total_pages = library.reduce((sum, book) => sum + book.pages, 0);
    return total_pages;
}
console.log(getTotalPages()); 


//List of Book Titles: 
// Write a function getBookTitles 
// that returns an array containing o
// nly the titles of the books in the library.


const getBookTitles = () => {
    return library.map((book) => book.title);
  };
  console.log(getBookTitles()); 


  //Books Published After a Given Year
  // : Write a function getBooksPublishedAfterYear(year)
  //  that takes a year as a parameter and returns an array 
  // containing the titles of books published after that year.


  function getBooksPublishedAfterYear(year) {
    const booksAfterYear = library.filter((book) => book.year > year);
    const bookTitlesAfterYear = booksAfterYear.map((book) => book.title);
    return bookTitlesAfterYear;
  }
  
  console.log(getBooksPublishedAfterYear(1920));

  //Average Number of Pages: 
  // Write a function getAveragePages 
  // that calculates and returns the average
  //  number of pages across all books in the library.


  function getAveragePages() {
    const totalPages = library.reduce((sum, book) => sum + book.pages, 0);
    const average = totalPages / library.length;
    return average;
  }
  
  console.log(getAveragePages());


  //Longest Book:
  //  Write a function getLongestBook 
  // that returns the title of the book 
  // with the most pages.


  function getLongestBook() {
    const longestBook = library.reduce((longest, book) => book.pages > longest.pages ? book : longest );
    return longestBook.title;
  }
  
  console.log(getLongestBook());



  //Authors and Their Books: 
  // Write a function getAuthorsAndBooks 
  // that returns an object where the keys are
  //  author names and the values are arrays of
  //  book titles written by each author.


 
  function getAuthorsAndBooks() {
    const authorsAndBooks = {};
  
    library.forEach((book) => {
      if (!authorsAndBooks[book.author]) {
        authorsAndBooks[book.author] = [];
      }
      authorsAndBooks[book.author].push(book.title);
    });
  
    return authorsAndBooks;
  }
  
  console.log(getAuthorsAndBooks());



  //Total Number of Pages by Author:
  //  Write a function getTotalPagesByAuthor 
  // that returns an object where the keys are author 
  // names and the values are the total number of pages of books written by each author
  


  function getTotalPagesByAuthor() {
    const totalPagesByAuthor = {};
  
    library.forEach((book) => {
      if (!totalPagesByAuthor[book.author]) {
        totalPagesByAuthor[book.author] = 0;
      }
      totalPagesByAuthor[book.author] += book.pages;
    });
  
    return totalPagesByAuthor;
  }
  
  console.log(getTotalPagesByAuthor());



  //Advanced: Filter and Map: 
  // Write a function getShortestBookByAuthor
  //  that returns an object where the keys are 
  // author names and the values are the titles of the shortest book written by each author.


  
  function getShortestBookByAuthor() {
    const shortestBookByAuthor = {};
  
    library.forEach((book) => {
      if (!shortestBookByAuthor[book.author] || book.pages < shortestBookByAuthor[book.author].pages) {
        shortestBookByAuthor[book.author] = book;
      }
    });
  
    const result = {};
    for (const author in shortestBookByAuthor) {
      result[author] = shortestBookByAuthor[author].title;
    }
  
    return result;
  }
  
  console.log(getShortestBookByAuthor());
  
  
  
  
  
  
  
  
  
  
  
  
  
  



//You are given a dataset containing information about books in a library.
//Your task is to write JavaScript functions using higher-order functions to perform various operations on this dataset. 
//The dataset is provided in the form of an array of objects, where each object represents a book.
<------------------->
//Dataset Given:
_____________________
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
_____________________________

//Q1) Total Number of Pages: 
//Write a function getTotalPages that calculates and returns the total number of pages in the library.
<---------->
function getTotalPages() 
{
  let totalPages = 0;
  for (const book of library) 
    {
    totalPages += book.pages;
    }
  return totalPages;
}
_________________________
//Q2) List of Book Titles: 
//Write a function getBookTitles that returns an array containing only the titles of the books in the library.
<--------->
function getBookTitles() 
{
  return library.map(book => book.title);
}
_________________________
//Q3) Books Published After a Given Year: 
//Write a function getBooksPublishedAfterYear(year) that takes a year as a parameter and returns an array containing the titles of books published after that year.
<--------->
function getBooksPublishedAfterYear(year) 
{
  return library.filter(book => book.year > year).map(book => book.title);
}
_________________________
//Q4) Average Number of Pages: 
//Write a function getAveragePages that calculates and returns the average number of pages across all books in the library.
<--------->
function getAveragePages()
{
  const totalPages = getTotalPages(library);
  return totalPages / library.length;
}
_________________________
//Q5) Longest Book: 
//Write a function getLongestBook that returns the title of the book with the most pages.
<--------->
function getLongestBook() 
{
  const longestBook = library.reduce((longest, book) => book.pages > longest.pages ? book : longest);
  return longestBook.title;
}
_________________________
//Q6) Authors and Their Books: 
//Write a function getAuthorsAndBooks that returns an object where the keys are author names and the values are arrays of book titles written by each author.
<--------->
function getAuthorsAndBooks() 
{
  const authorsAndBooks = {};
  library.forEach(book => {
    if (!authorsAndBooks[book.author]) {
      authorsAndBooks[book.author] = [];
    }
    authorsAndBooks[book.author].push(book.title);
  });
  return authorsAndBooks;
}
_________________________
//Q7) Total Number of Pages by Author: 
//Write a function getTotalPagesByAuthor that returns an object where the keys are author names and the values are the total number of pages of books written by each author.
<--------->
function getTotalPagesByAuthor() {
  const totalPagesByAuthor = {};
  library.forEach(book => {
    if (!totalPagesByAuthor[book.author]) {
      totalPagesByAuthor[book.author] = 0;
    }
    totalPagesByAuthor[book.author] += book.pages;
  });
  return totalPagesByAuthor;
}
_________________________
//Q8) Advanced: Filter and Map: 
//Write a function getShortestBookByAuthor that returns an object where the keys are author names and the values are the titles of the shortest book written by each author.
<--------->
function getShortestBookByAuthor() {
  const shortestBookByAuthor = {};
  library.forEach(book => {
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
_________________________
//Running the functions
console.log("Total Number of Pages:", getTotalPages());
console.log("List of Book Titles:", getBookTitles());
console.log("Books Published After 1925:", getBooksPublishedAfterYear(1925));
console.log("Average Number of Pages:", getAveragePages());
console.log("Longest Book:", getLongestBook());
console.log("Authors and Their Books:", getAuthorsAndBooks());
console.log("Total Number of Pages by Author:", getTotalPagesByAuthor());
console.log("Shortest Book By Author:", getShortestBookByAuthor());
<------------------------------------------------------------------------------------------------------------------------------------------------------------------------>


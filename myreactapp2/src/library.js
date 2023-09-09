// this is a dataset in the form of array of objects
const library = [
	{ title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925,pages: 180 },
	{title: "To Kill a Mockingbird",author: "Harper Lee", year: 1960, pages: 281},
	{title: "1984", author: "George Orwell", year: 1949, pages: 328 },
	{title: "Pride and Prejudice", author: "Jane Austen", year: 1813,pages: 432 } ]

//3.    
//used the reduce higher order array method
//totalpages(arg) is the accumulator that collects the total number of pages
//book(arg) is the current iterator  
const getTotalPages  = library.reduce((totalPages, book) => totalPages + book.pages, 0);
console.log("Total number of pages in the library:",getTotalPages);    

//4.
//used the map function to create the new array
const bookTitles =function getBookTitles(library) {
  return library.map(book => book.title);
}
console.log("Book titles in the library:", bookTitles);

//5.
//used the filter array method that filetrs out contents frm from the array
const booksPublishedAfterYear=function getBooksPublishedAfterYear(library, year) {
  return library.filter(book => book.year > year).map(book => book.title);
} 
const yearToCheck = 1950; // let year be 1950
console.log(`Books published after ${yearToCheck}:`, booksPublishedAfterYear); //this is a formatted string

//6.
// used the reduced array method to calculate the sum of pages of all the books in the library and then finally the average of all the pages
const averagePages =function getAveragePages(library) {
  const totalNumberOfPages = library.reduce((totalPages, book) => totalPages + book.pages, 0);
  return totalNumberOfPages / library.length;
}
console.log("Average number of pages across all books are:", averagePages);

//7.this snippet reutrns the title of the book with the largets title
const longestBookTitle =function getLongestBook(library) {
  return library.reduce((longestBook, book) => {
	if (book.pages > longestBook.pages) {
	  return book;
	}
	return longestBook;
  }).title;
}
console.log("Title of the book with the most pages:", longestBookTitle);

//8.
//returns an object where the keys are author names and the values are arrays of book titles written by each author.
const authorsAndBooks =function getAuthorsAndBooks(library) {
  return library.reduce((authorsAndBooks, book) => {
	if (!authorsAndBooks[book.author]) {
	  authorsAndBooks[book.author] = [];
	}
	authorsAndBooks[book.author].push(book.title);
	return authorsAndBooks;
  }, {});
}
console.log("Authors and their books:", authorsAndBooks);

//9.
//returns an object where the keys are author names and the values are the total number of pages of books written by each author.
const totalPagesByAuthor = function getTotalPagesByAuthor(library) {
  return library.reduce((totalPagesByAuthor, book) => {
	if (!totalPagesByAuthor[book.author]) {
	  totalPagesByAuthor[book.author] = 0;
	}
	totalPagesByAuthor[book.author] += book.pages;
	return totalPagesByAuthor;
  }, {});
}
console.log("Total pages by author:", totalPagesByAuthor);

//10.
//returns an object where the keys are author names and the values are the titles of the shortest book written by each author.
const shortestBooksByAuthor = getShortestBookByAuthor(library);
const shortestBookTitlesByAuthor = {};

for (const author in shortestBooksByAuthor) {
shortestBookTitlesByAuthor[author] = shortestBooksByAuthor[author].title;
}

console.log("Shortest book by author:", shortestBookTitlesByAuthor);

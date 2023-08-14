// Import the functions from library.js
const {
  getTotalPages,
  getBookTitles,
  getBooksPublishedAfterYear,
  getAveragePages,
  getLongestBook,
  getAuthorsAndBooks,
  getTotalPagesByAuthor,
  getShortestBookByAuthor,
} = require('./library');


// Call the functions and show the results
console.log('Total Number of Pages:', getTotalPages());
console.log('Book Titles:', getBookTitles());
console.log('Books Published After 1950:', getBooksPublishedAfterYear(1950));
console.log('Average Number of Pages:', getAveragePages());
console.log('Longest Book:', getLongestBook());
console.log('Authors and Their Books:', getAuthorsAndBooks());
console.log('Total Pages by Author:', getTotalPagesByAuthor());
console.log('Shortest Book by Author:', getShortestBookByAuthor());

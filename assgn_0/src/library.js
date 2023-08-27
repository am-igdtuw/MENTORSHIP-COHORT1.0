// Function to calculate total number of pages in the library
function getTotalPages(library){
    const totalPages = library.reduce((total, book) => total + book.pages, 0);
    return totalPages;
}
  // Function to get an array of book titles
function getBookTitles(library){
    const bookTitles = library.map((book) => book.title);
    return bookTitles;
}
  
  // Function to get books published after a given year
  function getBooksPublishedAfterYear(library, year) {
    const booksAfterYear = library.filter((book) => book.year > year);
    const bookTitlesAfterYear = booksAfterYear.map((book) => book.title);
    return bookTitlesAfterYear;
  }
  
  // Function to calculate the average number of pages
  function getAveragePages(library) {
    const totalBooks = library.length;
    const totalPages = getTotalPages(library);
    const averagePages = totalPages / totalBooks;
    return averagePages;
  }
  
  // Function to get the title of the longest book
  function getLongestBook(library) {
    const longestBook = library.reduce((longest, book) =>
      book.pages > longest.pages ? book : longest
    );
    return longestBook.title;
  }
  
  // Function to get an object with authors and their books
  function getAuthorsAndBooks(library) {
    const authorsAndBooks = library.reduce((result, book) => {
      if (!result[book.author]) {
        result[book.author] = [];
      }
      result[book.author].push(book.title);
      return result;
    }, {});
    return authorsAndBooks;
  }
  
  // Function to get an object with total pages by author
  function getTotalPagesByAuthor(library) {
    const totalPagesByAuthor = library.reduce((result, book) => {
      if (!result[book.author]) {
        result[book.author] = 0;
      }
      result[book.author] += book.pages;
      return result;
    }, {});
    return totalPagesByAuthor;
  }
  
  // Function to get an object with shortest book by author
  function getShortestBookByAuthor(library) {
    const shortestBookByAuthor = library.reduce((result, book) => {
      if (!result[book.author] || book.pages < result[book.author].pages) {
        result[book.author] = book;
      }
      return result;
    }, {});
    const shortestBookTitlesByAuthor = {};
    for (const author in shortestBookByAuthor) {
      shortestBookTitlesByAuthor[author] = shortestBookByAuthor[author].title;
    }
    return shortestBookTitlesByAuthor;
  }
  
module.exports = {
    getTotalPages,
    getBookTitles,
    getBooksPublishedAfterYear,
    getAveragePages,
    getLongestBook,
    getAuthorsAndBooks,
    getTotalPagesByAuthor,
    getShortestBookByAuthor,
  };
  
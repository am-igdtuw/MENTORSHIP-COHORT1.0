const library = [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
      pages: 180,
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960,
      pages: 281,
    },
    {
      title: "1984",
      author: "George Orwell",
      year: 1949,
      pages: 328,
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      year: 1813,
      pages: 432,
    },
  ];
//funtion to find total no of pages in lib
function getTotalPages(){
    const totalPages=library.reduce((total,kuchbhi)=> total+ kuchbhi.pages,0);
    return totalPages;
}
//to get book titles
function getBookTitles(){
    const bookTitles= library.map((book)=> book.title);
    return bookTitles;
}
//array containing title of book after given yr--- filter
function getBooksPublishedAfterYear(year){
    const bookAfteryr= library.filter((book)=> book.year > year);
    return bookAfteryr;
}
//average pages
function getAveragePages(){
    const averagePrices= getTotalPages()/library.length;
    return averagePrices;
}
//get longest book
function getLongestBook() {
    const longestBook = library.reduce((maxBook, currentBook) =>
      currentBook.pages > maxBook.pages ? currentBook : maxBook,
      library[0] // Set the initial value to the first book in the array
    );
    return longestBook.title;
  }
//array with author name, book name
function getAuthorsAndBooks() {
    const authorsAndBooks = library.reduce((authorMap, book) => {
      if (!authorMap[book.author]) {
        authorMap[book.author] = [];
      }
      authorMap[book.author].push(book.title);
      return authorMap;
    }, {});
    return authorsAndBooks;
  }
// Function to create an object with authors as keys and total pages as values
function getTotalPagesByAuthor() {
    const totalPagesByAuthor = library.reduce((authorMap, book) => {
      if (!authorMap[book.author]) {
        authorMap[book.author] = 0;
      }
      authorMap[book.author] += book.pages;
      return authorMap;
    }, {});
    return totalPagesByAuthor;
  }
// Function to create an object with authors as keys and titles of shortest books as values
function getShortestBookByAuthor() {
    const shortestBookByAuthor = library.reduce((authorMap, book) => {
      if (!authorMap[book.author] || book.pages < authorMap[book.author].pages) {
        authorMap[book.author] = book;
      }
      return authorMap;
    }, {});
    const result = {};
    for (const author in shortestBookByAuthor) {
      result[author] = shortestBookByAuthor[author].title;
    }
    return result;
  }
// Exporting the functions for use in other modules
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
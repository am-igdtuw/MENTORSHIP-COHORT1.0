console.log("welcome!");

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
  }
];

// Total Number of Pages
function getTotalPages(library) {
  return library.reduce((total, book) => total + book.pages, 0);
}

// List of Book Titles
function getBookTitles(library) {
  return library.map(book => book.title);
}

// Books Published After a Given Year
function getBooksPublishedAfterYear(library, year) {
  return library.filter(book => book.year > year).map(book => book.title);
}

// Average Number of Pages
function getAveragePages(library) {
  const total = getTotalPages(library);
  return total / library.length;
}

// Longest Book
function getLongestBook(library) {
  const longestBook = library.reduce((longest, book) => (book.pages > longest.pages ? book : longest), library[0]);
  return longestBook.title;
}

// Authors and Their Books
function getAuthorsAndBooks(library) {
  const authorsAndBooks = {};
  library.forEach(book => {
    if (!authorsAndBooks[book.author]) {
      authorsAndBooks[book.author] = [];
    }
    authorsAndBooks[book.author].push(book.title);
  });
  return authorsAndBooks;
}

// Total Number of Pages by Author
function getTotalPagesByAuthor(library) {
  const totalPagesByAuthor = {};
  library.forEach(book => {
    if (!totalPagesByAuthor[book.author]) {
      totalPagesByAuthor[book.author] = 0;
    }
    totalPagesByAuthor[book.author] += book.pages;
  });
  return totalPagesByAuthor;
}

// Advanced: Filter and Map - Shortest Book by Author
function getShortestBookByAuthor(library) {
  const shortestBookByAuthor = {};
  library.forEach(book => {
    if (!shortestBookByAuthor[book.author] || book.pages < library.find(b => b.title === shortestBookByAuthor[book.author]).pages) {
      shortestBookByAuthor[book.author] = book.title;
    }
  });
  return shortestBookByAuthor;
}

// Test the functions
console.log("");
console.log(getTotalPages(library));
console.log(getBookTitles(library));
console.log(getBooksPublishedAfterYear(library, 1950));
console.log(getAveragePages(library));
console.log(getLongestBook(library));
console.log(getAuthorsAndBooks(library));
console.log(getTotalPagesByAuthor(library));
console.log(getShortestBookByAuthor(library));

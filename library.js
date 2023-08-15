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

// Calculate and return the total number of pages in the library
function getTotalPages(library) {
  const totalPages = library.reduce((total, book) => total + book.pages, 0);
  return totalPages;
}

// Return an array containing only the titles of the books in the library
function getBookTitles(library) {
  const bookTitles = library.map((book) => book.title);
  return bookTitles;
}

// Return an array containing the titles of books published after the given year
function getBooksPublishedAfterYear(library, year) {
  const booksAfterYear = library
    .filter((book) => book.year > year)
    .map((book) => book.title);
  return booksAfterYear;
}

// Calculate and return the average number of pages across all books in the library
function getAveragePages(library) {
  const totalBooks = library.length;
  const totalPages = getTotalPages(library);
  const averagePages = totalPages / totalBooks;
  return averagePages;
}

// Return the title of the book with the most pages
function getLongestBook(library) {
  const longestBook = library.reduce((longest, book) =>
    book.pages > longest.pages ? book : longest
  );
  return longestBook.title;
}

// Return an object where keys are author names and values are arrays of book titles
function getAuthorsAndBooks(library) {
  const authorsAndBooks = library.reduce((acc, book) => {
    if (!acc[book.author]) {
      acc[book.author] = [];
    }
    acc[book.author].push(book.title);
    return acc;
  }, {});
  return authorsAndBooks;
}

// Return an object where keys are author names and values are total pages of their books
function getTotalPagesByAuthor(library) {
  const totalPagesByAuthor = library.reduce((acc, book) => {
    if (!acc[book.author]) {
      acc[book.author] = 0;
    }
    acc[book.author] += book.pages;
    return acc;
  }, {});
  return totalPagesByAuthor;
}

// Return an object where keys are author names and values are titles of their shortest books
function getShortestBookByAuthor(library) {
  const shortestBookByAuthor = library.reduce((acc, book) => {
    if (!acc[book.author] || book.pages < library[acc[book.author]].pages) {
      acc[book.author] = library.indexOf(book);
    }
    return acc;
  }, {});

  const result = {};
  for (const author in shortestBookByAuthor) {
    result[author] = library[shortestBookByAuthor[author]].title;
  }
  return result;
}

// Finally printing 
console.log("Total Pages:", getTotalPages(library));
console.log("Book Titles:", getBookTitles(library));
console.log("Books Published After 1950:", getBooksPublishedAfterYear(library, 1950));
console.log("Average Pages:", getAveragePages(library));
console.log("Longest Book:", getLongestBook(library));
console.log("Authors and Their Books:", getAuthorsAndBooks(library));
console.log("Total Pages by Author:", getTotalPagesByAuthor(library));
console.log("Shortest Book by Author:", getShortestBookByAuthor(library));

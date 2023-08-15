//dataset
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

// 1. total number of pages 
function getTotalPages(library) {
  return library.reduce((totalPages, book) => totalPages + book.pages, 0);
}

// 2. list of book titles
function getBookTitles(library) {
  return library.map(book => book.title);
}

// 3. books published after given year
function getBooksPublishedAfterYear(library, year) {
  return library
    .filter(book => book.year > year)
    .map(book => book.title);
}

// 4. avg number of pages
function getAveragePages(library) {
  const totalPages = getTotalPages(library);
  return totalPages / library.length;
}

//5. longest book
function getLongestBook(library) {
  return library.reduce((longestBook, book) => {
    return book.pages > longestBook.pages ? book : longestBook;
  }).title;
}

// 6. author and their books
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

// 7. total number of pages by author
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

// 8. filter and map
function getShortestBookByAuthor(library) {
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

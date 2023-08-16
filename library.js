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
  
  // Total Number of Pages
  function getTotalPages(books) {
    return books.reduce((totalPages, book) => totalPages + book.pages, 0);
  }
  
  // List of Book Titles
  function getBookTitles(books) {
    return books.map((book) => book.title);
  }
  
  // Books Published After a Given Year
  function getBooksPublishedAfterYear(books, year) {
    return books.filter((book) => book.year > year).map((book) => book.title);
  }
  
  // Average Number of Pages
  function getAveragePages(books) {
    const totalPages = getTotalPages(books);
    return totalPages / books.length;
  }
  
  // Longest Book
  function getLongestBook(books) {
    const longestBook = books.reduce((longest, book) =>
      book.pages > longest.pages ? book : longest
    );
    return longestBook.title;
  }
  
  // Authors and Their Books
  function getAuthorsAndBooks(books) {
    const authorsAndBooks = {};
    books.forEach((book) => {
      if (!authorsAndBooks[book.author]) {
        authorsAndBooks[book.author] = [];
      }
      authorsAndBooks[book.author].push(book.title);
    });
    return authorsAndBooks;
  }
  
  // Total Number of Pages by Author
  function getTotalPagesByAuthor(books) {
    const totalPagesByAuthor = {};
    books.forEach((book) => {
      if (!totalPagesByAuthor[book.author]) {
        totalPagesByAuthor[book.author] = 0;
      }
      totalPagesByAuthor[book.author] += book.pages;
    });
    return totalPagesByAuthor;
  }
  
  // Advanced: Filter and Map - Shortest Book By Author
  function getShortestBookByAuthor(books) {
    const shortestBookByAuthor = {};
    books.forEach((book) => {
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
  
  // Testing the functions
  console.log("Total Pages:", getTotalPages(library));
  console.log("Book Titles:", getBookTitles(library));
  console.log("Books Published After 1950:", getBooksPublishedAfterYear(library, 1950));
  console.log("Average Pages:", getAveragePages(library));
  console.log("Longest Book:", getLongestBook(library));
  console.log("Authors and Their Books:", getAuthorsAndBooks(library));
  console.log("Total Pages by Author:", getTotalPagesByAuthor(library));
  console.log("Shortest Book By Author:", getShortestBookByAuthor(library));
  
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
  
  // Function to calculate and return the total number of pages in the library
  function getTotalPages(library) {
    return library.reduce((total, book) => total + book.pages, 0);
  }
  
  // Function to get an array containing only the titles of the books
  function getBookTitles(library) {
    return library.map((book) => book.title);
  }
  
  // Function to get an array of book titles published after a given year
  function getBooksPublishedAfterYear(library, year) {
    return library
      .filter((book) => book.year > year)
      .map((book) => book.title);
  }
  
  // Function to calculate and return the average number of pages
  function getAveragePages(library) {
    const totalPages = getTotalPages(library);
    return totalPages / library.length;
  }
  
  // Function to get the title of the book with the most pages
  function getLongestBook(library) {
    const longestBook = library.reduce((prev, current) =>
      prev.pages > current.pages ? prev : current
    );
    return longestBook.title;
  }
  
  // Function to get an object where keys are author names and values are arrays of book titles
  function getAuthorsAndBooks(library) {
    return library.reduce((result, book) => {
      if (!result[book.author]) {
        result[book.author] = [];
      }
      result[book.author].push(book.title);
      return result;
    }, {});
  }
  
  // Function to get an object where keys are author names and values are total pages written by each author
  function getTotalPagesByAuthor(library) {
    return library.reduce((result, book) => {
      if (!result[book.author]) {
        result[book.author] = 0;
      }
      result[book.author] += book.pages;
      return result;
    }, {});
  }
  
  // Function to get an object where keys are author names and values are titles of shortest books
  function getShortestBookByAuthor(library) {
    return library.reduce((result, book) => {
      if (!result[book.author] || result[book.author].pages > book.pages) {
        result[book.author] = book;
      }
      return result;
    }, {});
  }
  
  // Testing the functions
  console.log("Total Number of Pages:", getTotalPages(library));
  console.log("Book Titles:", getBookTitles(library));
  console.log("Books Published After 1900:", getBooksPublishedAfterYear(library, 1900));
  console.log("Average Number of Pages:", getAveragePages(library));
  console.log("Longest Book:", getLongestBook(library));
  console.log("Authors and Their Books:", getAuthorsAndBooks(library));
  console.log("Total Number of Pages by Author:", getTotalPagesByAuthor(library));
  console.log("Shortest Book by Author:", getShortestBookByAuthor(library));
  
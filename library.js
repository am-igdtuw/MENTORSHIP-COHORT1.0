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
  function getTotalPages() {
    const totalPages = library.reduce((total, book) => total + book.pages, 0);
    return totalPages;
  }
  function getBookTitles() {
    const titles = library.map((book) => book.title);
    return titles;
  }
  
  function getBooksPublishedAfterYear(year) {
    const booksPublishedAfterYear = library.filter((book) => book.year > year);
    const bookTitles = booksPublishedAfterYear.map((book) => book.title);
    return bookTitles;
  }
  
  function getAveragePages() {
    const totalPageCount = getTotalPages();
    const averagePages = totalPageCount / library.length;
    return averagePages;
  }

  function getLongestBook() {
    const longestBook = library.reduce((longest, book) =>
      book.pages > longest.pages ? book : longest
    );
    return longestBook.title;
  }
  
  function getAuthorsAndBooks() {
    const authorsAndBooks = library.reduce((result, book) => {
      if (!result[book.author]) {
        result[book.author] = [];
      }
      result[book.author].push(book.title);
      return result;
    }, {});
    return authorsAndBooks;
  }
  
  function getTotalPagesByAuthor() {
    const totalPagesByAuthor = library.reduce((result, book) => {
      if (!result[book.author]) {
        result[book.author] = 0;
      }
      result[book.author] += book.pages;
      return result;
    }, {});
    return totalPagesByAuthor;
  }
  
  function getShortestBookByAuthor() {
    const shortestBooksByAuthor = library.reduce((result, book) => {
      if (!result[book.author] || book.pages < result[book.author].pages) {
        result[book.author] = { title: book.title, pages: book.pages };
      }
      return result;
    }, {});
    return shortestBooksByAuthor;
  }
  
  console.log("Total Number of Pages:", getTotalPages());
  console.log("Book Titles:", getBookTitles());
  console.log("Books Published After 1950:", getBooksPublishedAfterYear(1950));
  console.log("Average Number of Pages:", getAveragePages());
  console.log("Longest Book:", getLongestBook());
  console.log("Authors and Their Books:", getAuthorsAndBooks());
  console.log("Total Pages by Author:", getTotalPagesByAuthor());
  console.log("Shortest Book by Author:", getShortestBookByAuthor());
  
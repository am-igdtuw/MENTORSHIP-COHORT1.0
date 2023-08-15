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
  const getTotalPages = () => {
    return library.reduce((total, book) => total + book.pages, 0);
  };
  
  // List of Book Titles
  const getBookTitles = () => {
    return library.map((book) => book.title);
  };
  
  // Books Published After a Given Year
  const getBooksPublishedAfterYear = (year) => {
    return library.filter((book) => book.year > year).map((book) => book.title);
  };
  
  // Average Number of Pages
  const getAveragePages = () => {
    const totalPages = getTotalPages();
    return totalPages / library.length;
  };
  
  // Longest Book
  const getLongestBook = () => {
    return library.reduce((longest, book) => (book.pages > longest.pages ? book : longest)).title;
  };
  
  // Authors and Their Books
  const getAuthorsAndBooks = () => {
    const authorsAndBooks = {};
    library.forEach((book) => {
      if (!authorsAndBooks[book.author]) {
        authorsAndBooks[book.author] = [];
      }
      authorsAndBooks[book.author].push(book.title);
    });
    return authorsAndBooks;
  };
  
  // Total Number of Pages by Author
  const getTotalPagesByAuthor = () => {
    const totalPagesByAuthor = {};
    library.forEach((book) => {
      if (!totalPagesByAuthor[book.author]) {
        totalPagesByAuthor[book.author] = 0;
      }
      totalPagesByAuthor[book.author] += book.pages;
    });
    return totalPagesByAuthor;
  };
  
  // Shortest Book by Author
  const getShortestBookByAuthor = () => {
    const shortestBookByAuthor = {};
    library.forEach((book) => {
      if (!shortestBookByAuthor[book.author] || book.pages < shortestBookByAuthor[book.author].pages) {
        shortestBookByAuthor[book.author] = book;
      }
    });
    return Object.fromEntries(Object.entries(shortestBookByAuthor).map(([author, book]) => [author, book.title]));
  };
  
  // Example usage
  console.log(getTotalPages());
  console.log(getBookTitles());
  console.log(getBooksPublishedAfterYear(1950));
  console.log(getAveragePages());
  console.log(getLongestBook());
  console.log(getAuthorsAndBooks());
  console.log(getTotalPagesByAuthor());
  console.log(getShortestBookByAuthor());
  
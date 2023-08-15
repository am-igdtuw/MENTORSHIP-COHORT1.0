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
  
  function getTotalPages(library) {
    const totalPages = library.reduce((total, book) => total + book.pages, 0);
    return totalPages;
  }

  function getBookTitles(library) {
    const titles = library.map(book => book.title);
    return titles;
  }

  function getBooksPublishedAfterYear(year) {
    const booksAfterYear = library.filter(book => book.year > year);
    const bookTitles = booksAfterYear.map(book => book.title);
    return bookTitles;
  }

  function getAveragePages(library) {
    const totalPages = library.reduce((total, book) => total + book.pages, 0);
    const averagePages = totalPages / library.length;
    return averagePages;
  }

  function getLongestBook(library) {
    const longestBook = library.reduce((longest, book) => {
      return book.pages > longest.pages ? book : longest;
    });
  
    return longestBook.title;
  }

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

// Now printing all the outputs on the console
  const totalNumberOfPages = getTotalPages(library);
  console.log("Total Number of Pages:", totalNumberOfPages);
  const bookTitles = getBookTitles(library);
  console.log("Book Titles:", bookTitles);
  const year = 1940; // Example year
  const booksPublishedAfterYear = getBooksPublishedAfterYear(year);
  console.log(`Books Published After ${year}:`, booksPublishedAfterYear);
  const averageNumberOfPages = getAveragePages(library);
  console.log("Average Number of Pages:", averageNumberOfPages);
  const longestBookTitle = getLongestBook(library);
  console.log("Longest Book:", longestBookTitle);
  const authorsAndBooks = getAuthorsAndBooks(library);
  console.log("Authors and Their Books:", authorsAndBooks);  
  const totalPagesByAuthor = getTotalPagesByAuthor(library);
  console.log("Total Pages by Author:", totalPagesByAuthor);
  const shortestBooksByAuthor = getShortestBookByAuthor(library);
  console.log("Shortest Book by Author:", shortestBooksByAuthor);
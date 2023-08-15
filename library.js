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
  
// reduce method to iterate over each book in the library array and accumulates the total number of pages. The initial value of the accumulator is set to 0, and for each book, the pages property is added to the accumulator.

  function getTotalPages(library) {
    const totalPages = library.reduce((total, book) => total + book.pages, 0);
    return totalPages;
  }

// map method to iterate over each book in the library array and extracts the title property for each book, creating a new array containing only the titles. 

  function getBookTitles(library) {
    const titles = library.map(book => book.title);
    return titles;
  }

// filter method is used to create a new array booksAfterYear containing books published after the given year. Then, the map method is used to extract the titles from the filtered array

  function getBooksPublishedAfterYear(year) {
    const booksAfterYear = library.filter(book => book.year > year);
    const bookTitles = booksAfterYear.map(book => book.title);
    return bookTitles;
  }

// getAveragePages function first calculates the total number of pages across all books using the reduce method. Then, it divides the total number of pages by the number of books in the library to calculate the average number of pages.

  function getAveragePages(library) {
    const totalPages = library.reduce((total, book) => total + book.pages, 0);
    const averagePages = totalPages / library.length;
    return averagePages;
  }

// getLongestBook function, the reduce method is used to iterate over the books in the library and compare their pages property to determine which book has the most pages

  function getLongestBook(library) {
    const longestBook = library.reduce((longest, book) => {
      return book.pages > longest.pages ? book : longest;
    });
  
    return longestBook.title;
  }

// The getAuthorsAndBooks function constructs a catalog where authors' names serve as keys and arrays of book titles act as values. It scans each book in the library, assigning its title to the corresponding author's array. The resulting catalog, which pairs authors with their books, is the function's output.

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

// In getShortestBookByAuthor, we create shortestBookByAuthor to match authors with their shortest books based on page count. Looping through each book, we update this match if needed. Finally, we generate result to capture authors and titles of their shortest books, returning it

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
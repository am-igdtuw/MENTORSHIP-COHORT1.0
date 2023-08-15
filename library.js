//ASSIGNMENT: 1 -[EXPLORING HIGHER-ORDER FUNCTIONS IN JAVASCRIPT]
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
  
  // (3)-Function to calculate the total number of pages in the library
  function getTotalPages(library) {
    const total = library.reduce((accumulator, book) => accumulator + book.pages, 0);
    return total;
  }
  const totalNumberOfPages = getTotalPages(library);
  console.log("Total Number of Pages:", totalNumberOfPages); 


  //(4)- Function to get an array containing only the titles of the books in the library
function getBookTitles(library) {
    const titles = library.map(book => book.title);
    return titles;
  }
  const bookTitles = getBookTitles(library);
  console.log("List of Book Titles:", bookTitles);


  //(5)-Function to get an array of book titles published after a given year
function getBooksPublishedAfterYear(library, year) {
    const booksAfterYear = library.filter(book => book.year > year).map(book => book.title);
    return booksAfterYear;
  }
  const year = 1950;
  const booksPublishedAfterYear = getBooksPublishedAfterYear(library, year);
  console.log(`Books Published After ${year}:`, booksPublishedAfterYear);
  

  //(6)- Function to calculate the average number of pages across all books in the library
function getAveragePages(library) {
    const total = library.reduce((accumulator, book) => accumulator + book.pages, 0);
    const average = total / library.length;
    
    return average;
  }
  const averageNumberOfPages = getAveragePages(library);
  console.log("Average Number of Pages:", averageNumberOfPages);


  //(7)-Function to get the title of the book with the most pages
function getLongestBook(library) {
    const longestBook = library.reduce((maxBook, book) => (book.pages > maxBook.pages ? book : maxBook));
    return longestBook.title;
  }
  const longestBookTitle = getLongestBook(library);
  console.log("Longest Book:", longestBookTitle);


  //(8)-Function to get an object where authors are keys and their books are values
function getAuthorsAndBooks(library) {
    const authorsAndBooks = library.reduce((accumulator, book) => {
      if (!accumulator[book.author]) {
        accumulator[book.author] = [];
      }
      accumulator[book.author].push(book.title);
      return accumulator;
    }, {});
    
    return authorsAndBooks;
  }
  const authorsAndBooksObj = getAuthorsAndBooks(library);
  console.log("Authors and Their Books:", authorsAndBooksObj);


  //(9)-Function to get an object where authors are keys and total pages of their books are values
function getTotalPagesByAuthor(library) {
    const totalPagesByAuthor = library.reduce((accumulator, book) => {
      if (!accumulator[book.author]) {
        accumulator[book.author] = 0;
      }
      accumulator[book.author] += book.pages;
      return accumulator;
    }, {});
    
    return totalPagesByAuthor;
  }
  const totalPagesByAuthorObj = getTotalPagesByAuthor(library);
  console.log("Total Number of Pages by Author:", totalPagesByAuthorObj);
  

  //(10)-Function to get an object where authors are keys and titles of their shortest books are values
function getShortestBookByAuthor(library) {
    const shortestBooks = {};
    library.forEach(book => {
      const author = book.author;
      const title = book.title;
      const currentShortestTitle = shortestBooks[author];
  
      if (!currentShortestTitle || book.pages < library.find(b => b.title === currentShortestTitle).pages) {
        shortestBooks[author] = title;
      }
    });
  
    return shortestBooks;
  }
  const shortestBookByAuthorObj = getShortestBookByAuthor(library);
  console.log("Shortest Book By Author:", shortestBookByAuthorObj);
  
  
  
  
  
  
  
  


  
 
  
  
  
  
  






  
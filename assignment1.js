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
} ]
// totalpages
const getTotalPages = (library) => {
  return library.reduce((totalPages, book) => totalPages + book.pages, 0);
};

const totalLibraryPages = getTotalPages(library);
console.log(`Total pages in the library: ${totalLibraryPages}`);

const bookTitles = library.map(book => book.title);

console.log("List of Book Titles:", bookTitles);
const getBooksPublishedAfterYear = (library, year) => {
  return library.filter(book => book.year > year);
};

//books after a particular year

const year = 1850;
const booksPublishedAfterYear = getBooksPublishedAfterYear(library, year);

console.log(`Books published after ${year}:`, booksPublishedAfterYear);

//average number of pages across all books
const getAveragePages = (library) => {
    const totalPages = library.reduce((sum, book) => sum + book.pages, 0);
    return totalPages / library.length;
  };
  
  const averagePages = getAveragePages(library);
  console.log(`Average number of pages: ${averagePages.toFixed(2)}`)

// Get the title of the book with the most pages
const getLongestBook = (library) => {
  return library.reduce((longestBook, book) => {
    return book.pages > longestBook.pages ? book : longestBook;
  }).title;
};
const getAuthorsAndBooks = (library) => {
    const authorsAndBooks = {};
    library.forEach(book => {
      if (!authorsAndBooks[book.author]) {
        authorsAndBooks[book.author] = [];
      }
      authorsAndBooks[book.author].push(book.title);
    });
    return authorsAndBooks;
  };
  
  const authorsAndBooks = getAuthorsAndBooks(library);
  console.log("Authors and their books:", authorsAndBooks);

//   total pages by an autor

  const getTotalPagesByAuthor = (library) => {
    const totalPagesByAuthor = {};
    library.forEach(book => {
      if (!totalPagesByAuthor[book.author]) {
        totalPagesByAuthor[book.author] = 0;
      }
      totalPagesByAuthor[book.author] += book.pages;
    });
    return totalPagesByAuthor;
  };
  
  const totalPagesByAuthor = getTotalPagesByAuthor(library);
  console.log("Total pages by author:", totalPagesByAuthor);
  
//   shortest book 

  const getShortestBookByAuthor = (library) => {
    const shortestBookByAuthor = {};
    library.forEach(book => {
      if (!shortestBookByAuthor[book.author] || book.pages < shortestBookByAuthor[book.author].pages) {
        shortestBookByAuthor[book.author] = book;
      }
    });
    return Object.fromEntries(Object.entries(shortestBookByAuthor).map(([author, book]) => [author, book.title]));
  };
  
  const shortestBookByAuthor = getShortestBookByAuthor(library);
  console.log("Shortest book by author:", shortestBookByAuthor);


const getbooktitles=(library)=>{
    const booktitles=library.map((book)=>book.title);
    return booktitles;
}
const booktitles=getTotalPages(library);
console.log("Book titles are "+booktitles);
 

// books published after a given year
const getBooksPublishedAfterYear = (library, year) => {
    const filteredBooks = library.filter((book) => book.year > year);
    return filteredBooks;
  };
  
  const yearToFilter = 1950;
  const booksPublishedAfterYear = getBooksPublishedAfterYear(library, yearToFilter);
  console.log("Books published after", yearToFilter, ":", booksPublishedAfterYear);
  
// Average number of pages
const getAveragePages=(library)=>{
    const totalPage=library.reduce((total,books=>total+books.pages,0));
    const averagepages=totalPage/library.length;
    return averagepages;
}
averagepages=getAveragePages(library);
console.log(" Average number of pages are"+averagepages);

// Longest books
const getLongestBookWithFilter = (library) => {
    // Find the maximum number of pages in the library
    const maxPages = library.reduce((max, book) => Math.max(max, book.pages), 0);
  
    // Filter the books that have the maximum number of pages
    const longestBooks = library.filter((book) => book.pages === maxPages);
  
    // Return an array of titles of the longest books
    const longestBookTitles = longestBooks.map((book) => book.title);
    return longestBookTitles;
  };
  
  const longestBooks = getLongestBookWithFilter(library);
  console.log("Longest book(s):", longestBooks);

  // Author and their books
   const getAuthorsAndBooks = (library) => {
    const authorsAndBooks = {};
    library.forEach((book) => {
        if (authorsAndBooks[book.author]) {
          authorsAndBooks[book.author].push(book.title);
        } else {
          authorsAndBooks[book.author] = [book.title];
        }
      });
    
      return authorsAndBooks;
    };
    
    const authorsAndBooks = getAuthorsAndBooks(library);
    console.log("Authors and their books:", authorsAndBooks);
    // Total Number of Pages by Author
    const getTotalPagesByAuthor = (library) => {
        // Initialize an empty object to store total pages by author
        const totalPagesByAuthor = {};
      
        // Iterate through each book in the library
        library.forEach((book) => {
          // Check if the author already has a total in the object
          if (totalPagesByAuthor[book.author]) {
            // If yes, add the pages of the current book to the existing total
            totalPagesByAuthor[book.author] += book.pages;
          } else {
            // If not, create a new key with the author's name and set the value to the pages of the current book
            totalPagesByAuthor[book.author] = book.pages;
          }
        });
      
        // Return the object containing total pages by author
        return totalPagesByAuthor;
      };
      
      // Example usage
      const totalPagesByAuthor = getTotalPagesByAuthor(library);
      console.log("Total pages by author:", totalPagesByAuthor);
      const getShortestBookByAuthor = (library) => {
        // Initialize an empty object to store shortest book titles by author
        const shortestBooksByAuthor = {};
      
        // Iterate through each book in the library
        library.forEach((book) => {
          // Check if the author already has a shortest book
          if (shortestBooksByAuthor[book.author]) {
            // Compare the current book's pages with the shortest book's pages
            if (book.pages < shortestBooksByAuthor[book.author].pages) {
              // If the current book is shorter, update the shortest book for that author
              shortestBooksByAuthor[book.author] = book;
            }
          } else {
            // If author doesn't have a shortest book yet, set the current book as the shortest
            shortestBooksByAuthor[book.author] = book;
          }
        });
      
        // Create an object to store author names and their shortest book titles
        const shortestBookTitlesByAuthor = {};
      
        // Convert the shortest books by author into an object with only titles
        for (const author in shortestBooksByAuthor) {
          shortestBookTitlesByAuthor[author] = shortestBooksByAuthor[author].title;
        }
      
        // Return the object containing shortest book titles by author
        return shortestBookTitlesByAuthor;
      };
      const shortestBooksByAuthor = getShortestBookByAuthor(library);
      console.log("Shortest book by author:", shortestBooksByAuthor);
      
      
      
      
    
    
    
  
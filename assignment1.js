const lib = [
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
  
  // Write a function getTotalPages that calculates and returns the total number of pages in the library.

  const getTotPage=(lib)=> {
    const ans =  lib.reduce((tot, book) => tot + book.pages, 0);
    return ans;
  }
  console.log(getTotPage(lib));
  // Write a function getBookTitles that returns an array containing only the titles of the books in the library.
  const getBookTitles=(lib)=>{
    return lib.map((book) => book.title);
  }
  console.log(getBookTitles(lib));
  
  // Write a function getBooksPublishedAfterYear(year) that takes a year as a parameter and returns an array containing the titles of books published after that year.

  const getBooksPublishedAfterYear=(lib, year)=> {
    const k= lib.filter((book)=>book.year>year);
    return k.map((book)=>book.title);
  }
  console.log(getBooksPubAfterYear(lib,1800));
  
  // Write a function getAveragePages that calculates and returns the average number of pages across all books in the library.
  const getAvgPages=(lib)=> {
    return getTotPage(lib)/4;
  }
  console.log(getAvgPages(lib));
  
  //  Write a function getLongestBook that returns the title of the book with the most pages.
  const getLongestBook=(lib)=> {
    const longestBook = lib.reduce((maxBook, book) =>
      book.pages > maxBook.pages ? book : maxBook
    );
    return longestBook.title;
  }
  console.log(getLongestBook(lib));
  //Write a function getAuthorsAndBooks that returns an object where the keys are author names and the values are arrays of book titles written by each author.

  const getAuthorsAndBooks=(lib) =>{
    return lib.reduce((authorsBooks, book) => {
      if (!authorsBooks[book.author]) {
        authorsBooks[book.author] = [];
      }
      authorsBooks[book.author].push(book.title);
      return authorsBooks;
    }, {});
  }
  console.log(getAuthorsAndBooks(lib));
  // Write a function getTotalPagesByAuthor that returns an object where the keys are author names and the values are the total number of pages of books written by each author.

  const getTotPagesByAuthor=(lib) =>{
    return lib.reduce((totPagesByAuthor, book) => {
      if (!totPagesByAuthor[book.author]) {
        totPagesByAuthor[book.author] = 0;
      }
      totPagesByAuthor[book.author] += book.pages;
      return totPagesByAuthor;
    }, {});
  }
  console.log(getTotPagesByAuthor(lib));
  
  //Write a function getShortestBookByAuthor that returns an object where the keys are author names and the values are the titles of the shortest book written by each author.
  const getShortestBookByAuthor=(lib)=> {
    return lib.reduce((shortestBooksByAuthor, book) => {
      if (!shortestBooksByAuthor[book.author]) {
        shortestBooksByAuthor[book.author] = book.title;
      } else if (book.pages < lib.find((b) => b.title === shortestBooksByAuthor[book.author]).pages) {
        shortestBooksByAuthor[book.author] = book.title;
      }
      return shortestBooksByAuthor;
    }, {});
    
  }
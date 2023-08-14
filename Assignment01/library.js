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



// 1. Total Number of Pages in the library
function getTotalPages() {
    let total = 0;
    for (let i = 0; i < library.length; i++) {
        total += library[i].pages;
    }
    return total;
}


// 2. Titles of the books in the library
function getBookTitles(){
    return library.map(book => book.title);
}


// 3. Titles of the books in the library published after a specific year
function getBooksPublishedAfterYear(year) {
    return library.filter(book => book.year > year).map(book => book.title);
}


// 4. Average number of pages in books available in the library 
function getAveragePages() {
    const total = getTotalPages();
    return total / library.length;
}


// 5. Title of the longest book available in the libraray
function getLongestBook() {
    let longestBook = library[0];
    for (let i = 1; i < library.length; i++) {
        longestBook = library[i].pages > longestBook.pages ? library[i] : longestBook;
    }
    return longestBook.title;
}


// 6. Object where keys are author names and values are the array of book titles written by that author
function getAuthorsAndBooks() {
    const authorsandBooks = {};
    for (let i = 0; i < library.length; i++) {
        const author = library[i].author;
        if (authorsandBooks[author] === undefined) {
            authorsandBooks[author] = [];
        }
        authorsandBooks[author].push(library[i].title);
    }
    return authorsandBooks;
}


// 7. Object where keys are author names and values are the total number of pages written by that author
function getTotalPagesByAuthor() {
    const totalPagesByAuthor = {};
    for (let i = 0; i < library.length; i++) {
        const author = library[i].author;
        if (totalPagesByAuthor[author] === undefined) {
            totalPagesByAuthor[author] = 0;
        }
        totalPagesByAuthor[author] += library[i].pages;
    }
    return totalPagesByAuthor;
}


// 8. Object where keys are author names and values are the title of the shortest book written by that author
function getShortestBookByAuthor(){
    const shortestBookByAuthor = {};
    library.forEach((book) => {
      if (!shortestBookByAuthor[book.author] || book.pages < shortestBookByAuthor[book.author].pages) {
        shortestBookByAuthor[book.author] = book;
      }
    });
    return Object.fromEntries(
      Object.entries(shortestBookByAuthor).map(([author, book]) => [author, book.title])
    ); 
}


module.exports = {
  getTotalPages,
  getBookTitles,
  getBooksPublishedAfterYear,
  getAveragePages,
  getLongestBook,
  getAuthorsAndBooks,
  getTotalPagesByAuthor,
  getShortestBookByAuthor,
};
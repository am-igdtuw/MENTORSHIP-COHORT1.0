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
    title: "Prideand Prejudice", 
    author: "Jane Austen", 
    year: 1813,
    pages: 432 
  }
];

// Total Number of Pages-> This function uses the "reduce" higher-order function 
// It starts with an initial value of 0 and iterates through each book in the library array, adding the pages property of each book to the accumulator.
const getTotalPages = () => library.reduce((total, book) => total + book.pages, 0);
console.log("Total Number of Pages:", getTotalPages());

// List of Book Titles -> For each book in the library array, the "map" function extracts the title property and adds it to the new array.
const getBookTitles = () => library.map(book => book.title);
console.log("List of Book Titles:", getBookTitles());

// Books Published After a Given Year -> This function takes a year parameter and filters the library array using the filter higher-order function.
//The "filter" function checks if the year property of each book is greater than the input year, and only includes those books in the result.
const getBooksPublishedAfterYear = year => library.filter(book => book.year > year).map(book => book.title);
console.log("Books Published After 1950:", getBooksPublishedAfterYear(1950));

// Average Number of Pages -> This function divides the total number of pages (calculated using getTotalPages()) by the number of books in the library.
const getAveragePages = () => getTotalPages() / library.length;
console.log("Average Number of Pages:", getAveragePages());

// Longest Book -> It iterates through each book in the library array, comparing the pages property of each book to the current longest book.
const getLongestBook = () => library.reduce((longestBook, book) => book.pages > longestBook.pages ? book : longestBook);
console.log("Longest Book:", getLongestBook().title);

// Authors and Their Books -> It iterates through each book in the library array and adds the book title to the corresponding author's array in the authorsAndBooks object.
const getAuthorsAndBooks = () => {
  const authorsAndBooks = {};
  library.forEach(book => {
    if (!authorsAndBooks[book.author]) {
      authorsAndBooks[book.author] = [];
    }
    authorsAndBooks[book.author].push(book.title);
  });
  return authorsAndBooks;
};
console.log("Authors and Their Books:", getAuthorsAndBooks());

// Total Number of Pages by Author -> It iterates through each book in the library array and adds the book's pages to the corresponding author's total pages in the totalPagesByAuthor object.
const getTotalPagesByAuthor = () => {
  const totalPagesByAuthor = {};
  library.forEach(book => {
    if (!totalPagesByAuthor[book.author]) {
      totalPagesByAuthor[book.author] = 0;
    }
    totalPagesByAuthor[book.author] += book.pages;
  });
  return totalPagesByAuthor;
};
console.log("Total Number of Pages by Author:", getTotalPagesByAuthor());

// Shortest Book by Author -> It iterates through each book in the library array and checks if the current book has fewer pages than the current shortest book for that author.
const getShortestBookByAuthor = () => {
  const shortestBookByAuthor = {};
  library.forEach(book => {
    if (!shortestBookByAuthor[book.author] || book.pages < shortestBookByAuthor[book.author].pages) {
      shortestBookByAuthor[book.author] = book;
    }
  });
  return shortestBookByAuthor;
};
console.log("Shortest Book by Author:", getShortestBookByAuthor());
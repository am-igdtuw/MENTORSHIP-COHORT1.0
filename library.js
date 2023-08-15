// const library = [
//   {
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     year: 1925,
//     pages: 180,
//   },
//   {
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     year: 1960,
//     pages: 281,
//   },
//   {
//     title: "1984",
//     author: "George Orwell",
//     year: 1949,
//     pages: 328,
//   },
//   {
//     title: "Pride and Prejudice",
//     author: "Jane Austen",
//     year: 1813,
//     pages: 432,
//   },
// ];

// 1.Total number of pages

//The reduce function is used to accumulate a value by iterating through each element of the array.
//For each book in the library array, the callback function adds the value of the pages property of the book to the current accumulated total. This way, it keeps accumulating the total number of pages across all books.
// The result of each iteration is used as the total value for the next iteration.
// After iterating through all the books in the library, the reduce function returns the final accumulated value, which represents the total number of pages in the library.

// const getTotalPages = () => {
//   return library.reduce((total, book) => total + book.pages, 0);
// };

// 2. List of book titles
// The map function is used to iterate through each book in the library array and create a new array containing only the titles of the books.
// The title property of each book is extracted and added to the new array.
// The resulting array contains only the titles of the books in the library.
// const getBookTitles = () => {
//   return library.map((book) => book.title);
// };

// 3.Books published after a year
// The filter function is used to iterate through each book in the library array and filter out books that were published after the given year.
// The map function is then used to create a new array containing only the titles of the books published after the specified year
// const getBooksPublishedAfterYear = (library, year) => {
//   return library
//     .filter((book) => book.year > year)
//     .map((book) => book.title);
// };


// 4. average number of pages 
//simply calling the function and getinng total pages by calling getTotalPages and then dividing it by library.length
// const getAveragePages = () => {
//   const totalPages = getTotalPages();
//   return totalPages / library.length;
// };

// 5. Longest Books
//For each book in the library array, the callback function compares the pages property of the current book with the pages property of the longestBook.
// If the pages of the current book are greater than the pages of the longestBook, the callback function returns the current book; otherwise, it returns the longestBook.
// After iterating through all the books, the reduce function returns the book object with the most pages.
// The .title at the end of the function extracts the title property of the book object with the most pages, which is the title of the longest book.

// const getLongestBook = (library) => {
//   const longestBook = library.reduce((currentLongest, book) =>
//     book.pages > currentLongest.pages ? book : currentLongest
//   );
//   return longestBook.title;
// };


// 6.Authors and Their Books
// For each book, it checks if the author's name (book.author) already exists as a key in the authorsAndBooks object.
// If the author's name doesn't exist as a key, a new entry is created in the authorsAndBooks object with the author's name as the key and an empty array as the initial value.
// The title of the current book (book.title) is then pushed into the array associated with the author's name in the authorsAndBooks object.

// After iterating through all the books, the function returns the authorsAndBooks object, which now contains author names as keys and arrays of book titles as values.
// const getAuthorsAndBooks = () => {
//   const authorsAndBooks = {};
//   library.forEach((book) => {
//     if (!authorsAndBooks[book.author]) {
//       authorsAndBooks[book.author] = [];
//     }
//     authorsAndBooks[book.author].push(book.title);
//   });
//   return authorsAndBooks;
// };

// 7.Total Number of Pages by Author
// For each book, it checks if the author's name (book.author) already exists as a key in the totalPagesByAuthor object.
// If the author's name doesn't exist as a key, a new entry is created in the totalPagesByAuthor object with the author's name as the key and an initial value of 0.
// The pages property of the current book (book.pages) is then added to the total number of pages associated with the author in the totalPagesByAuthor object.
// After iterating through all the books, the function returns the totalPagesByAuthor object, which now contains author names as keys and the total number of pages as values.


// const getTotalPagesByAuthor = () => {
//   const totalPagesByAuthor = {};
//   library.forEach((book) => {
//     if (!totalPagesByAuthor[book.author]) {
//       totalPagesByAuthor[book.author] = 0;
//     }
//     totalPagesByAuthor[book.author] += book.pages;
//   });
//   return totalPagesByAuthor;
// };

// 8.Advanced: Filter and Map
// const getShortestBookByAuthor = () => {
//   const shortestBookByAuthor = {};
//   library.forEach((book) => {
//     if (!shortestBookByAuthor[book.author]) {
//       shortestBookByAuthor[book.author] = book.title;
//     } else if (book.pages < library.find((b) => b.title === shortestBookByAuthor[book.author]).pages) {
//       shortestBookByAuthor[book.author] = book.title;
//     }
//   });
//   return shortestBookByAuthor;
// };

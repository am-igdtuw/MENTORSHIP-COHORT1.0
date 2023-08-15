// Firstly creating database
const library=[
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
]

//question 3
//Total pages
function getTotalPages(library)
{
  const totalPages = library.reduce((total, book) => total + book.pages, 0);
  return totalPages;
}
console.log("total number of pages: ", getTotalPages(library));
// Explanation : I have used reduce function to count total number of pages
// it takes two parameters total, book is given, the loop has run with
// total being zero and book is the object being iterated one by one


//question 4
function getBookTitles(library)
{
  const bookTitles = library.map((book) => book.title);
  return bookTitles;
}
console.log("list of book titles: ", getBookTitles(library));

//map function is used to iterate over each object and get list of titles in the form of an array

//question 5
function getBooksPublishedAfterYear(library, year)
{
  const booksAfterYear = library.filter((book) => book.year > year);
  const bookTitles = booksAfterYear.map((book) => book.title);
  return bookTitles;
}
const year = 1950;
const booksPublishedAfterYear = getBooksPublishedAfterYear(library, year);
console.log('books published after 1950 : ', booksPublishedAfterYear);


//question 6
//for avg no. of pages
function getAveragePages(library)
{
  const totalPageCount = getTotalPages(library);
  const averagePages = totalPageCount / library.length;   //library.length will give the number of total entries
  return averagePages;
}
console.log("average no. of pages: ", getAveragePages(library));

//question 7
function getLongestBook(library)
{
  const longestBook = library.reduce((longest, book) => book.pages > longest.pages?book:longest);
  //used conditional operator
  return longestBook.title;
}
console.log("Longest Book:", getLongestBook(library));

//question 8
function getAuthorsAndBooks(library) 
{
  const authorsAndBooks = {};

  for (const book of library) 
  {
    if (!authorsAndBooks[book.author]) {
      authorsAndBooks[book.author] = [];
    }
    authorsAndBooks[book.author].push(book.title);
  }

  return authorsAndBooks;
}

const authorsAndBooks = getAuthorsAndBooks(library);
console.log("Authors and Their Books:", authorsAndBooks);

//question 9
//Total Number of Pages by Author
function getTotalPagesByAuthor(library) 
{
  const totalPagesByAuthor = {};

  for (const book of library) 
  {
    if (!totalPagesByAuthor[book.author]) 
    {
      totalPagesByAuthor[book.author] = 0;
    }
    totalPagesByAuthor[book.author] += book.pages;
  }

  return totalPagesByAuthor;
}

const totalPagesByAuthor = getTotalPagesByAuthor(library);
console.log("Total Number of Pages by Author:", totalPagesByAuthor);

//question 10
//shortest book by author
function getShortestBookByAuthor(library) 
{
  const shortestBookByAuthor = {};

  for (const book of library) 
  {
    if (!shortestBookByAuthor[book.author] || book.pages < shortestBookByAuthor[book.author].pages) 
    {
      shortestBookByAuthor[book.author] = book;
    }
  }

  const shortestBookTitlesByAuthor = {};
  for (const author in shortestBookByAuthor) 
  {
    shortestBookTitlesByAuthor[author] = shortestBookByAuthor[author].title;
  }

  return shortestBookTitlesByAuthor;
}

const shortestBookByAuthor = getShortestBookByAuthor(library);
console.log("Shortest Book by Author:", shortestBookByAuthor);






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
// 3)Total number of pages
const getTotalPages = library =>
    library.reduce((total, { pages }) => total += pages, 0);    
console.log("3. Total number of Pages = ", getTotalPages(library));

// 4) List of Book titles
const getBookTitles = library =>
    library.map(({ title }) => title);
console.log("4. List of Books are:\n", getBookTitles(library));

// 5) Books published after a given year
const getBooksPublishedAfterYear = (library, year) => 
library.filter(({ year: bookYear }) =>  
bookYear > year).map(({ title }) => title); 
console.log("5. Books published after 1900(for instance) are: \n", getBooksPublishedAfterYear(library, 1900));

// 6) Average number of pages
const getAveragePages = library => getTotalPages(library) / library.length;
console.log("6. Average number of Pages = ", getAveragePages(library));

// 7) Longest book
const getLongestBook = library =>
    library.reduce((prevBook, currBook) =>
    (currBook.pages > prevBook.pages) ? currBook : prevBook).title;
console.log("7. Longest Book is ", getLongestBook(library));

// 8) Authors and their books
const getAuthorsAndBooks = library =>
  library.reduce((result, { author, title }) => {
    result[author] = result[author] || [];
    result[author].push(title);
    return result;
  }, {});
console.log("8. Authors and Books are:\n", getAuthorsAndBooks(library));

// 9) Total Number of Pages by author
const getTotalPagesByAuthor = library =>
library.reduce((result,{author, pages}) =>{
     result[author] = result[author]||[];
     result[author].push(pages);
     return result;
}, {});
console.log("9. Total number of Pages by each author are:\n", getTotalPagesByAuthor(library));

// 10) Get shortest book by author
function getShortestBookByAuthor(library) {
    const shortestBooks = library.reduce((result, book) => {
        if (!result[book.author] || book.pages < result[book.author].pages) {
            result[book.author] = book;
        }
        return result;
    }, {});
    const shortestBookTitles = {};
    for (const author in shortestBooks) {
        shortestBookTitles[author] = shortestBooks[author].title;
    }
    return shortestBookTitles;
}
console.log("10. The shortest books by authors are:\n", getShortestBookByAuthor(library));

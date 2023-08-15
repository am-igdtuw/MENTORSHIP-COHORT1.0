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
    }
];

// Calculate and return the total number of pages in the library
function getTotalPages() {
    const totalPages = library.reduce((total, book) => total + book.pages, 0);
    return totalPages;
}

// Return an array containing only the titles of the books in the library
function getBookTitles() {
    const bookTitles = library.map(book => book.title);
    return bookTitles;
}

// Return an array containing the titles of books published after the given year
function getBooksPublishedAfterYear(year) {
    const booksAfterYear = library.filter(book => book.year > year).map(book => book.title);
    return booksAfterYear;
}

// Calculate and return the average number of pages across all books in the library
function getAveragePages() {
    const totalBooks = library.length;
    const totalPages = getTotalPages();
    const averagePages = totalPages / totalBooks;
    return averagePages;
}

// Return the title of the book with the most pages
function getLongestBook() {
    const longestBook = library.reduce((maxBook, book) => (book.pages > maxBook.pages ? book : maxBook));
    return longestBook.title;
}

// Return an object with author names as keys and arrays of book titles as values
function getAuthorsAndBooks() {
    const authorsAndBooks = library.reduce((result, book) => {
        if (!result[book.author]) {
            result[book.author] = [];
        }
        result[book.author].push(book.title);
        return result;
    }, {});
    return authorsAndBooks;
}

// Return an object with author names as keys and total number of pages as values
function getTotalPagesByAuthor() {
    const totalPagesByAuthor = library.reduce((result, book) => {
        if (!result[book.author]) {
            result[book.author] = 0;
        }
        result[book.author] += book.pages;
        return result;
    }, {});
    return totalPagesByAuthor;
}

// Return an object with author names as keys and titles of the shortest book as values
function getShortestBookByAuthor() {
    const shortestBookByAuthor = library.reduce((result, book) => {
        if (!result[book.author] || book.pages < library.find(b => b.title === result[book.author]).pages) {
            result[book.author] = book.title;
        }
        return result;
    }, {});
    return shortestBookByAuthor;
}

// Example usage:
console.log("Total Pages:", getTotalPages());
console.log("Book Titles:", getBookTitles());
console.log("Books Published After 1950:", getBooksPublishedAfterYear(1950));
console.log("Average Pages:", getAveragePages());
console.log("Longest Book:", getLongestBook());
console.log("Authors and Their Books:", getAuthorsAndBooks());
console.log("Total Pages by Author:", getTotalPagesByAuthor());
console.log("Shortest Book by Author:", getShortestBookByAuthor());

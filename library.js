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

// Total Number of Pages
function getTotalPages(library) {
    const totalPages = library.reduce((total, book) => total + book.pages, 0);
    return totalPages;
}

// List of Book Titles
function getBookTitles(library) {
    return library.map(book => book.title);
}

// Books Published After a Given Year
function getBooksPublishedAfterYear(library, year) {
    return library.filter(book => book.year > year).map(book => book.title);
}

// Average Number of Pages
function getAveragePages(library) {
    const totalPages = getTotalPages(library);
    const averagePages = totalPages / library.length;
    return averagePages;
}

// Longest Book
function getLongestBook(library) {
    const longestBook = library.reduce((longest, book) => {
        return book.pages > longest.pages ? book : longest;
    });
    return longestBook.title;
}

// Authors and Their Books
function getAuthorsAndBooks(library) {
    const authorsAndBooks = {};
    library.forEach(book => {
        if (!authorsAndBooks[book.author]) {
            authorsAndBooks[book.author] = [];
        }
        authorsAndBooks[book.author].push(book.title);
    });
    return authorsAndBooks;
}

// Total Number of Pages by Author
function getTotalPagesByAuthor(library) {
    const totalPagesByAuthor = {};
    library.forEach(book => {
        if (!totalPagesByAuthor[book.author]) {
            totalPagesByAuthor[book.author] = 0;
        }
        totalPagesByAuthor[book.author] += book.pages;
    });
    return totalPagesByAuthor;
}

// Shortest Book By Author
function getShortestBookByAuthor(library) {
    const shortestBookByAuthor = {};
    library.forEach(book => {
        if (!shortestBookByAuthor[book.author] || book.pages < shortestBookByAuthor[book.author].pages) {
            shortestBookByAuthor[book.author] = book;
        }
    });
    const result = {};
    for (const author in shortestBookByAuthor) {
        result[author] = shortestBookByAuthor[author].title;
    }
    return result;
}

// Test the functions
console.log("Total Number of Pages:", getTotalPages(library));
console.log("List of Book Titles:", getBookTitles(library));
console.log("Books Published After 1950:", getBooksPublishedAfterYear(library, 1950));
console.log("Average Number of Pages:", getAveragePages(library));
console.log("Longest Book:", getLongestBook(library));
console.log("Authors and Their Books:", getAuthorsAndBooks(library));
console.log("Total Number of Pages by Author:", getTotalPagesByAuthor(library));
console.log("Shortest Book By Author:", getShortestBookByAuthor(library));

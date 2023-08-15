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

// Task 1: Total Number of Pages
const getTotalPages = () => {
    return library.reduce((totalPages, book) => totalPages + book.pages, 0);
};

// Task 2: List of Book Titles
const getBookTitles = () => {
    return library.map(book => book.title);
};

// Task 3: Books Published After a Given Year
const getBooksPublishedAfterYear = (year) => {
    return library.filter(book => book.year > year).map(book => book.title);
};

// Task 4: Average Number of Pages
const getAveragePages = () => {
    const totalPages = getTotalPages();
    return totalPages / library.length;
};

// Task 5: Longest Book
const getLongestBook = () => {
    const longestBook = library.reduce((longest, book) => book.pages > longest.pages ? book : longest);
    return longestBook.title;
};

// Task 6: Authors and Their Books
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

// Task 7: Total Number of Pages by Author
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

// Task 8: Filter and Map - The Shortest Book By Author
const getShortestBookByAuthor = () => {
    const shortestBookByAuthor = {};
    library.forEach(book => {
        if (!shortestBookByAuthor[book.author] || book.pages < library.find(b => b.title === shortestBookByAuthor[book.author]).pages) {
            shortestBookByAuthor[book.author] = book.title;
        }
    });
    return shortestBookByAuthor;
};

// Testing the functions
console.log("Total Number of Pages:", getTotalPages());
console.log("List of Book Titles:", getBookTitles());
console.log("Books Published After 1950:", getBooksPublishedAfterYear(1950));
console.log("Average Number of Pages:", getAveragePages());
console.log("Longest Book:", getLongestBook());
console.log("Authors and Their Books:", getAuthorsAndBooks());
console.log("Total Number of Pages by Author:", getTotalPagesByAuthor());
console.log("Shortest Book By Author:", getShortestBookByAuthor());

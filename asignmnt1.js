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
/* Question 1. Total No of Pages.
The reduce function used here , will iterate through the library array and gives total no. of pages.
It initialize the accumulator i.e. sum with 0 , and adds the pages property to it. an dfinally return 
total pages.
*/

const getTotalPages = (library) => {
    const totalPages = library.reduce((sum, book) => sum + book.pages, 0); 
    return totalPages;
};

const totalNumberOfPages = getTotalPages(library);
console.log("Total Number of Pages:", totalNumberOfPages);

/* Quesion 2. List of Book Titles.
The getBookTitles function uses the map function to create new array of book titles only.
it applies book function to each book object to extract the title.
*/
const getBookTitles = (library) => {
    const bookTitles = library.map(book => book.title);
    return bookTitles;
};

const bookTitles = getBookTitles(library);
console.log("List of Book Titles:", bookTitles);
/* Question 3. 
filtr function is used to filter out the books published after the given year.
then map function extract the title of the book filtered. an dreturns an array of books .
*/
const getBooksPublishedAfterYear = (year) => {
    const booksPublishedAfterYear = library
        .filter(book => book.year > year)
        .map(book => book.title);
    return booksPublishedAfterYear;
};

const yearToCompare = 1950;
const booksPublishedAfterYear = getBooksPublishedAfterYear(yearToCompare);
console.log(`Books Published After ${yearToCompare}:`, booksPublishedAfterYear);

// Question 4. Average number of pages.

const getAveragePages = (library) => {
    const totalPages = library.reduce((sum, book) => sum + book.pages, 0);
    const averagePages = totalPages / library.length;
    return averagePages;
};

const averageNumberOfPages = getAveragePages(library);
console.log("Average Number of Pages:", averageNumberOfPages);

// Question 5. Get longet Book.

const getLongestBook = (library) => {
    const longestBook = library.reduce((maxBook, book) => (book.pages > maxBook.pages) ? book : maxBook);
    return longestBook.title;
};

const longestBookTitle = getLongestBook(library);
console.log("Longest Book:", longestBookTitle);

//Question 6. Author and their books.

const getAuthorsAndBooks = (library) => {
    const authorsAndBooks = {};

    library.forEach(book => {
        if (authorsAndBooks.hasOwnProperty(book.author)) {
            authorsAndBooks[book.author].push(book.title);
        } else {
            authorsAndBooks[book.author] = [book.title];
        }
    });

    return authorsAndBooks;
};

const authorsAndBooks = getAuthorsAndBooks(library);
console.log("Authors and Their Books:", authorsAndBooks);

// Question 7. Total number of pages by author.

const getTotalPagesByAuthor = (library) => {
    const totalPagesByAuthor = {};

    library.forEach(book => {
        if (totalPagesByAuthor.hasOwnProperty(book.author)) {
            totalPagesByAuthor[book.author] += book.pages;
        } else {
            totalPagesByAuthor[book.author] = book.pages;
        }
    });

    return totalPagesByAuthor;
};

const totalPagesByAuthor = getTotalPagesByAuthor(library);
console.log("Total Pages by Author:", totalPagesByAuthor);
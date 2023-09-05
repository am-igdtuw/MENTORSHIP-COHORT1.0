//make library array where each object represent a book
const library = [
    {title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, pages: 180 },
    {title: "hello", author: "F. Scott Fitzgerald", year: 1925, pages: 200 },
 	{title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, pages: 281},
 	{title: "1984", author: "George Orwell", year: 1949, pages: 328 },
  	{title: "Pride and Prejudice", author: "Jane Austen", year: 1813, pages: 432 } ]
console.log(library)

//Q1. Total Number of Pages
function getTotalPages(){
    return library.map(book=>book.pages).reduce((total,curr)=>total+curr,0)
}
console.log("Total Number of Pages ", getTotalPages())


//Q2. List of Book Titles:
function getBookTitles() {
    return library.map(book=>book.title)
}
console.log("Book Titles: ", getBookTitles())


//Q3. Books Published After a Given Year
function getBooksPublishedAfterYear(y) {
  return library.filter(book=> book.year > y).map(book => book.title)
}
console.log("Books Published After a Given 1920", getBooksPublishedAfterYear(1920))


//Q4. Average Number of Page
function getAveragePages(){
        return getTotalPages()/library.length
}
console.log("Average Number of Page ", getAveragePages())


//Q5.Longest Book
function getLongestBook() {
  const book= library.reduce((max, curr) => max>curr?max:curr)
  return book.title
}
console.log("Longest book", getLongestBook())


//Q6. Authors and Their Books
function getAuthorsAndBooks(){
    return library.reduce((authorsBook, book) => {
        if (!authorsBook[book.author]) {
          authorsBook[book.author] = []
        }
        authorsBook[book.author].push(book.title)
        return authorsBook
      }, {})
}
console.log("Authors and Their Books",getAuthorsAndBooks())


//Q7. Total Number of Pages by Author
function getTotalPagesByAuthor(){
    return library.reduce((totalPagesByAuthor, book) => {
        if (!totalPagesByAuthor[book.author]) {
          totalPagesByAuthor[book.author] = 0
        }
        totalPagesByAuthor[book.author] += book.pages
        return totalPagesByAuthor
      }, {})
}
console.log("Total Number of Pages by Author",getTotalPagesByAuthor())


//Q8.Advanced Filter and Map:
function  getShortestBookByAuthor(){   
    return library.reduce((shortestBooksByAuthor, book) => {
        if (!shortestBooksByAuthor[book.author]) {
          shortestBooksByAuthor[book.author] = book.title
        } else if (book.pages < library.find((b) => b.title === shortestBooksByAuthor[book.author]).pages) {
          shortestBooksByAuthor[book.author] = book.title
        }
        return shortestBooksByAuthor
      }, {})
}
console.log("Shortest book by authors",getShortestBookByAuthor())



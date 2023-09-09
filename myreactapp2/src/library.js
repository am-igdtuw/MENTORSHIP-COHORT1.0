const library = [
  	{ title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925,pages: 180 },
 	 {title: "To Kill a Mockingbird",author: "Harper Lee", year: 1960, pages: 281},
 	 {title: "1984", author: "George Orwell", year: 1949, pages: 328 },
  	{title: "Pride and Prejudice", author: "Jane Austen", year: 1813,pages: 432 } ]

const getTotalPages  = library.reduce((totalPages, book) => totalPages + book.pages, 0);
console.log("Total number of pages in the library:",getTotalPages);    


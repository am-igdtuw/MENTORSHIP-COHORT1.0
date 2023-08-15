import React from 'react';
import './App.css';

import {
  getTotalPages,
  getBookTitles,
  getBooksPublishedAfterYear,
  getAveragePages,
  getLongestBook,
  getAuthorsAndBooks,
  getTotalPagesByAuthor,
  getShortestBookByAuthor,
 }from './library';

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
  },
];

function App() {
  const totalPages = getTotalPages(library);
  const bookTitles = getBookTitles(library);
  const booksPublishedAfterYear = getBooksPublishedAfterYear(library, 1950);
  const averagePages = getAveragePages(library);
  const longestBook = getLongestBook(library);
  const authorsAndBooks = getAuthorsAndBooks(library);
  const totalPagesByAuthor = getTotalPagesByAuthor(library);
  const shortestBookByAuthor = getShortestBookByAuthor(library);


   return (
     <div className = "App">

      <h1>Library Information</h1>
      <div className="dividing-line"></div>

       <h2>Total Number of Pages in the Library: </h2>
       <p>{totalPages}</p>
       <div className="dividing-line"></div>

       <h2>List of Book Titles: </h2>
       <p>{bookTitles.join('; ')}</p>
       <div className="dividing-line"></div>

       <h2>Books Published After 1950: </h2>
       <p>{booksPublishedAfterYear.join(', ')}</p>
       <div className="dividing-line"></div>

       <h2>Average Number of Pages: </h2>
       <p>{averagePages.toFixed(2)}</p>
       <div className="dividing-line"></div>

       <h2>Longest Book: </h2>
       <p>{longestBook}</p>
       <div className="dividing-line"></div>

       <h2>Authors and Their Books:</h2>
       <ul>
         {Object.entries(authorsAndBooks).map(([author, books]) => (
          <li key={author}>
            {author}: {books.join(', ')}
          </li>
        ))}
      </ul>
      <div className="dividing-line"></div>

      <h2>Total Number of Pages by Author:</h2>
      <ul>
        {Object.entries(totalPagesByAuthor).map(([author, pages]) => (
          <li key={author}>
            {author}: {pages} pages
          </li>
        ))}
      </ul>
      <div className="dividing-line"></div>

      <h2>Shortest Book by Author:</h2>
      <ul>
        {Object.entries(shortestBookByAuthor).map(([author, book]) => (
          <li key={author}>
            {author}: {book}
          </li>
        ))}
      </ul>
      <div className="dividing-line"></div>

     </div>
   );
 }


 export default App;

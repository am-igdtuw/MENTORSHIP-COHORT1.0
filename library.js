/*Given a dataset containing information about books in a library. 
Your task is to write JavaScript functions using higher-order functions to perform various operations on this dataset. 
The dataset is provided in the form of an array of objects, where each object represents a book.
*/

//DATASET
// we given a dataset it is used for further all questions provided in assignment
// in this dataset we are given title,author,year,pages as "KEY" and their "VALUES"

/*<--------------------------------------------------------------------------------------------------------------->*/
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
} ]

var result = 0;
for(let i=0;i<4;i++){
    result += library[i].pages;
}
console.log(result)



/*<--------------------------------------------------------------------------------------------------------------->*/
//QUESTION 1: ASK TO GIVE TOTAL NO. OF PAGES , IT CAN FIND BY REDUCE AND INITIALIZE IT WITH 0, BY DEFAULT IT ALSE TAKE 0 FOR REDUCE
//Total Number of Pages


    const total_Pages = library.reduce((total, curr) => total + curr.pages, 0);
   console.log("Total Number of Pages:", total_Pages);



/*<--------------------------------------------------------------------------------------------------------------->*/ 

//QUESTION 2: GIVE THE LIST OF BOOK TITLES WE NEED TO MAP BECAUSE WE NOT NEED TO PRINT EVERY INFO OF OBJECT ONLY NEED TO PRINT THEIR TITLE
//List of Book Titles
const getBookTitles = library.map((book) => book.title);
 
  console.log("List of Book Titles:", getBookTitles);



/*<--------------------------------------------------------------------------------------------------------------->*/
//QUESTION 3: USE FILTER BECAUESE ONLY NEED BOOK WHICH PUBLISHED YEAR IS GRATER THAN USER ASKED
//Books Published After Year

  function getBooksPublishedAfterYear(year){
    const get_title = library.filter((books)=>books.year>year).map((books)=>books.title);
    return get_title;
  }

  console.log(getBooksPublishedAfterYear(1900));




/*<--------------------------------------------------------------------------------------------------------------->*/
  //QUESTION 4: FIND LEN OF LIBRARY AND DIVIDE IT BY TOTAL PAGES 
  //Average Number of Pages
const l = library.length;


const  getAveragePages = total_Pages/l;

console.log(getAveragePages)



/*<--------------------------------------------------------------------------------------------------------------->*/

//QUESTION 5: Compare every book pages from 0 index to n-1 index and return max , it can done by the reduce
//getLongestBook

const getLongestBook = library.reduce((val,curr)=> (curr.pages>val?val:curr) , library[0]);

console.log(getLongestBook);





/*<--------------------------------------------------------------------------------------------------------------->*/
//QUESTION 6: Its something different we cant direct use reduce, fill filter etc direct here we need to make a object array with given constraints
// , like here we store only book author and book title
//Authors and Books

const authorsAndBooks = library.reduce((result, book) => {
    if (!result[book.author]) {
      result[book.author] = [];
    }
    result[book.author].push(book.title);
    return result;
  }, {});

  console.log(authorsAndBooks)



 /*<--------------------------------------------------------------------------------------------------------------->*/

//QUESTION 7:IT is same as above just need to store pages at the place of title
//getTotalPagesByAuthor

const getTotalPagesByAuthor  = library.reduce((result, book) => {
    if (!result[book.author]) {
      result[book.author] = [];
    }
    result[book.author].push(book.pages);
    return result;
  }, {});
  console.log(getTotalPagesByAuthor)



/*<--------------------------------------------------------------------------------------------------------------->*/

  //QUESTION 8: well ! its hard ques but need only to do one condition here we store author and pages but shortest first 
  // which need only condition check everytime for min pages
  //Shortest books by author

  const shortestBooksByAuthor = library.reduce((result, cur) => {
    if (!result[cur.author] || cur.pages < result[cur.author].pages) {
      result[cur.author] = { title: cur.title, pages: cur.pages };
    }
    return result;
  }, {});

 console.log(shortestBooksByAuthor)



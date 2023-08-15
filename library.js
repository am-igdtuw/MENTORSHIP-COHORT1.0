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


//Ques3
//create a variable to store total
var total = 0;
//iterate over object using for loop and add library pages and store it in variable total
function getTotalPages()
{
    for(var i = 0; i<library.length; i++)
    {
        total+=library.pages;
        return total;
    }
}
sum = getTotalPages();
console.log(sum);



//Ques4
//created a function to make a array of book titles
function getBookTitles(book)
{
    const Book_Title = Array.from(new Set(book.map(book => book.title)));
    return Book_Title;
}
console.log(getBookTitles());


//Ques5
// create a variable year
var year = 1887;
//using for each iterate over book year and then after satisfying if condition print the title of book
getBooksPublishedAfterYear(year);
function getBooksPublishedAfterYear(year)
{
    library.forEach(Book)
    {
        if ( Book.year > year )
        {
            console.log(library.title);
        }
    }
}



//Ques6
//using for each iterate over each item and then store the sum of pages in total and then return average of pages
let total = 0;
function getAveragePages(pages)
{
    library.forEach(item)
    {
        total+=item.pages;
        const Average=total/5;
        return Average;
    }
}
average= getAveragePages;
console.log(average);




//Ques7
// using forEach iterate over each book and then check the if condition and the store the book title of book with maximum no. of pages
var max=0;
var Book_Title;
function getLongestBook()
{
    library.forEach(book=>
        {
            if(max<book.pages)
            {
                max=library.pages;
                Book_Title=library.title;
                return Book_Title;
            }
        });
}




//Ques8
//create two arrays for keys(Author name) and values(Book Title) and then mapped it as key value pairs and returns object
const Book_Author=library.map(book=>book.author);
const Book_Title = library.map(book => book.title);
function getAuthorAndBooks(keys,values)
{
    const Author_Books={};
    Book_Author.forEach((key,index)=>{
        Author_Books[key]=values[index];
    });
    return Author_Books;
}
const object1=getAuthorAndBooks(Book_Author,Book_Title)





//Ques9
//create two arrays for keys(Author name) and values(No. of pages) and then mapped it as key value pairs and returns object
const Book_Author1=library.map(book=>book.author);
const Book_pages= library.map(book =>book.pages);
function getTotalPagesByAuthor(keys,values)
{
    const Author_pages={};
    Book_Author.forEach((key,index)=>{
        Author_pages[key]=values[index];
    });
    return Author_Books;
}
const object2=getTotalPagesByAuthor(Book_Author,Book_pages)













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

const getTotalPages=(library)=>{
    const ans=library.reduce((total, book) => total+book.pages,0);
    return ans;
}
console.log(getTotalPages(library));

const getBookTitles=(library)=>{
    return library.map((book)=>book.title);
}
console.log(getBookTitles(library));

const getBooksPublishedAfterYear=(library,yr)=>{
    const k= library.filter((book)=>book.year>yr);
    return k.map((book)=>book.title);
}
console.log(getBooksPublishedAfterYear(library,1815));

const getAveragePages=(library)=>{
    return getTotalPages(library)/4;
}
console.log(getAveragePages(library));

const getLongestBook=(library)=>{
    const mostPages=library.reduce((max,curr)=> (curr.pages>max.pages ? curr:max),library[0]);
    return mostPages.title;
}
console.log(getLongestBook(library));

const getAuthorsAndBooks=(library)=>{
    const obj={};
    library.forEach((book)=>(obj[book.author]=book.title));
    return obj;
}
console.log(getAuthorsAndBooks(library));

const getTotalPagesByAuthor=(library)=>{
    const obj={};
    library.filter((book)=>{obj[book.author]=book.pages});
    return obj;
}
console.log(getTotalPagesByAuthor(library));

const getShortestBookByAuthor=(library)=>{
    const obj={};
    const shortestBook=library.filter(());
    library.filter((book)=>{
        obj[book.author]=shortestBook(library,book.author);
    });
    return obj;
}
import React from 'react';//imported to use jsx
import  ReactDOM  from 'react-dom';//imported so that ewe can use multiple elements in dom form
const p1="https://picsum.photos/seed/picsum/200/300";//
const p2="https://picsum.photos/id/237/200/300";
const p3="https://picsum.photos/200/300?grayscale";

const p4="https://picsum.photos/id/870/200/300?grayscale&blur=2";
/*const p5="https://picsum.photos/200/200";
const p6="https://picsum.photos/200/300";
const p7="https://picsum.photos/200/250";
const p8="https://picsum.photos/200/350";
const p9="https://picsum.photos/250/250";*/

ReactDOM.render(
    <div>
        <h1>shruti jha..hariyali</h1>
        <img src={p1} alt="bhoot"/>
        <img src={p2} alt="bhoot"/>
        <img src={p3} alt="bhoot"/>
        <img src={p4} alt="bhoot"/>
        <br></br>
    </div>,
    /*
    <div>
        <img src={p4} alt="bhoot"/>
        <img src={p5} alt="bhoot"/>
        <img src={p6} alt="bhoot"/>
        
    
    
        <img src={p7} alt="bhoot"/>
        <img src={p8} alt="bhoot"/>
        <img src={p9} alt="bhoot"/>
    
   
    </div>,*/
    document.getElementById("root")
);
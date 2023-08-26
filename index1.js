export  default  Header;
import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import reportWebVitals from './reportWebVitals';
let name="INSTAGRAM";
const img="https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AInstagram_logo_2022.svg&psig=AOvVaw2XJ3YcvwqaaLLno_jdc4kg&ust=1693122546795000&source=images&cd=vfe&opi=89978449&ved=0CA4QjRxqFwoTCJDkxZDr-YADFQAAAAAdAAAAABAE"
const img1 = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.creativelysquared.com%2Farticle%2Ftop-5-free-apps-for-curating-the-perfect-instagram-feed&psig=AOvVaw3iRy2PrrZv5rlO_LY65Z3U&ust=1693122636306000&source=images&cd=vfe&opi=89978449&ved=0CA4QjRxqFwoTCMiy6MTr-YADFQAAAAAdAAAAABAS"
const img2="https://www.google.com/url?sa=i&url=https%3A%2F%2Fblog.hubspot.com%2Fmarketing%2Finstagram-themes&psig=AOvVaw3iRy2PrrZv5rlO_LY65Z3U&ust=1693122636306000&source=images&cd=vfe&opi=89978449&ved=0CA4QjRxqFwoTCMiy6MTr-YADFQAAAAAdAAAAABAb"
const root = ReactDOM.createRoot(document.getElementById('insta'));
insta.render(){
    <>
    <div classname='insta'>
        <div className='text'>

        <h1 > <img src={ins} height='80px' width='200px' ></img>{name}</h1></div>
     
        <div className='images'>
        <img src={img} alt='randomimage' height='400rem' width='400rem' />
        <img src={img1} alt='randomimage'height='400rem' width='400rem'/>
        <img src={img2}alt="random image" height="400rem"width="400rem"/>

        </div>
    </div>
   </>
}
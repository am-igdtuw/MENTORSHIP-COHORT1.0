import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import reportWebVitals from './reportWebVitals';
const name = "INSTAGRAM";
const ins = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjLCCw1J3s_HaFN5wGfUdv4V1NjZyjb_qOFQ&usqp=CAU '
const img1 = 'https://images.pexels.com/photos/3584992/pexels-photo-3584992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
const img2 = 'https://images.pexels.com/photos/15866068/pexels-photo-15866068/free-photo-of-people-making-selfie-on-boardwalk-on-sunset.jpeg?auto=compress&cs=tinysrgb&w=600'
const img3 = 'https://images.pexels.com/photos/1252983/pexels-photo-1252983.jpeg?auto=compress&cs=tinysrgb&w=600'
const img4 = 'https://images.pexels.com/photos/4033244/pexels-photo-4033244.jpeg?auto=compress&cs=tinysrgb&w=600'
const img5 = 'https://images.pexels.com/photos/4993291/pexels-photo-4993291.jpeg?auto=compress&cs=tinysrgb&w=600'
const img6 = 'https://images.pexels.com/photos/14031914/pexels-photo-14031914.jpeg?auto=compress&cs=tinysrgb&w=600'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <div className='insta'>
<div className='text'>

   <h1 > <img src={ins} height='80px' width='200px' ></img>{name}</h1></div>

   <div className='imges'>
   <img src={img1} alt='randomimage' height='500rem' width='500rem' />
   <img src={img2} alt='randomimage'height='500rem' width='500rem'/>
</div>
<div className='imges'>
   <img src={img3} alt='randomimage'height='500rem' width='500rem'/>
   <img src={img4} alt='randomimage'height='500rem' width='500rem'/>
   </div>
   <div className='imges'>
   <img src={img5} alt='randomimage'height='500rem' width='500rem'/>
   <img src={img6} alt='randomimage'height='500rem' width='500rem'/>
   </div>

   </div>
  </React.StrictMode>
);



reportWebVitals();
import sampleImages from './sample';
import React from 'react';
import './App.css'
function App() {
  return (
    <><h1 className="page-heading"> Shop Mart </h1>
    <hr className="line"/>
    <div className="image-grid">
      {sampleImages.map((item,index) => {
        return (
        <img key={index} 
        src={item['product-image-url']} alt={'${index'}
        className="image-item"/>
        );
      })}
    </div></>
  );
}
export default App;

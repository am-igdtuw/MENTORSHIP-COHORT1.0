import React from 'react';
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import img4 from './img4.jpg'
import img5 from './img5.jpg'
import img6 from './img6.png'

const ImageBox=()=>{
    return(
        <div className="image-container">
            <h6></h6>
            <div className="row1">
                <div className="img-box">
                    <img src={img1} alt="" />
                </div>
                <div className="img-box">
                    <img src={img2} alt="" />
                </div>
                <div className="img-box">
                    <img src={img3} alt="" />
                </div>     
            </div>
            <h6></h6>
            <div className="row2">
            <div className="img-box">
                    <img src={img4} alt="" />
                </div>
                <div className="img-box">
                    <img src={img5} alt="" />
                </div>
                <div className="img-box">
                    <img src={img6} alt="" />
                </div>   
            </div>
        </div>
    );
};

export default ImageBox;
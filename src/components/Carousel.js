import React from 'react';
import carousel1 from "../assets/hero-image.jpg";
import carousel2 from "../assets/nathan-dumlao-5BB_atDT4oA-unsplash.jpg";
import carousel3 from "../assets/second-desktop-image.jpg";
import carousel4 from "../assets/sinitta-leunen-dS87qokCAC4-unsplash.jpg";

const Carousel = () => {
    return (

        /* --------- IMAGE CAROUSEL WILL CHANGE CODE----------- */
        
      <div className="slider">
        <div className="slides">
            <input type="radio" name="radio-btn" id="radio1"/>
            <input type="radio" name="radio-btn" id="radio2"/>
            <input type="radio" name="radio-btn" id="radio3"/>
            <input type="radio" name="radio-btn" id="radio4"/>

            <div className="slide first">
                <img src={carousel1} alt="carousel one"/>
            </div>
            <div className="slide">
                <img src={carousel2} alt="carousel two"/>
            </div>
            <div className="slide">
                <img src={carousel3} alt="carousel three"/>
            </div>
            <div className="slide">
                <img src={carousel4} alt="carousel four"/>
            </div>

            <div className="navigation-auto">
                <div className="auto-btn1"></div>
                <div className="auto-btn2"></div>
                <div className="auto-btn3"></div>
                <div className="auto-btn4"></div>
            </div>

        </div>

        <div className="navigation-manual">
            <label for="radio1" className="manual-btn"></label>
            <label for="radio2" className="manual-btn"></label>
            <label for="radio3" className="manual-btn"></label>
            <label for="radio4" className="manual-btn"></label>
        </div>

    </div>
    )
};

export default Carousel;

import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
import sanityClient from '../client.js';

// import carousel1 from "../assets/hero-image.jpg";
// import carousel2 from "../assets/nathan-dumlao-5BB_atDT4oA-unsplash.jpg";
// import carousel3 from "../assets/second-desktop-image.jpg";
// import carousel4 from "../assets/sinitta-leunen-dS87qokCAC4-unsplash.jpg";

const Carousel = () => {
    const [carouselData, setCarouselData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(
            `*[_type == "carousel"] {
                _id,
                mobileOne{
                    image{
                        asset->{
                            url,
                        },
                    },
                },
                mobileTwo{
                    image{
                        asset->{
                            url,
                        },
                    },
                },
                mobileThree{
                    image{
                        asset->{
                            url,
                        },
                    },
                },
                mobileFour{
                    image{
                        asset->{
                            url,
                        },
                    },
                },
                mobileFive{
                    image{
                        asset->{
                            url,
                        },
                    },
                },
                mobileSix{
                    image{
                        asset->{
                            url,
                        },
                    },
                },
                mobileSeven{
                    image{
                        asset->{
                            url,
                        },
                    },
                },
                mobileEight{
                    image{
                        asset->{
                            url,
                        },
                    },
                },
                desktopOne{
                    image{
                        asset->{
                            url,
                        },
                    },
                },
                desktopTwo{
                    image{
                        asset->{
                            url,
                        },
                    },
                },
                desktopThree{
                    image{
                        asset->{
                            url,
                        },
                    },
                },
                desktopFour{
                    image{
                        asset->{
                            url,
                        },
                    },
                },
                desktopFive{
                    image{
                        asset->{
                            url,
                        },
                    },
                },
                desktopSix{
                    image{
                        asset->{
                            url,
                        },
                    },
                },
            }`
        )
            .then((data) => {
                setCarouselData(data)
                console.log(data)
            })     
    }, []);


    return (

        /* --------- IMAGE CAROUSEL WILL CHANGE CODE----------- */
    <>
        <div className="slider">
            {carouselData && carouselData.map((carousel, index) => (
                <div key={index} className="slides">
                    <input type="radio" name="radio-btn" id="radio1"/>
                    <input type="radio" name="radio-btn" id="radio2"/>
                    <input type="radio" name="radio-btn" id="radio3"/>
                    <input type="radio" name="radio-btn" id="radio4"/>
                    <input type="radio" name="radio-btn" id="radio5"/>
                    <input type="radio" name="radio-btn" id="radio6"/>
                    
                    <div className="slide first">
                        <img
                            src={carousel.desktopOne.image.asset.url}
                            alt="carousel one"
                        />
                    </div>
                    <div className="slide">
                        <img
                            src={carousel.desktopTwo.image.asset.url}
                            alt="carousel two"
                        />
                    </div>
                    <div className="slide">
                        <img
                            src={carousel.desktopThree.image.asset.url}
                            alt="carousel three"
                        />
                    </div>
                    <div className="slide">
                        <img
                            src={carousel.desktopFour.image.asset.url}
                            alt="carousel four"
                        />
                    </div>
                    <div className="slide">
                        <img
                            src={carousel.desktopFive.image.asset.url}
                            alt="carousel five"
                        />
                    </div>
                    <div className="slide">
                        <img
                            src={carousel.desktopSix.image.asset.url}
                            alt="carousel six"
                        />
                    </div>

                    <div className="navigation-auto">
                        <div className="auto-btn1"></div>
                        <div className="auto-btn2"></div>
                        <div className="auto-btn3"></div>
                        <div className="auto-btn4"></div>
                        <div className="auto-btn5"></div>
                        <div className="auto-btn6"></div>
                    </div>

                </div>
            ))}

            <div className="navigation-manual">
                <label for="mobile-radio1" className="manual-btn"></label>
                <label for="mobile-radio2" className="manual-btn"></label>
                <label for="mobile-radio3" className="manual-btn"></label>
                <label for="mobile-radio4" className="manual-btn"></label>
                <label for="mobile-radio5" className="manual-btn"></label>
                <label for="mobile-radio6" className="manual-btn"></label>
            </div>

        </div>

        <div className="mobile-slider">
            {carouselData && carouselData.map((mobileCarousel, index) => (
                <div key={index} className="mobile-slides">
                    <input type="radio" className="mobile-radio-btn" id="mobile-radio1"/>
                    <input type="radio" className="mobile-radio-btn" id="mobile-radio2"/>
                    <input type="radio" classnName="mobile-radio-btn" id="mobile-radio3"/>
                    <input type="radio" className="mobile-radio-btn" id="mobile-radio4"/>
                    <input type="radio" className="mobile-radio-btn" id="mobile-radio5"/>
                    <input type="radio" className="mobile-radio-btn" id="mobile-radio6"/>
                    
                    <div className="mobile-slide first">
                        <img
                            src={mobileCarousel.mobileOne.image.asset.url}
                            alt="carousel one"
                        />
                    </div>
                    <div className="mobile-slide">
                        <img
                            src={mobileCarousel.mobileTwo.image.asset.url}
                            alt="carousel two"
                        />
                    </div>
                    <div className="mobile-slide">
                        <img
                            src={mobileCarousel.mobileThree.image.asset.url}
                            alt="carousel three"
                        />
                    </div>
                    <div className="mobile-slide">
                        <img
                            src={mobileCarousel.mobileFour.image.asset.url}
                            alt="carousel four"
                        />
                    </div>
                    <div className="mobile-slide">
                        <img
                            src={mobileCarousel.mobileFive.image.asset.url}
                            alt="carousel five"
                        />
                    </div>
                    <div className="mobile-slide">
                        <img
                            src={mobileCarousel.mobileSix.image.asset.url}
                            alt="carousel six"
                        />
                    </div>

                    <div className="mobile-navigation-auto">
                        <div className="mobile-auto-btn1"></div>
                        <div className="mobile-auto-btn2"></div>
                        <div className="mobile-auto-btn3"></div>
                        <div className="mobile-auto-btn4"></div>
                        <div className="mobile-auto-btn5"></div>
                        <div className="mobile-auto-btn6"></div>
                    </div>

                </div>
            ))}

            <div className="mobile-navigation-manual">
                <label for="mobile-radio1" className="mobile-manual-btn"></label>
                <label for="mobile-radio2" className="mobile-manual-btn"></label>
                <label for="mobile-radio3" className="mobile-manual-btn"></label>
                <label for="mobile-radio4" className="mobile-manual-btn"></label>
                <label for="mobile-radio5" className="mobile-manual-btn"></label>
                <label for="mobile-radio6" className="mobile-manual-btn"></label>
            </div>

        </div>
    </>
    )
};

export default Carousel;

import React, { useState, useEffect } from 'react';
import sanityClient from '../client.js';


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
                    <div className="slide">
                        <img
                            src={carousel.desktopTwo.image.asset.url}
                            alt="carousel two"
                        />
                    </div>
                    <div className="slide first">
                        <img
                            src={carousel.desktopOne.image.asset.url}
                            alt="carousel one"
                        />
                    </div>
                    <div className="slide">
                        <img
                            src={carousel.desktopSix.image.asset.url}
                            alt="carousel six"
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
                </div>
            ))}
        </div>

        <div className="mobile-slider">
            {carouselData && carouselData.map((mobileCarousel, index) => (
                <div key={index} className="mobile-slides">
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
                </div>
            ))}
        </div>
    </>
    )
};

export default Carousel;

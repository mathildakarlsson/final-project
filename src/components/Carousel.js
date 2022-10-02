import React, { useState, useEffect } from 'react';
import sanityClient from '../client.js';
import styled from 'styled-components';


const Carousel = () => {
    const [carouselData, setCarouselData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(
            `*[_type == "carousel"] {
                _id,
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
        <Slider>
            {carouselData && carouselData.map((carousel, index) => (
                <Slides key={index}>  
                    <Slide>
                        <Image
                            src={carousel.desktopFour.image.asset.url}
                            alt="carousel two"
                        />
                    </Slide>
                    <Slide>
                        <Image
                            src={carousel.desktopTwo.image.asset.url}
                            alt="carousel one"
                        />
                    </Slide>
                    <Slide>
                        <Image
                            src={carousel.desktopSix.image.asset.url}
                            alt="carousel six"
                        />
                    </Slide>
                    <Slide>
                        <Image
                            src={carousel.desktopFive.image.asset.url}
                            alt="carousel three"
                        />
                    </Slide>
                    <Slide>
                        <Image
                            src={carousel.desktopThree.image.asset.url}
                            alt="carousel four"
                        />
                    </Slide>
                    <Slide>
                        <Image
                            src={carousel.desktopOne.image.asset.url}
                            alt="carousel five"
                        />
                    </Slide>
                </Slides>
            ))}
        </Slider>

        {/* <MobileSlider>
            {carouselData && carouselData.map((mobileCarousel, index) => (
                <Slides key={index}>
                    <Slide>
                        <Image
                            src={mobileCarousel.mobileOne.image.asset.url}
                            alt="carousel one"
                        />
                    </Slide>
                    <Slide>
                        <Image
                            src={mobileCarousel.mobileTwo.image.asset.url}
                            alt="carousel two"
                        />
                    </Slide>
                    <Slide>
                        <Image
                            src={mobileCarousel.mobileThree.image.asset.url}
                            alt="carousel three"
                        />
                    </Slide> */}
                    {/* <Slide>
                        <Image
                            src={mobileCarousel.mobileFour.image.asset.url}
                            alt="carousel four"
                        />
                    </Slide> */}
                    {/* <Slide>
                        <Image
                            src={mobileCarousel.mobileFive.image.asset.url}
                            alt="carousel five"
                        />
                    </Slide>
                    <Slide>
                        <Image
                            src={mobileCarousel.mobileSix.image.asset.url}
                            alt="carousel six"
                        />
                    </Slide> */}
                {/* </Slides>
            ))}
        </MobileSlider> */}
    </>
    )
};

export default Carousel;


const Slider = styled.section `
    width: 100vw;
    height: auto;
    overflow: scroll;
    padding-top: 115px;
    /* display: none;
  
    @media (min-width: 668px) {
        display: block;
    } */
`

// const MobileSlider = styled.section `
//     width: 100vw;
//     height: auto;
//     padding-top: 100px;
//     overflow: scroll;

  
//     @media (min-width: 668px) {
//         display: none;
//     }
// `

const Slides = styled.div `
    width: 500%;
    display: flex;

    @media (min-width: 668px) {
        width: auto;
    }

`

const Slide = styled.div `
    width: auto;
    transition: 2s;

    @media (min-width: 668px) {
        /* width: 20%; */
    }

`

const Image = styled.img `
    width: auto;
    height: 40vh;
    object-fit: contain;
    margin-top: 6rem;

    @media (min-width: 668px) {
        height: 70vh;
        width: auto;
        margin-top: 0;
    }
`

// mobileOne{
//     image{
//         asset->{
//             url,
//         },
//     },
// },
// mobileTwo{
//     image{
//         asset->{
//             url,
//         },
//     },
// },
// mobileThree{
//     image{
//         asset->{
//             url,
//         },
//     },
// },
// mobileFour{
//     image{
//         asset->{
//             url,
//         },
//     },
// },
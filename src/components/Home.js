import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import sanityClient from '../client.js';
import Carousel from './Carousel';


const Home = () => {
    const [homePage, setHomePage] = useState(null);

    useEffect(() => {
        sanityClient.fetch(
            `*[_type == "homePage"] {
                _id,
                homeOne{
                    image{
                        asset->{
                            url,
                        },
                    },
                },
                homeTwo{
                    image{
                        asset->{
                            url,
                        },
                    },
                },
                homeThree{
                    image{
                        asset->{
                            url,
                        },
                    },
                },
            }`
        )
            .then((data) => {
                setHomePage(data)
             
                console.log(data)
            })     
    }, []);


    


    return (
        <HomeContainer>
            <Carousel />
        {/* <Container> */}
                {homePage && homePage.map((homePage, index) => (
                    <ImageContainer key={index}>
                        <ImageWrapper>
                            <Image
                                src={homePage.homeOne.image.asset.url}
                                alt={homePage.title}
                            />
                        </ImageWrapper>
                        <ImageWrapper>
                            <Image
                                src={homePage.homeTwo.image.asset.url}
                                alt={homePage.title}
                            />
                        </ImageWrapper>
                        <ImageWrapper>
                            <Image
                                src={homePage.homeThree.image.asset.url}
                                alt={homePage.title}
                            />
                        </ImageWrapper>
                    </ImageContainer>
                    ))}
        {/* </Container> */}
        {/* <div class="elfsight-app-55ce35a0-0d2a-41cf-a6be-b1ff2d427fcf"></div> */}
        </HomeContainer>
    )
};

export default Home;

const ImageWrapper = styled.div `
    max-width: 40vw;
`

// const Container = styled.section `
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `

const ImageContainer = styled.div `
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 50px;
    /* justify-content: space-between; */
    /* margin-left: 50px; */
    /* align-items: center; */
    /* align-content: center; */
    align-self: center;
`


const HomeContainer = styled.section `
    display: flex;
    justify-content: center;
    /* align-items: center; */
    flex-direction: column;
    background-color: #F1EEEB;
`
// const Section = styled.div `
//     display: grid;
//     grid-template-columns: repeat(1, 1fr);
//     /* align-items: center; */
//     justify-content: center;
    
// `

const Image = styled.img `
    max-width: 100%;
    width: auto;
    margin: 120px 0;
    object-fit: contain;
`

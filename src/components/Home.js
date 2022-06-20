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
                homeFour{
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
            <InfoContainer>
                    <Header>Vi är</Header>
                    <Header>Nordic Spells Decor</Header>
                    <Info>Ett team entusiastiska kreatörer. Vi kombinerar eventdesign, floristtjänster och handplockade hyrsaker för att skapa personliga och pintrestvänliga event! Hyr dekoration av oss, beställ blomsterarrangemang eller låt oss skapa hela atmosfären.</Info>
                    <Info>Vi gör din dag alldeles särskilt mycket du!</Info>
                </InfoContainer>
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
                        <ImageWrapper>
                            <Image
                                src={homePage.homeFour.image.asset.url}
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

const InfoContainer = styled.div `
    padding: 100px 0 80px 0;
    margin: 0px 30px;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-self: center;
    justify-self: center;

    @media (min-width: 668px) {
        width: 900px;
    }
`

const Header = styled.h1 `
    text-transform: uppercase;
    font-weight: 300;
    font-size: 30px;
    letter-spacing: .15em;

    @media (min-width: 668px) {
        font-size: 37px;
        letter-spacing: .2em;
    }

`

const Info = styled.h4 `
    font-weight: 300;
    margin: 12px 0;
    line-height: 28px;
    padding-top: 15px;

    @media (min-width: 668px) {
        font-size: 18px;
        letter-spacing: .03em
    }
`

const ImageWrapper = styled.div `
    max-width: 40vw;
    display: flex;
    justify-content: center;
`

const ImageContainer = styled.div `
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 50px;
    align-self: center;

    @media (min-width: 668px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 992px) {
        gap: 100px;
    }

  
`


const HomeContainer = styled.section `
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: #F1EEEB;
`

const Image = styled.img `
    width: auto;
    object-fit: contain;
    max-height: 80vh;

    @media (min-width: 992px) {
        max-height: 100vh;
    }
`

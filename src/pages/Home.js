import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'; 
import styled from 'styled-components';
import sanityClient from '../client.js';
import Carousel from '../components/Carousel';
// import Portfolio from '../components/Portfolio'



const Home = () => {
    const [homePage, setHomePage] = useState(null);

    useEffect(() => {
        sanityClient.fetch(
            `*[_type == "homePage"] {
                _id,
                homeOne{
                    photographer,
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
            {homePage && homePage.map((homePage, index) => (
            <InfoContainer key ={index}>
                    <Header>Vi är</Header>
                    <Header>Nordic Spells Decor</Header>
                    <Info>{homePage.homeOne.photographer}</Info>
                    {/* <Info>Ett team entusiastiska kreatörer. Vi kombinerar eventdesign, floristtjänster och handplockade hyrsaker för att skapa personliga och pintrestvänliga event! Hyr dekoration av oss, beställ blomsterarrangemang eller låt oss skapa hela atmosfären.</Info> */}
                    <Info>Vi gör din dag alldeles särskilt mycket du!</Info>
            </InfoContainer>
                    ))}
                {homePage && homePage.map((homePage, index) => (
                <ImageContainer key={index}>
                    <ImageWrapper>

                        <NavLink to='/flowers'>
                            <Image
                                src={homePage.homeOne.image.asset.url}
                                alt={homePage.title}
                            />
                            <Overlay></Overlay>
                            <CardInfo>BLOMMOR</CardInfo>
                        </NavLink>
                    </ImageWrapper>
                    <ImageWrapper>
                        <NavLink to='/services'>
                            <Image
                                src={homePage.homeTwo.image.asset.url}
                                alt={homePage.title}
                            />
                            <Overlay></Overlay>
                            <CardInfo>DESIGNPAKET</CardInfo>
                        </NavLink>
                    </ImageWrapper>
                        <ImageWrapper>
                            <NavLink to='/rentals'>
                                <Image
                                    src={homePage.homeThree.image.asset.url}
                                    alt={homePage.title}
                                />
                                    <Overlay></Overlay>
                                    <CardInfo>HYRSAKER</CardInfo>
                            </NavLink>
                        </ImageWrapper>
                        <ImageWrapper>
                            <NavLink to='/about'>
                                <Image
                                    src={homePage.homeFour.image.asset.url}
                                    alt={homePage.title}
                                />
                                <Overlay></Overlay>
                                <CardInfo>OM OSS</CardInfo>
                        </NavLink>
                     </ImageWrapper>
                </ImageContainer>
                // </div>
            ))}
            {/* <Portfolio /> */}
                {/* instagram embed - save for later <div className="elfsight-app-55ce35a0-0d2a-41cf-a6be-b1ff2d427fcf"></div>*/}
        </HomeContainer>
    )
};

export default Home;

const InfoContainer = styled.div `
    padding: 4rem 0 1rem 0;
    margin: 0px 30px;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-self: center;
    justify-self: center;

    @media (min-width: 668px) {
        width: 95%;
    }
`

const Header = styled.h1 `
    text-transform: uppercase;
    font-weight: 300;
    font-size: 27px;
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

const Overlay = styled.div `
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: 0.5s ease;
    background-color: rgba(0,0,0,0.5);
    z-index: 5;
    max-height: 99%;

    @media (min-width: 992px) {
        opacity: 0;
        
        &:hover {
            opacity: 100;
        }
    } 
`

const ImageWrapper = styled.div `
    position: relative;
    display: grid;
    align-items: center;
    justify-content: center;
    text-align: center;
`

const Image = styled.img `
    width: auto;
    object-fit: contain;
    max-height: 80vh;

    @media (min-width: 668px) {
        max-height: 45vh;
    }

    @media (min-width: 992px) {
        max-height: 100vh;
    }
`

const CardInfo = styled.div `
    position: absolute;
    top: 0%;
    margin: auto;
    left: 0%;
    right: 0%;
    bottom: 1%;
    height: 8vh;
    font-weight: 300;
    /* line-height: 28px; */
    color: white;
    font-size: 30px;
    letter-spacing: .15em;
    z-index: 5;
    padding: 0;

    @media (min-width: 668px) {
        bottom: 10%;
        font-size: 30px;
        max-width: 18vw;
    }

    @media (min-width: 992px) {
        font-size: 36px;
    }
`

const ImageContainer = styled.div `
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 50px;
    align-self: center;
    margin-bottom: 100px;

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
    align-items: center;
    overflow: hidden;
`
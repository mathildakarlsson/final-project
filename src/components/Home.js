import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import sanityClient from '../client.js';


const Home = () => {
    const [homePage, setHomePage] = useState(null);

    useEffect(() => {
        sanityClient.fetch(
            `*[_type == "homePage"] {
                _id,
                carousel[]{
                  asset->{
                  _id,
                  url,
                },
                },
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
            
            <Welcome>Välkommen till Nordic Spells Decor!</Welcome>
            <p>This is the Carousel images</p>
            {homePage && homePage.map((nested) => nested.carousel.map((carousel, index) => (
                <Section key={index}>
                <Image
                    key={index}
                    src={carousel.asset.url}
                    alt={carousel}
                />
            </Section>
        )))}
        <p>This is the other images</p>
        <div>
                {homePage && homePage.map((homePage, index) => (
                    <div key={index}>
                        <Image
                            src={homePage.homeOne.image.asset.url}
                            alt={homePage.title}
                        />
                        <Image
                            src={homePage.homeTwo.image.asset.url}
                            alt={homePage.title}
                        />
                        <Image
                            src={homePage.homeThree.image.asset.url}
                            alt={homePage.title}
                        />
                    </div>
                    ))}
        </div>
        <div class="elfsight-app-55ce35a0-0d2a-41cf-a6be-b1ff2d427fcf"></div>
        </HomeContainer>
    )
};

export default Home;


const HomeContainer = styled.section `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const Section = styled.div `
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    /* align-items: center; */
    justify-content: center;
    
`

const Image = styled.img `
    width: 75%;
    height: 75%;
    margin: 120px 0;
`

const Welcome = styled.h1 `
    font-weight: 300;
    padding-top: 200px;
`
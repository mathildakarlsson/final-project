import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import sanityClient from '../client.js';
import { Link } from 'react-router-dom'; 


const Flowers = () => {
    const [flowersData, setFlowersData] = useState(null)
    
    useEffect(() => {
        sanityClient.fetch(
            `*[_type == "flowers"] {
                _id,
                title,
                flowerImages[]{
                    asset->{
                        _id,
                        url,
                    }   
                },
                flowerImagesMobile[]{
                    asset->{
                        _id,
                        url,
                    }   
                }
            }`
        )
            .then((data) => {
                setFlowersData(data)
             
                console.log(data)
            })     
    }, []);
    

    return (
        <Section>
            <InfoContainer>
                <Header>Blommor</Header>
                <Info>Nordic Spells Decor erbjuder liv och rörelse till bröllop och event genom säsongens blommor och blad! Blomsterbågar, bordsdekoration, buketter, kransar, corsager och mycket där till.</Info>
                <Info>Välkommen att höra av dig till oss med dina önskemål så återkommer vi med offert för dig att ta ställning. Låt dig gärna inspireras av bilderna här!</Info>
                <ContactLink to='/contact' 
                    activeClassName='active'
                    style={linkStyle}
                    >
                        Skicka förfrågan
                </ContactLink>
            </InfoContainer>
            <Container>
                {flowersData && flowersData.map((nested) => nested.flowerImagesMobile.map((flowerImagesMobile, index) => (
                    <ImageContainer key={index}>
                        <Image
                            key={index}
                            src={flowerImagesMobile.asset.url}
                            alt={flowerImagesMobile}
                        />
                    </ImageContainer>
                )))}
            </Container>
        </Section>
    )
};

export default Flowers;

const ContactLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 .5rem;
  cursor: pointer;
  border-bottom: 3px solid rgba(255, 255, 255, 0);
  margin: 1rem;
  
  :hover {
    border-bottom: 3px solid rgb(179,99,90);
  }
`

const linkStyle = {
    color: "black",
    fontSize: "16px",
    fontWeight: "400",
    textTransform: "uppercase",
    paddingBottom: "1rem",
    letterSpacing: ".2em",
    textAlign: "center",
}

const Section = styled.section `
    display: flex;
    flex-direction: column;
`

const InfoContainer = styled.div `
    padding-top: 170px;
    margin: 0px 30px;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-self: center;
    justify-self: center;
    align-items: center;

    @media (min-width: 668px) {
        width: 800px;
    }
`

const Header = styled.h1 `
    text-transform: uppercase;
    font-weight: 300;
    padding-bottom: 15px;
    font-size: 32px;
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

    @media (min-width: 668px) {
        font-size: 18px;
        letter-spacing: .03em;
    }
`

const ImageContainer = styled.div `
    justify-content: center;
    align-items: center;
    align-self: center;
    justify-self: center;
`

const Image = styled.img `
    max-width: 100%;
    width: auto;
    object-fit: contain;
    max-height: 80vh;
`

const Container = styled.section `
    padding-top: 50px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
    margin: 30px;

    @media (min-width: 668px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 992px) {
        grid-template-columns: repeat(3, 1fr);
    }
  
`
// import { Container } from '@mui/system';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import sanityClient from '../client.js';


const Flowers = () => {
    const [flowersData, setFlowersData] = useState(null)
    // const [flowerImages, setFlowerImages] = useState(null)
    
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
        // <Section>
        //     {flowersData && flowersData.map((nested) => nested.flowerImages.map((flowerImages, index) => (
        //         <div key={index}>
        //             <Header>{flowerImages.title}</Header>
        //             <Image
        //                 key={index}
        //                 src={flowerImages.asset.url}
        //                 alt={flowerImages}
        //             />
        //         </div>
        //     )))}
        // </Section>
        
            <Container>
                {flowersData && flowersData.map((nested) => nested.flowerImagesMobile.map((flowerImagesMobile, index) => (
                    <ImageContainer key={index}>
                    {/* <Header>{flowerImagesMobile.title}</Header> */}
                        <Image
                            key={index}
                            src={flowerImagesMobile.asset.url}
                            alt={flowerImagesMobile}
                        />
                    </ImageContainer>
                )))}
            </Container>

    )
};

export default Flowers;

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
    padding-top: 120px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin: 20px;
  
`

// const Header = styled.h1 `
//     /* padding-top: 300px; */
// `
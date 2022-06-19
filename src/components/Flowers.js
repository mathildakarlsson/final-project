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
        
            <ImageContainer>
                {flowersData && flowersData.map((nested) => nested.flowerImagesMobile.map((flowerImagesMobile, index) => (
                    <Section key={index}>
                    {/* <Header>{flowerImagesMobile.title}</Header> */}
                        <Image
                            key={index}
                            src={flowerImagesMobile.asset.url}
                            alt={flowerImagesMobile}
                        />
                    </Section>
                )))}
            </ImageContainer>

    )
};

export default Flowers;

const ImageContainer = styled.div `
    display: flex;
    /* justify-content: center; */
    flex-direction: column;
    /* align-items: center; */

`

const Image = styled.img `
    height: 70%;
    width: 70%;
    padding: 0;
    margin-top: 30px;
    /* margin-left: 50px; */
    border-radius: 1%;
    
`

const Section = styled.div `
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    /* align-items: center; */
    justify-content: center;
    
`

// const Header = styled.h1 `
//     /* padding-top: 300px; */
// `
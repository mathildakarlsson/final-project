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
            {flowersData && flowersData.map((nested) => nested.flowerImages.map((flowerImages, index) => (
                <div key={index}>
                    <Header>{flowerImages.title}</Header>
                    <Image
                        key={index}
                        src={flowerImages.asset.url}
                        alt={flowerImages}
                    />
                </div>
            )))}
        </Section>
    )
};

export default Flowers;

const Image = styled.img `
height: 400px;
width: 550px;
padding: 0;
margin: 0;
`

const Section = styled.div `
    /* height: 1000px; */
`

const Header = styled.h1 `
    /* padding-top: 300px; */
`
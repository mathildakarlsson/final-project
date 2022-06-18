import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import sanityClient from '../client.js';


const Flowers = () => {
    const [flowersData, setFlowersData] = useState()
    
    useEffect(() => {
        sanityClient.fetch(
            `*[_type == "flowers"] {
                _id,
                title,
                flowerImages[]{
                    asset->{
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
         
            {flowersData && flowersData.map((flowers, index) => (
                <div key={index}>
                    <Header>{flowers.title}</Header>
                    <img
                        src={flowers.flowerImages.asset.url}
                        alt={flowers.title}
                    />
                </div>
                     ))}
        </Section>
    )
};

export default Flowers;



const Section = styled.div `
    height: 1000px;
`

const Header = styled.h1 `
    padding-top: 300px;
`
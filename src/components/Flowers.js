import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import sanityClient from '../client.js';


const Flowers = () => {
    const [flowersData, setFlowersData] = useState(null)
    // const [flowerImages, setFlowerImages] = useState(null)
    
    useEffect(() => {
        sanityClient.fetch(
            `*[_type == "flowers"] {
                
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
            {flowersData && flowersData.map((nested, flowers) => nested.flowerImages.map((asset, _id) => (
                <div key={_id}>
                    <Header>{flowers.title}</Header>
                    {/* <img
                        key={asset._id}
                        src={asset.url}
                        alt={flowers.title}
                    /> */}
                </div>
            )))}
        </Section>
    )
};

export default Flowers;



const Section = styled.div `
    /* height: 1000px; */
`

const Header = styled.h1 `
    padding-top: 300px;
`
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import sanityClient from '../client.js';


const Portfolio = () => {
    const [portfolioData, setPortfolioData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(
            `*[_type == "portfolio"] {
                _id,
                portfolioOne{
                    photographer,
                    image{
                        asset->{
                            url,
                        },
                    },
                },
                portfolioTwo{
                    photographer,
                    image{
                        asset->{
                            url,
                        },
                    },
                },
                portfolioThree{
                    photographer,
                    image{
                        asset->{
                            url,
                        },
                    },
                },
                portfolioFour{
                    photographer,
                        image{
                        asset->{
                            url,
                        },
                    },
                },
            }`
        )
            .then(data => {
                setPortfolioData(data)
                console.log(data)
            })     
    }, []);



    return (
        <HomeContainer>
            {portfolioData && portfolioData.map((portfolio, index) => (
                <div key={index}>
                    <Image
                        src={portfolio.portfolioOne.image.asset.url}
                        alt={portfolio.title}
                    />
                    <p>Foto: {portfolio.portfolioOne.photographer}</p>
                    <Image
                        src={portfolio.portfolioTwo.image.asset.url}
                        alt={portfolio.title}
                    />
                    <p>Foto: {portfolio.portfolioTwo.photographer}</p>
                    <Image
                        src={portfolio.portfolioThree.image.asset.url}
                        alt={portfolio.title}
                    />
                    <p>Foto: {portfolio.portfolioThree.photographer}</p>
                        <Image
                        src={portfolio.portfolioFour.image.asset.url}
                        alt={portfolio.title}
                    />
                    <p>Foto: {portfolio.portfolioFour.photographer}</p>
                </div>
            ))}
        </HomeContainer>
    )
};

export default Portfolio;

const HomeContainer = styled.section `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const Image = styled.img `
    width: 50%;
    height: 50%;
    margin: 120px 0 30px 140px;
`
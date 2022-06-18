import React from 'react';
import styled from 'styled-components';

import Carousel1 from '../assets/KARUSELL1.jpg';


const Home = () => {
    return (
        <HomeContainer>
            <Image src={Carousel1}/>
            <Welcome>Välkommen till Nordic Spells Decor!</Welcome>
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

const Image = styled.img `
    width: 75%;
    height: 75%;
    margin: 120px 0;
`

const Welcome = styled.h1 `
    font-weight: 300;
    margin-bottom: 90px;
`
import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <Container>
            <Header>Tack till våra fotografer Sandra Lööf youngandwild.wedding, Felicia Engberg och Rebecka Wendesten</Header>
        </Container>
    )
};

export default Footer;


const Container = styled.section `
    height: 25vh;
    background-color: #C5BFB8;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;


`

const Header = styled.p `
    text-align: center;
    font-weight: 300;
    font-size: 20px;


`

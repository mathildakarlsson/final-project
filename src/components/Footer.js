import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <Container>
            <Header>Tack till våra fotografer!</Header>
            <Header>
            <a href="https://www.instagram.com/youngandwild.wedding/">Sandra Lööf</a>, 
            <a href="https://www.instagram.com/fotografjennifernilsson/">Jennifer Nilsson</a>
            </Header>
            <Header>
            <a href="">Felicia Engberg</a> samt 
            <a href="https://www.rebeckawendesten.com/">Rebecka Wendesten</a>
            </Header>
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
    flex-direction: column;
    width: 100vw;
`

const Header = styled.p `
    text-align: center;
    font-weight: 300;
    font-size: 16px;
`
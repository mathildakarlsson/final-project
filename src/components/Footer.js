import React from 'react';
import styled from 'styled-components';
import { AiOutlineInstagram } from 'react-icons/ai'

import { FiFacebook } from 'react-icons/fi'


const Footer = () => {
    return (
        <Container>
            <div>
                <Header>Tack till våra fotografer!</Header>
                <Header>
                    <a href="https://www.instagram.com/youngandwild.wedding/">Sandra Lööf</a>, 
                    <a href="https://www.instagram.com/fotografjennifernilsson/">Jennifer Nilsson</a>
                </Header>
                <Header>
                    <p>Felicia Engberg</p> samt 
                    <a href="https://www.rebeckawendesten.com/">Rebecka Wendesten</a>
                </Header>
            </div>
            <SoMeContainer>
                <a href="https://www.instagram.com/nordicspellsdecor/?hl=en"><IgIcon /></a>
                <a href="https://www.facebook.com/nordicspellsdecor/"><FbIcon /></a>
            </SoMeContainer>
        </Container>
    )
};

export default Footer;

const Container = styled.section `
    height: 25vh;
    background-color: #C5BFB8;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 100px;
    flex-direction: row;
    width: 100vw;
`

const Header = styled.p `
    text-align: center;
    font-weight: 300;
    font-size: 16px;
`

const SoMeContainer = styled.div `
    display: flex;
    gap: 20px;
`

const IgIcon = styled(AiOutlineInstagram)`
    cursor: pointer;
    color: black;
    font-size: 2rem;

    &:hover {
        cursor: pointer;
        color: #F1EEEB;
        transition: .2s ease;
    }
`
const FbIcon = styled(FiFacebook)`
    cursor: pointer;
    color: black;
    font-size: 2rem;

    &:hover {
        cursor: pointer;
        color: #F1EEEB;
        transition: .2s ease;
    }
`
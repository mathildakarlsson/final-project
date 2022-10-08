import React from 'react';
import styled from 'styled-components';
import { AiOutlineInstagram } from 'react-icons/ai'
import { FiFacebook } from 'react-icons/fi'


const Footer = () => {
    return (
        <Container>
            <div>
                <Header>Tack till våra fotografer!</Header>
                <ContactInfo><a href="https://www.youngandwild.se/brollop/">Sandra Lööf</a></ContactInfo>
                <ContactInfo><a href="https://fotografjennifernilsson.se/brollopsfotografering/">Jennifer Nilsson</a></ContactInfo>
                <ContactInfo><a href="https://www.feliciaenberg.com/">Felicia Enberg</a></ContactInfo>
                <ContactInfo><a href="https://www.rebeckawendesten.com/">Rebecka Wendesten</a></ContactInfo>
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
    min-height: 30vh;
    background-color: #C5BFB8;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 100px;
    flex-direction: column;
    width: 100vw;

    @media (min-width: 668px) {
        flex-direction: row;
    }
`

const Header = styled.h4 `
    text-align: center;
    font-weight: 400;
    font-size: 20px;
    padding: 1rem;
    color: #F1EEEB;
`

const ContactInfo = styled.p `
    text-align: center;
    font-weight: 300;
    color: #F1EEEB;

    &:hover {
        font-weight: 500;
    }
`

const SoMeContainer = styled.div `
    display: flex;
    gap: 20px;
    padding: 1rem 0;
`

const IgIcon = styled(AiOutlineInstagram)`
    cursor: pointer;
    color: #F1EEEB;
    font-size: 2rem;

    &:hover {
        cursor: pointer;
        color: black;
        transition: .2s ease;
    }
`
const FbIcon = styled(FiFacebook)`
    cursor: pointer;
    color: #F1EEEB;
    font-size: 2rem;

    &:hover {
        cursor: pointer;
        color: black;
        transition: .2s ease;
    }
`
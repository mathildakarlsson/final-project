import React from 'react';
import styled from 'styled-components';
import { AiOutlineInstagram } from 'react-icons/ai'
import { FiFacebook } from 'react-icons/fi'
// import { Link } from 'react-router-dom'
import { AiOutlineMail } from 'react-icons/ai'


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
         
            {/* <SideLinks to='/contact'>
              Kontakt
            </SideLinks> */}
            <SoMeContainer>
            <ContactHeader>Kontakta oss</ContactHeader>
                <a href="https://nordicspellsdecor.netlify.app/contact"><EmIcon /></a>
                <a href="https://www.instagram.com/nordicspellsdecor/?hl=en"><IgIcon /></a>
                <a href="https://www.facebook.com/nordicspellsdecor/"><FbIcon /></a>
            </SoMeContainer>
            {/* <div>
            <ContactLink to='/contact' 
                    activeClassName='active'
                    style={linkStyle}
                    >
                        Kontakta oss
                </ContactLink>
                </div> */}
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

const ContactHeader = styled.h4 `
    text-align: center;
    font-weight: 400;
    font-size: 20px;
    // padding: 1rem;
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

 const EmIcon = styled(AiOutlineMail)`
 cursor: pointer;
    color: #F1EEEB;
    font-size: 2rem;

    &:hover {
        cursor: pointer;
        color: black;
        transition: .2s ease;
    }
 `

// const ContactLink = styled(Link)`
//   display: flex;
//   align-items: center;
//   text-decoration: none;
//   padding: 0 .5rem;
//   cursor: pointer;
//   border-bottom: 3px solid rgba(255, 255, 255, 0);
//   margin: 1rem;
  
//   :hover {
//     border-bottom: 3px solid rgb(179,99,90);
//   }
// `

// const linkStyle = {
//     color: "black",
//     fontSize: "16px",
//     fontWeight: "400",
//     textTransform: "uppercase",
//     paddingBottom: ".5rem",
//     letterSpacing: ".2em",
//     textAlign: "center",
// }

// const SideLinks = styled(Link)`
//     font-size: 1.5rem;
//     text-decoration: none;
//     color: #6E6D6C;
//     cursor: pointer;
    
//     &:hover {
//         color: #B3635A;
//         transition: 0.3s ease-in-out;
//     }
//     `
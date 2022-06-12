import React from 'react';
import { NavLink } from 'react-router-dom'; 
import styled from 'styled-components';
// import HamburgerMenu from '../assets/Logos/icons8-menu.svg'
// import { SocialIcon } from 'react-social-icons';

const NavBar = () => {
    return (
        <Header>
            <NavContainer>
                    <LogoContainer>
                        <NavLink
                            to='/' 
                            activeClassName='active'
                            style={logoStyle}
                        >
                            Nordic Spells Decor
                        </NavLink>
                    </LogoContainer>

                    <LinkContainer>
                        <NavLink to='/rentals' 
                            activeClassName='active'
                            style={linkStyle}
                        >
                            Hyrsaker
                        </NavLink>
                        <NavLink to='/flowers' 
                            activeClassName='active'
                            style={linkStyle}
                        >
                            Blommor
                        </NavLink>
                        <NavLink to='/about' 
                            activeClassName='active'
                            style={linkStyle}
                        >
                            Om oss
                        </NavLink>
                        <NavLink to='/services' 
                            activeClassName='active'
                            style={linkStyle}
                        >
                            Tjänster
                        </NavLink>
                        <NavLink to='/contact' 
                            activeClassName='active'
                            style={linkStyle}
                        >
                            Kontakt
                        </NavLink>
                        <NavLink to='/wishlist' 
                            activeClassName='active'
                            style={linkStyle}
                        >
                            Varukorg
                        </NavLink>
                    </LinkContainer>
                {/* <Hamburger src={HamburgerMenu}/> */}
            </NavContainer>
        </Header>
    )
};

export default NavBar;

const Header = styled.header `
    /* display: flex; */
    /* justify-content: space-between; */

    `

const NavContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    position: fixed;
    width: 100vw;
`

const LogoContainer = styled.div `
    margin: 15px 0 10px 70px;

`

const LinkContainer = styled.div `
    display: flex;
    gap: 30px;
    margin: 45px 70px 10px 0;
    z-index: 999;
`

const linkStyle = {
    color: "black",
    fontSize: "15px",
    fontWeight: "300",
    textTransform: "uppercase",
}

const logoStyle = {
    color: "black",
    fontSize: "40px",
    fontWeight: "300",
    textTransform: "uppercase",
}






                // KOD TILL HAMBURGER MENU

// const Hamburger = styled.img `
//     height: 2.5em;
//     width: 2.5em;
//     cursor: pointer;
//     float: right;
//     margin-top: .2em;

//     @media (min-width: 667px) {
//         display: none
//     }
// `

// const LinkContainer = styled.div `
//     position: fixed;
//     z-index: 999;
//     width: 50vw;
//     right: 0;
//     top: 0;
//     height: 100vh;
//     padding: 10px;
//     display: none;

//     @media (min-width: 667px) {
//         display: flex;
//         gap: 30px;
//         margin: 10px 15px;
//         background: none;
//         z-index: 0;
//     }
//     @media (min-width: 1024px) {

//     }
// `



            // KOD TILL SOCIAL ICONS NPM PACKAGE

                    /* <SocialIcon
                        url='https://sv-se.facebook.com/'
                        className='facebook'
                        target='_blank' 
                        fgColor='#fff'
                        style={{ height: 35, width: 35 }} 
                    />
                    <SocialIcon
                        url='https://twitter.com/'
                        className='twitter'
                        target='_blank'
                        fgColor='#fff'
                        style={{ height: 35, width: 35 }} 
                    />
                    <SocialIcon 
                        url='https://www.linkedin.com/' 
                        className='linkedin' 
                        target='_blank' 
                        fgColor='#fff' 
                        style={{ height: 35, width: 35 }} 
                    /> */

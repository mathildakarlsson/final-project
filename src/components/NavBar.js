import React from 'react';
import { NavLink } from 'react-router-dom'; 
import styled from 'styled-components';
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

                        <NavLink to='/wishlist' 
                            activeClassName='active'
                            style={linkStyle}
                        >
                            Wishlist
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
                    </LinkContainer>
            </NavContainer>
        </Header>
    )
};

export default NavBar;

const Header = styled.header `
    display: flex;
    justify-content: flex-end;
    `

const NavContainer = styled.nav`
    display: flex;
`

const LogoContainer = styled.div `
    margin-top: 10px;

`

const LinkContainer = styled.div `
    display: flex;
    gap: 30px;
    margin: 10px 15px;
`

const linkStyle = {
    color: "black",
    fontSize: "20px",
    fontWeight: "300",
    alignSelf: "right",
}

const logoStyle = {
    color: "black",
    fontSize: "20px",
    fontWeight: "300",
    alignSelf: "left",
}




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

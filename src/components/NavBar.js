import React from 'react';
import { NavLink } from 'react-router-dom'; 
import styled from 'styled-components';
// import HamburgerMenu from '../assets/Logos/icons8-menu.svg'
// import { SocialIcon } from 'react-social-icons';
import logo from '../assets/NSDlogga.png';
import { MdMenu } from 'react-icons/md'
import { GiFallingStar } from 'react-icons/gi'
import { Link } from 'react-router-dom'; 
// import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux'
// import { ui } from '../reducers/ui'
import { TotalWishlistItems } from "./TotalWishlistItems";


const Nav = styled.nav`
    background: #F1EEEB;
    display: flex;
    overflow: scroll;
    justify-content: space-between;
    position: fixed;
    width: 100vw;
    height: 15vh;
    z-index: 999;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
`

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media (min-width: 668px) {
    max-width: 1300px;
  }
`

const LogoContainer = styled.div `
    margin: 0 20px 10px 20px;
    padding: 0;
`

const LinkContainer = styled.div `
    display: flex;
    gap: 30px;
    margin: 45px 70px 0px 0;
    z-index: 999;
`

const Hamburger = styled.div`
display: block;
position: absolute;
top: 0;
right: 0;
  transform: translate(-100%, 70%);
  font-size: 2.5rem;
  cursor: pointer;
  @media (min-width: 668px) {
    display: none;
  }
`

const HamburgerIcon = styled(MdMenu)`
  cursor: pointer;
  color: #fff;
`

const StarIcon = styled(GiFallingStar)`
  cursor: pointer;
  color: #fff;
  font-size: 2.5rem;

`

const NavMenu = styled.ul`
  display: none;
  @media (min-width: 668px) {
    display: flex;
    align-items: center;

  }
`

const NavLinks = styled(Link)`
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
  cursor: pointer;
  :hover {
    border-bottom: 3px solid white;
  }
`
const StarLink = styled(Link)`
display: block;
position: absolute;
top: 2rem;
right: 5rem;
transform: translate(-50%, 25%);
  @media (min-width: 668px) {  
      display: none;
}
`

const linkStyle = {
    color: "black",
    fontSize: "15px",
    fontWeight: "300",
    textTransform: "uppercase",
}

const logoStyle = {
    height: "auto",
    width: "140px",
    // margin: "0 20px 10px 20px",
}


const NavBar = ({ toggle }) => {

    return (
        <Nav>
            <NavContainer>
                    <LogoContainer>
                        <NavLink
                            to='/' 
                        >
                            <img 
                                src={logo}
                                className="logo"
                                style={logoStyle}
                                alt="logo"
                            />
                        </NavLink>
                    </LogoContainer>

                    <LinkContainer>

                    <Hamburger onClick={toggle}>
                    <HamburgerIcon />
                  </Hamburger>
                  <StarLink to='/wishlist' 
                            activeClassName='active'
                            style={linkStyle}
                        >
                        <TotalWishlistItems />
                        <StarIcon />
                        </StarLink>
                    <NavMenu>

                        <NavLinks to='/rentals' 
                            activeClassName='active'
                            style={linkStyle}
                        >
                            Hyrsaker
                        </NavLinks>
                        <NavLinks to='/flowers' 
                            activeClassName='active'
                            style={linkStyle}
                        >
                            Blommor
                        </NavLinks>
                        <NavLinks to='/services' 
                            activeClassName='active'
                            style={linkStyle}
                        >
                            Tjänster
                        </NavLinks>
                        <NavLinks to='/about' 
                            activeClassName='active'
                            style={linkStyle}
                        >
                            Om oss
                        </NavLinks>
                        <NavLinks to='/contact' 
                            activeClassName='active'
                            style={linkStyle}
                        >
                            Kontakt
                        </NavLinks>
                        <NavLinks to='/wishlist' 
                            activeClassName='active'
                            style={linkStyle}
                        >
                            Önskelista
                            <TotalWishlistItems />
                        </NavLinks>
                    </NavMenu>
                    </LinkContainer>
               
            </NavContainer>
        </Nav>
    )
};

export default NavBar;

// const logoStyle = {
//     width: "50px",
//     height: "70px",
// }

/* <Hamburger src={HamburgerMenu}/> */
                /* <PersistentDrawerRight/> */


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

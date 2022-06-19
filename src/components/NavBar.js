import React from 'react';
import { NavLink } from 'react-router-dom'; 
import styled from 'styled-components';
// import HamburgerMenu from '../assets/Logos/icons8-menu.svg'
// import { SocialIcon } from 'react-social-icons';
import logo from '../assets/NSDlogga.png';
import { MdMenu } from 'react-icons/md'
import { Link } from 'react-router-dom'; 
// import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux'
// import { ui } from '../reducers/ui'
import { TotalWishlistItems } from "./TotalWishlistItems";


const Nav = styled.nav`
  background: #F1EEEB;
  display: flex;
  justify-content: space-between;
  position: fixed;
    width: 100vw;
    height: 17vh;
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
    margin: 10px 20px 0 20px;
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
const linkStyle = {
    color: "black",
    fontSize: "15px",
    fontWeight: "300",
    textTransform: "uppercase",
}


// const BagButton = styled.button`
//   font-family: 'Roboto', sans-serif;
//   background: none;
//   font-size: 16px;
//   border: none;
//   margin-left: 10px;
//   padding: 0;
//   outline: none;
//   transition: all .2s ease-in-out; 
//   &:hover {
//     cursor: pointer;
//     color: #ecd6ba;
//   }
// `

const NavBar = ({ toggle }) => {

    // const dispatch = useDispatch()
    // const totalItems = useSelector((store) => (
    //   store.cart.items.reduce((total, item) => (total + (item.quantity)), 0)))

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
                                style={linkStyle}
                                alt="logo"
                            />
                        </NavLink>
                    </LogoContainer>

                    <LinkContainer>

                    <Hamburger onClick={toggle}>
                    <HamburgerIcon />
                  </Hamburger>

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
                            Varukorg
                            <TotalWishlistItems />
                        </NavLinks>
                        

                        {/* <BagButton onClick={() => dispatch(ui.actions.openCart())}>Cart({totalItems})</BagButton> */}
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

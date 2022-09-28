import React from 'react';
import { NavLink } from 'react-router-dom'; 
import styled from 'styled-components';
import logo from '../assets/NSDlogga.png';
import { MdMenu } from 'react-icons/md'
import { BsFillBasket3Fill } from 'react-icons/bs'
import { Link } from 'react-router-dom'; 
import { TotalWishlistItems } from "./TotalWishlistItems";


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
                                alt="Nordic Spells Decor logotype"
                            />
                        </NavLink>
                    </LogoContainer>

                    <LinkContainer>
                        <Hamburger onClick={toggle}>
                            <HamburgerIcon />
                        </Hamburger>
                        <BasketLink to='/wishlist' 
                            activeClassName='active'
                            style={linkStyle}
                            alt="wishlist"
                            >
                                <div>
                                    <TotalWishlistItems />
                                </div>
                                <div>
                                    <BasketIcon />
                                </div>
                        </BasketLink>
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


const Nav = styled.nav`
    background: #F1EEEB;
    display: flex;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    max-height: 120px;
    z-index: 999;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
    top: 0;
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
    margin: 0 20px 5px 20px;
    padding: 0;
`

const LinkContainer = styled.div `
    display: flex;
    margin-right: 70px;
    z-index: 999;
    align-items: center;
`

const Hamburger = styled.div`
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 70%);
    font-size: 2.5rem;
    cursor: pointer;
    
    @media (min-width: 830px) {
        display: none;
    }
`

const HamburgerIcon = styled(MdMenu)`
    cursor: pointer;
    color: #fff;
`

const BasketIcon = styled(BsFillBasket3Fill)`
    cursor: pointer;
    color: #6E6D6C;
    font-size: 1.5rem;
`

const NavMenu = styled.ul`
    display: none;
  
    @media (min-width: 830px) {
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
const BasketLink = styled(Link)`
    transform: translate(-50%, 25%);
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-right: 10px;
    
    @media (min-width: 830px) {  
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
}
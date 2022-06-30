import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { MdClose } from 'react-icons/md'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <div>
      <SidebarContainer 
        isOpen={isOpen} 
        onClick={toggle}
      >
        <ClosingIcon onClick={toggle}>
          <HamburgerClosingIcon />
        </ClosingIcon>
          <SidebarList>
            <SideLinks to='/'>
              Hem
            </SideLinks>
            <SideLinks to='/rentals'>
            Hyrsaker 
            </SideLinks>
            <SideLinks to='/flowers'>
              Blommor
            </SideLinks>
            <SideLinks to='/services'>
              Tjänster
            </SideLinks> 
            <SideLinks to='/about'>
              Om oss
            </SideLinks>
            <SideLinks to='/contact'>
              Kontakt
            </SideLinks> 
            <SideLinks to='/wishlist'>
              Önskelista
            </SideLinks>

          </SidebarList>
      </SidebarContainer>
    </div>
  )
}

export default Sidebar;

const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 1000;
    width: 100%;
    height: 100%;
    background: #F1EEEB;
    display: grid;
    align-items: center;
    transition: 0.5s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`
const HamburgerClosingIcon = styled(MdClose)`
    cursor: pointer;
    color: #6E6D6C;
`

const ClosingIcon = styled.div`
    position: absolute;
    top: 2rem;
    right: 2rem;
    background: transparent;
    font-size: 3rem;
`

const SidebarList = styled.ul`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1.5rem;
    text-align: center;
`

const SideLinks = styled(Link)`
    font-size: 1.5rem;
    text-decoration: none;
    color: #6E6D6C;
    cursor: pointer;
    
    &:hover {
        color: #B3635A;
        transition: 0.3s ease-in-out;
    }
`

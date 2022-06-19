import React, { useState } from 'react'

import NavBar from './NavBar'
import Sidebar from './Sidebar'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return(
    <>
      <Sidebar 
        isOpen={isOpen} 
        toggle={toggle}
      />
      <NavBar toggle={toggle}/>
    </>
  )
}

export default Header;
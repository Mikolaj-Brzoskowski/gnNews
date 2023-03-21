import React from 'react'
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons";

const SideMenu = () => {
  return (
    <>
      <IconContext.Provider value={{size: '36px'}}>
        <FaBars/>
      </IconContext.Provider> 
    </>
  )
}

export default SideMenu
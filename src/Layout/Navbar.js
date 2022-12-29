import { useState } from "react";
import React from 'react';
import "../mainStylePage.css"
import { NavbarContainer, NavbarItem } from "./Layout.style";
import { Link, useLocation } from "react-router-dom";

//Navbar components



function Navbar() {
  const [navbarItems,setNavbarItem]=useState([
    {route:"/",roueName:"Home"},
    {route:"/cocktailes",roueName:"Cocktail's"},
    {route:"/About",roueName:"About"}
  ])

  const location = useLocation();

  return (
    <> 
          <NavbarContainer> 
             {navbarItems.map((link, index) => (
          <NavbarItem className="NavbarItam" active={location.pathname === link.route} key={index}>
            <Link to={link.route}>
             {link.roueName}
              </Link>
          </NavbarItem>
        ))}
        </NavbarContainer>     
    </>
  )
}

export default Navbar
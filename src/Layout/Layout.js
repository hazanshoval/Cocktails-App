import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { NavbarContainer,MainContainer } from "./Layout.style";

const Layout = () => {
  return (
    <>  <MainContainer>
        <NavbarContainer>
    <Navbar />
        </NavbarContainer>
      <Outlet />
      </MainContainer>
  </> 
  )
}

export default Layout
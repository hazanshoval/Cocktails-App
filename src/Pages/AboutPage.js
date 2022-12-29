import React from 'react';
import imgOfMe from "../images/profile.png"
import {MainContainer,HelloMessage,AboutMeInfo,MyName,AboutMe,ProfileImg} from "./AboutPage.style"

function AboutPage() {
  return (
<>
    <MainContainer>
    <HelloMessage>Hello!</HelloMessage>
    <AboutMeInfo>
      <MyName> <img src={imgOfMe} alt="profile"/> I`M SHOVAL</MyName>
      <AboutMe>Hello everyone, my name is Shoval, 21 years old from the far north - works at the Alber car agency, is currently studying FULLSTUCK and aspires to work in the field.
               But until that happens let's have some drinks - enjoy :)</AboutMe>
    </AboutMeInfo>
    </MainContainer>
    <ProfileImg></ProfileImg>
</>
  )
}

export default AboutPage
import React from 'react'
import {Maincontainer,Title,SubText,Button,HomeContainer} from "./HomePage.style"
import { Link } from "react-router-dom";

function HomePage() {
  return (
  <HomeContainer>    
    <img className='editCocktailImg' src="https://i.pinimg.com/originals/0b/c7/ea/0bc7ea05ea41334aca657b368743e357.jpg" alt="cocktailImage" />;
    <Maincontainer>
      <Title>COCKTAILES</Title>
      <SubText>Welcome to our website
         presents you with many recipes for AMAIZING Cocktails - with our help 
         you can diversify your world of drinks, ENJOY</SubText>
      <Link to={"/cocktailes"}>
       <Button>BOOK NOW</Button> 
        </Link>
    </Maincontainer>
    <img className='editCocktailImg' src="https://media.istockphoto.com/vectors/mojito-cocktail-with-fresh-sliced-lime-vector-id689967444?k=6&m=689967444&s=612x612&w=0&h=92fEdR5kNfbEmj2GA_93DIlqClLo2xg45uTeCdlSVrw=" alt="cocktailImage" />;
    </HomeContainer>
  )
}

export default HomePage
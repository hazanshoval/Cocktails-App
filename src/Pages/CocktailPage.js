import React,{useEffect,useState} from "react";
import { Card,CardActions,CardContent,CardMedia,Button,Typography } from "@mui/material";
import {GetRandomCocktail} from "../services/random-cocktail-service"
import { MainContainer } from "./CocktailPage.style";
import { Link } from "react-router-dom";
import "../mainStylePage.css";


function CocktailPage() {
  
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
     async function fetchCocktailes() {
      const data = await GetRandomCocktail();
      setCocktails(data);
      console.log(data)
    }
    fetchCocktailes();
  }, []);

  return (
    <MainContainer>
    {cocktails.map((cocktail, index) => (
    <Card key={index}
    sx={{ maxWidth: 345,
      width:250,
      marginTop:5}}>
    <CardMedia
     sx={{borderRadius:"0"}}
      component="img"
      height="100"
      image={cocktail.strDrinkThumb}
      alt={cocktail.strDrink}
    />
      <CardContent> 
      <Typography gutterBottom variant="h5" component="div">
      {cocktail.strDrink}
      </Typography>
      <Typography variant="body2" color="text.secondary">
      {cocktail.strInstructions}
      </Typography>
    </CardContent>
    <CardActions>
      <Link to={"/InformationOnCocktail"}>
      <Button size="small">Learn More</Button>
      </Link>
    </CardActions>
  </Card>
      ))}
      </MainContainer>
  )
}

export default CocktailPage
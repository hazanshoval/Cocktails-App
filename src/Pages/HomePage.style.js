import "../mainStylePage.css"
import styled from "@emotion/styled";

export const Maincontainer=styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`

export const Title=styled.h1`
 font-family:var(--title--home--page);
 font-size:65px;
 margin-top:80px;
`
export const SubText=styled.p`
font-family:var(--sub--text--home--page);
width:400px;
font-size:20px;
font-weight:bolder;
`
export const Button=styled.button`
font-family:var(--navbar--font);
width:90px;
height:35px;
background-color:var(--btn-background--color);
color:#ffffff;
border:none;
font-size:10px;
border-radius:3px;
margin-top:35px;
cursor:pointer;
`
export const CocktailImage=styled.image`
width:400px;
height:60px;
`

export const HomeContainer=styled.div`
display:flex;
align-items:center;
justify-content:center;
`
import "../mainStylePage.css"
import styled from "@emotion/styled";

export const NavbarContainer=styled.div`
width:70vw;
display:flex;
align-items:center;
justify-content:space-evenly;
`

export const NavbarItem=styled.li`
font-family:var( --navbar--font);
list-style: none;
margin-top:30px;
width:100vw;
color:#000000;
border-bottom: ${({ active }) =>
    active ? "2px solid var(--btn-background--color)" : "none"};
`

export const MainContainer=styled.div`
width:70vw;
height:80%;
background-image:url("https://img.freepik.com/free-vector/pink-watercolor-leaves-background_23-2148907681.jpg") ;
text-align:center;
margin:80px 15%
`


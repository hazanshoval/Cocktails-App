import React from "react";
import "./mainStylePage.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import AboutPage from "./Pages/AboutPage";
import CocktailPage from "./Pages/CocktailPage";
import HomePage from "./Pages/HomePage";
import InformationOnCocktail from "./Pages/InformationOnCocktail";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/cocktailes" element={<CocktailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/InformationOnCocktail" element={<InformationOnCocktail/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>   
  );
}

export default App;

import React from "react"
import Header from "./Components/Header"
import SobrePage from "./Components/SobrePage";
import FormaçãoPage from "./Components/FormaçãoPage";
import EventosPage from "./Components/EventosPage";
import Footer from "./Components/Footer"
import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   
  }
`;
export default function App() {
  

  return (
    <>
      <GlobalStyle />
      <Header/>
      <SobrePage/>
      <FormaçãoPage/>
      <EventosPage/>
      <Footer/>
    </>
  )
}
import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { Navbar } from './Navbar/Navbar'
import { Title } from './styles/title'
import { Banner } from './Banner/Banner'
import {Menu} from './Menu/Menu'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Open Sans', sans-serif;
  }
  
  h1, h2, h3 {
    font-family: 'Righteous', cursive;
    margin: 20px 0;
  }
`

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Banner />
      <Menu />
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, voluptatem!</p>
    </>
  );
}

export default App;

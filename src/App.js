import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { Navbar } from './Navbar/Navbar'
import { Title } from './styles/title'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }
  
  h1, h2, h3 {
    font-family: 'Righteous', cursive;
  }
`

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, voluptatem!</p>
    </>
  );
}

export default App;

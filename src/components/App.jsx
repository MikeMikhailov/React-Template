import React from 'react';
import styled, { createGlobalStyle } from 'styled-components/macro';
import { Normalize } from 'styled-normalize';
import fontFaces from '../fonts/fontSetup';

const GlobalStyle = createGlobalStyle`
${fontFaces}
  body {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  background-color: #f1f2f6;
  font-family: 'Open Sans', sans-serif;
  margin: 0;
  font-size: 24px;
}
`;

const Container = styled.div`
  width: 100%;
  text-align: center;
`;

function App() {
  return (
    <>
      <Normalize />
      <GlobalStyle />
      <Container>
        <h1>Hello There</h1>
        <p>General Kenobi!</p>
      </Container>
    </>
  );
}
export default App;

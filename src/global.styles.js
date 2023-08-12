import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body {
    margin: 0;
    font-family: 'Open Sans',
      sans-serif;
    // padding: 20px 40px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: rgb(0,19,36);
    background: radial-gradient(circle, rgba(0,19,36,0.1741946778711485) 0%, rgba(163,208,249,0) 47%, rgba(0,212,255,0.2806372549019608) 100%);
    
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  
  a {
    text-decoration: none;
    color: black;
  }
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`
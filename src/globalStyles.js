import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root{
  --softBlue: hsl(215, 51%, 70%);
  --cyan:hsl(178, 100%, 50%);
  --mainBG: hsl(217, 54%, 11%);
  --cardBG:  hsl(216, 50%, 16%);
  --line:hsl(215, 32%, 27%) ;
  --white:hsl(0, 0%, 100%);
  --fontSize:18px; 
}

body{
  font-family: 'Outfit', sans-serif;
  background-color: var(--mainBG);
  
  display:flex; 
  justify-content:center;
  align-items:center;
  height:100vh;
  
}


`;

export default GlobalStyle;

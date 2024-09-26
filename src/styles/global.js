import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
margin:0;
padding:0;
box-sizing: border-box;
font-size: 62.5%;
}
body{
      width: 100%;
      padding: 0;
      margin:0;
;
color:${({ theme }) => theme.COLORS.WHITE};
-webkit-font-smoothing: antialiased;
}
body, input, button, textarea {
font-family:'Roboto Slab', sans-serif;
outline: none;
}

a {
text-decoration: none;

}
h1{
      color: ${({ theme }) => theme.COLORS.PINK};
      font-size: 3rem;
}

button, a {
cursor: pointer; 
transition: filter 0.2s;
background: none;
      border: none;
      padding: 0;
      margin: 0;
      font: inherit;
      color: inherit;
      cursor: pointer;
      outline: none;
      font-size: 2.7rem;
} 

button:hover, a:hover {
filter:brightness(0.9);
}

`;

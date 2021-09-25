import { createGlobalStyle } from "styled-components";
import bckground from "../img/bckground.jpg";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
}

html{
    &::-webkit-scrollbar{
        width: .5rem;
        background: #d6d1d1;
    }
    &::-webkit-scrollbar-thumb{
        background: #6d0000f6;
        border-radius: 1rem;
    }
    &::-webkit-scrollbar-track {
    background: #292828;
  }
    body{
        font-family: 'Montserrat', sans-serif;
        background-image: url(${bckground});
        /* background-image: linear-gradient(to right,#A8927B 35%, #030201 45%); */
       
    }
}

h2{
    font-size: 3rem;
    color: #ffffff;
}

h3{
    font-size: 1.3rem;
    color: #f3f3f3;
    padding: 1.4rem;
}

p{
    font-size: 1.2rem;
    line-height: 200%;
    color: #ffffff
}
img{
    display:block;
}

a{
    text-decoration: none;
    color: #333;
}
`;

export default GlobalStyle;

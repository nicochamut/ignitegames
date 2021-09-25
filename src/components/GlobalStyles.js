import { createGlobalStyle } from "styled-components";
import bckground from "../img/bckground.jpg";
import bckground2 from "../img/bckground2.jpg";
import bckground3 from "../img/bckground3.jpg";

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
        background: #3c194b;
        border-radius: 1rem;
    }
    body{
        font-family: 'Montserrat', sans-serif;
        background-color: #7EDFD0;
        background-size: 50%;
    }
}

h2{
    font-size: 3rem;
    color: #505050;
}

h3{
    font-size: 1.3rem;
    color: #000000;
    padding: 1.4rem;
}

p{
    font-size: 1.2rem;
    line-height: 200%;
    color: #4b4a4a
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

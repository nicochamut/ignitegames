import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }
    html{
        &::-webkit-scrollbar{
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color: darkgrey;
        }
        &::-webkit-scrollbar-track {
    background: white;
  }
    }
    body{
        font-family: 'Montserrat', sans-serif;
        width: 100%;
        background-image: linear-gradient(to right,#1b1b1b 40%, #030303)
    }
    h2{
        font-size: 3rem;
        font-family: 'Abril Fatface', cursive;
        font-weight: lighter;
        color: #ffffff;
    }
    h3{
        font-size: 1.3rem;
        color: #000000;
        padding: 1.5rem 0rem;
    }
    p{
        font-size: 1.2rem;
        line-height: 200%;
        color: #363636;
    }
    a{
        text-decoration: none;
        color: #333;
    }
    img{
        display: block;
    }
    input{
        font-weight: bold;
    font-family: "Montserrat", sans-serif;
    }

    @media screen and (max-width: 480px){
        h2{
            font-size: 1.5rem;
            text-align: center;
        }
       
    }
`;

export default GlobalStyles;

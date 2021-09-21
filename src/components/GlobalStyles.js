import { createGlobalStyle } from "styled-components";

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
        background: linear-gradient(45deg, #9793aa, #3c194b, black);
    }
}

h2{
    font-size: 3rem;
    color: #f8f8fa;
}

h3{
    font-size: 1.3rem;
    color: #fff;
    padding: 1.4rem;
}

p{
    font-size: 1.2rem;
    line-height: 200%;
    color: #696969
}

a{
    text-decoration: none;
    color: #333;
}
`;

export default GlobalStyle;

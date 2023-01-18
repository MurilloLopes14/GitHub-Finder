import { createGlobalStyle } from "styled-components";
import backgroundImage from "./Assets/backgroundImage.jpg";

const GlobalStyle = createGlobalStyle`
    :root{
        --Font: "Poppins";
        --color1: #9CB9C9;
        --color2: #868B9A;
        --color3: #1A1E2C;
        --color4: #131417;
    }

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: var(--Font);
        color: var(--color1);
        
    }

    body{
        min-height: 100vh;
        background-image: url(${backgroundImage});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        padding: 2rem;
    }

    a{
        text-decoration: none;
    }

    p{
        text-align: center;
    }

    ul, li, ol{
        list-style: none;
    }

    input, textarea{
        outline: none;
    }

    .App{
        max-width: 500px;
        margin: 0 auto;

        h1{
            text-align: center;
            margin-bottom: 1rem;
        }
    }

`;

export default GlobalStyle;

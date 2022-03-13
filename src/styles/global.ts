import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background: none;
        border: none;
        outline: none;
        list-style: none;
        text-decoration: none;
        font-family: 'Montserrat', sans-serif;
        color: ${(props) => props.theme.colors.title};
    }
    body{
        background: ${(props) => props.theme.colors.background};
        transition: background-color .6s;
    }
    html{
        font-size: 62.5%;
        @media (max-width: 660px){
            font-size: 50%;
        }
    }
    section{
        width: 100%;
    }
`;

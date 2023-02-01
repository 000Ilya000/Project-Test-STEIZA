import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    body {
        min-height: 100vh;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    html {
        min-width:350px
    }

    p, a{
        font-family: 'AvenirNextRegular';
        text-decoration: none;
    };
`;
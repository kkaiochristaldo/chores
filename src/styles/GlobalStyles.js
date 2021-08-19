
    import { createGlobalStyle } from 'styled-components';
    
    export const GlobalStyles = createGlobalStyle`
        
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

        :root {
            --black-primary: #2C2C2C;
            --black-secundary: #232323;
            --purple-primary: #5D38FF;
            --white-primary: #F1F1F1;
            --white-secundary: #A8A8A8;
        }

        *, body {
            padding: 0;
            margin: 0;
            outline: 0;
            box-sizing: border-box;
            font-family: 'Roboto', sans-serif;
        }

        html, body, #root {
            height: 100vh;
        }

        body {
            background-color: var(--black-secundary);
            font-family: 'Roboto', sans-serif;
            font-size: 14px;
            -webkit-font-smoothing: antialiased !important;
            color: var(--white-primary);
        }

        ul {
            list-style: none;
        }
    `;
    
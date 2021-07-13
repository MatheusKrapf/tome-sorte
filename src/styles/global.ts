﻿import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        /* background-color: #E5E5E5; */
    }

    html {
        overflow-y: auto;
        overflow-x: hidden;
        -webkit-font-smoothing: antialiased;
    }

    body {
        overflow-y: auto;
        overflow-x: hidden;
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font-family: 'Mulish', sans-serif;
        font-size: 16px;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 700;
    }

    button {
        cursor: pointer;
    }

`

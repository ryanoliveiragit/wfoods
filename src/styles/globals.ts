import { createGlobalStyle } from "styled-components";
import "keen-slider/keen-slider.min.css"
import "primereact/resources/themes/lara-light-indigo/theme.css"; 
import "primereact/resources/primereact.min.css";      
export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'DM Sans', sans-serif;
        -webkit-font-smoothing: antialiased;
    }

    .p-button-label{
    font-size: 14px!important;
    font-weight: 400!important;
  }
`
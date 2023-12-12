import { createGlobalStyle } from "styled-components"

import styled from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    padding:0;
    margin:0;
    box-sizing:border-box;
    font-family: arial, sans-serif;
    
}

body{
    padding-top:80px;
}

`

export const Container = styled.div`

max-width:1024px;
width:100%;
margin:0 auto;
display:grid;
grid-template-columns: 180px auto;

@media screen and (max-width:768px){
    max-width:80%;
    width:100%;
    display:block

  
    }
}


`


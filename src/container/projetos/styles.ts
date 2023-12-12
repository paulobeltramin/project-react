import styled from "styled-components";

export const ProjectsStyles = styled.div`
 
display:grid;
grid-template-columns:1fr 1fr 1fr;
row-gap:36px;
column-gap:36px;
margin:0 auto;
list-style:none;
line-height: 30px;

@media screen and (max-width:768px){
    display:grid;
    grid-template-columns:1fr;
    row-gap:36px;
}

h3{
    padding-bottom:24px;
}

`

export const Line = styled.li`
 border:1px solid grey;
 padding:24px;
`


export const ButtonLink = styled.a`
 padding:8px 32px;
 background-color: #0099CC;
 color: black;
 font-weight:bold;
 border-radius:8px;
 font-size:16px;
 text-decoration:none;
 color:#FFF;
 display:inline-block;

`
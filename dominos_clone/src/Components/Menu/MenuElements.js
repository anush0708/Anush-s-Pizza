
import styled from "styled-components";

export const MenuContainer=styled.section`
display: flex;
flex-direction: column;
align-items: center;
min-height:30vh ;
width: 100%;
background:#150f0f;
h3{
    color: white;
    font-size: clamp(2rem,2.5vw,3rem);
    text-align:center;
    margin-bottom: 3rem;
}

`
export const Catagories=styled.div`
display: flex;
width: 100%;
flex-wrap: wrap;
justify-content: space-evenly;
align-content: center;
min-height:20vh;
`
export const CatagoryCard=styled.div`
display: flex;
flex-direction: column;
align-items: center;
width:120px;
height: 120px;
`

export const CatagoryItem=styled.img`
    height: 80px;
    width:80px;
    border-radius: 30px;
    display: flex;
  
    background-size: cover;
    flex-direction: column;
    &:hover{
        cursor: pointer;
        height: 90px;
        width:90px;
        border-radius: 35px;
        box-shadow: 3px 3px 3px #fdc500;
        transition: 0.2s ease-out;
    }
`
export const CatagoryName=styled.p`
color: white;
height: 15px;
text-align: center;
`

export const SearchContainer=styled.div`
height:10rem;
width:100%;
background-color:black;
display:flex ; 
flex-wrap:wrap ;
justify-content:center;
align-items:center ;
`

export const SearchLabel=styled.label` 

color:white ;
min-width:20rem ;
height:4rem ;
text-align:center ;
font-size:2rem ;
padding:5px;
`
export const SearchWrapper=styled.div`

display:flex ;

flex-direction:column ;

position:relative;
`
export const SearchText=styled.input` 

background-color:white;
border-radius:15px;
border-style:none;
height:3rem ;
padding:5px 5px;
width:25rem;

color:black ;


`

export const SearchResults=styled.div` 
position: absolute;
top:3.1rem ;
border-radius:5px;
height:${({len})=>len>0?`${1.5*len}rem`:`2rem`};
width:30rem;
min-width:25rem ;
display:flex ;
flex-direction:column;
background-color:white;

`
export const SearchResultItems=styled.li` 
color:black ;
font-size: 1rem;
width:100% ;
list-style:none ;
`

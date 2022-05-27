import styled from "styled-components";
export const Form=styled.form`
display: flex;
padding: 10% 10%;
flex-direction: column;
flex-wrap: wrap;
align-items: center;
justify-content: center;
width: 100%;
height: 100%;
`
export const Button=styled.button`
border-radius: 3px;
margin-top: 20px;
padding: 2px 15px;
&:hover{
    cursor: pointer;
}
`
export const Header=styled.div`
width: 100%;
height:70px;
display: flex;
align-items: center;
justify-content: center;
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
p{
 color: black;
 width:90px;
 &:hover{
     cursor: pointer;
     font-size:20px;
 }
}

`

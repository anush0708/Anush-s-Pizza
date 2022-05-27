import styled from 'styled-components';
import imgBg from '../../Images/featured3.jpg';

export const FeatureContainer = styled.div`
background: linear-gradient(to right,rgba(0,0,0,0.7),rgba(0,0,0,0.1)),url(${imgBg});
height: 100vh;
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
background-position: center;
background-size: cover;
p{
    font-size:clamp(1rem,10vw,2rem);
    color:white;
}
h1{
font-size:clamp(1.5rem,10vw,3rem);
margin-bottom: 1rem;
color:white;
letter-spacing: 3px;
}
`;
export const FeatureButton = styled.button`
font-size:1rem;
padding: 1rem 3rem;
border: none;
background:#e31837;
color:#fff;
transition:0.3s ease-out;
&:hover{
    background:#ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color:#000;
}
`;


import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  background-color: #0d0909;
  bottom: 1px;
  justify-content: end;
`;

export const LocationWrapper=styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  width: 100%;
  margin: 16px auto 0 auto;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
  p{
    color: white;
  }
`
export const Heading =styled.p`
font-size:1.5rem;
color: white;
`
export const FooterDeleveryLocations=styled.div`
display: flex;
flex-wrap: wrap;

`
export const LocationData=styled.p`
color:white;
font-size:1rem;
flex-basis: 33.333333%;
`

export const TermsWrapper=styled.section`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  width: 100%;
  margin: 16px auto 0 auto;
 
`
export const TermsContent=styled.div`

flex-basis:33.33%;
p{
  font-size: 1rem;
  color:white;
}
`
export const TermData=styled.p`
font-size: 0.5rem;
`

export const FooterWrap = styled.div`
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
`;

export const SocialMedia = styled.section`
  max-width: 1300px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 16px auto 0 auto;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;
export const ContactContainer=styled.div` 
display: flex;
align-items: center;
justify-content: center;
flex-direction:column;
h3{
  color: gold;
  padding:1rem 0;
}
form{
  display: flex;
  flex-direction: row;
  padding:1rem 0;
  color:white;
}
input{
  margin:0 2rem;
}
div{
  width: 60px;
  height: 2px ;
  background: gold;
}
button{
  border-radius: 5px;
  text-decoration: none;
  width: 50px;
  background: white;
  transition:all .5s;
  :hover{
    color: white;
    background:black;
    cursor: pointer;
  }
}
`
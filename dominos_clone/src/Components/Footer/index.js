import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Locations } from './data'
import {FooterContainer,FooterWrap,LocationWrapper,
    FooterDeleveryLocations,LocationData,SocialMedia,
    SocialMediaWrap,SocialLogo,SocialIcons,SocialIconLink,
    TermsWrapper,TermsContent,TermData,Heading,ContactContainer } from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <ContactContainer>
                <h3>Contact US</h3>
                <div/>
                <form>
                <label>EMAIL</label>
                <input type="email"/>
                <button type="submit" >GO</button>
                </form>
            </ContactContainer>
            <FooterWrap>
                <LocationWrapper>
                    <p>We delever to... </p>
                    <FooterDeleveryLocations>
                    {Locations.map((loc)=><LocationData key={loc}>{loc} </LocationData> )}
                    </FooterDeleveryLocations>
                </LocationWrapper>
                <TermsWrapper>
                    <TermsContent>
                        <Heading>Online </Heading>
                        <TermData>Order Pizza Online </TermData>
                        <TermData>Order Cheese Burst Pizza Online </TermData>
                    </TermsContent>
                    <TermsContent>
                        <Heading>Legal </Heading>
                        <TermData>Privacy Policy</TermData> 0
                        <TermData>Terms & Conditions</TermData> 
                    </TermsContent>
                    <TermsContent>
                        <Heading>Contact us </Heading>
                        <TermData>Party Orders </TermData>
                    </TermsContent>
                </TermsWrapper>
               
                    
                
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>Pizza</SocialLogo>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook" rel="noopener noreferrer">
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram" rel="noopener noreferrer"> 
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Youtube" rel="noopener noreferrer">
                                <FaYoutube/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter" rel="noopener noreferrer">
                                <FaTwitter/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Linkdin" rel="noopener noreferrer">
                                <FaLinkedin/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer

import React ,{useState}  from 'react'
import { HeroContainer,HeroContent,HeroItems,HeroH1,HeroP,HeroBtn } from './heroElements'
import NavBar from '../NavBar'
import SideBar from '../SideBar'
const Hero = () => {
    const [isOpen,setIsOpen]=useState(false)
    const toggle=()=>{
        setIsOpen(!isOpen)
    }

    return (
        <div>
             
            <HeroContainer>
            <NavBar toggle={toggle}/>
            <SideBar isOpen={isOpen} toggle={toggle} />
            <HeroContent>
                <HeroItems>
                    <HeroH1>Greatest Pizza Ever</HeroH1>
                    <HeroP>Ready in 60Sec </HeroP>
                    <HeroBtn> Place Order </HeroBtn>
                </HeroItems>
            </HeroContent>

            </HeroContainer>


        </div>
    )
}

export default Hero

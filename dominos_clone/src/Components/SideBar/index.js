import React from 'react'
import {SideBarContainer,
    Icon,
    CloseIcon,
    SideBarMenu,
    SideBarLink,
    SideBarRoute,
    SideBtnWrap
} from "./SideBarElements"
const SideBar = ({isOpen,toggle}) => {
    return (
        <SideBarContainer isOpen={isOpen} >
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SideBarMenu>
                <SideBarLink to='/menu'>Pizzas</SideBarLink>
                <SideBarLink to='/menu'>Desserts </SideBarLink>
                <SideBarLink to='/menu'>Full Menu</SideBarLink>
            </SideBarMenu>
            <SideBtnWrap>
                <SideBarRoute to='/'>Order Now</SideBarRoute>
            </SideBtnWrap>
        </SideBarContainer>
    )
}

export default SideBar

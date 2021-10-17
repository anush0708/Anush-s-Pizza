import React,{useState} from 'react'
import {MenuContainer,Catagories,CatagoryItem,CatagoryName,CatagoryCard} from './MenuElements'
import {productData,productDataTwo,topSweets,topPizzas} from '../Products/Data'
import Prodcuts from '../Products';
import { ProductsHeading } from '../Products/ProductElements';
import { useSelector } from 'react-redux';
const Menu = ({updateCart}) => {
    const [catagory,setCatagory] =useState("pizza");

    const toggleCatagory=(catagoryType)=>{
        setCatagory(catagoryType);
    }
    const MongoPizzaData=useSelector(state=>state.productDetails)
    return (
        <MenuContainer>
            <h3>Catagories </h3>
            <Catagories>
                <CatagoryCard>
                <CatagoryItem src={productData[1].img} alt="Pizza" onClick={()=>toggleCatagory("pizza")}/>
                <CatagoryName>pizza</CatagoryName>
                </CatagoryCard>
                <CatagoryCard>
                <CatagoryItem src={productData[2].img} alt="Deserts" onClick={()=>toggleCatagory("deserts")}/>
                <CatagoryName>Deserts</CatagoryName>
                </CatagoryCard>
                <CatagoryCard>
                <CatagoryItem src={productData[3].img} alt="Milkshake" onClick={()=>toggleCatagory("milkshake")}/>
                <CatagoryName>Milkshake</CatagoryName>
                </CatagoryCard>
                <CatagoryCard>
                <CatagoryItem src={productData[4].img} alt="Cakes" onClick={()=>toggleCatagory("sweets")}/>
                <CatagoryName>Cakes</CatagoryName>
                </CatagoryCard>
            </Catagories>
            { catagory==="pizza"?<Prodcuts heading="All varients Pizza" data={MongoPizzaData} updateCart={updateCart}/>:<></> }
            { catagory==="milkshake"?<Prodcuts heading="All varients Milkshake" data={productDataTwo} updateCart={updateCart}/>:<></> }
            { catagory==="deserts"?<Prodcuts heading="All varients Deserts" data={topPizzas} updateCart={updateCart}/>:<></> }
            { catagory==="sweets"?<Prodcuts heading="All varients Cakes" data={topSweets} updateCart={updateCart}/>:<></> }
        </MenuContainer>
    )
}

export default Menu

import React,{useState} from 'react'
import {MenuContainer,Catagories,CatagoryItem,CatagoryName,CatagoryCard} from './MenuElements'
// import {productData,productDataTwo,topSweets,topPizzas} from '../Products/Data'
import burgerCategoryImage from '../../Images/png/burger.png'
import milkshakeCategoryImage from '../../Images/png/Milkshake.png'
import cakeCategoryImage from '../../Images/png/cake.png'
import pizzaCategoryImage from '../../Images/png/pizza.png'
import Prodcuts from '../Products';
import { ProductsHeading } from '../Products/ProductElements';
import { useSelector } from 'react-redux';
const Menu = ({updateCart}) => {
    const [catagory,setCatagory] =useState("pizza");

    const toggleCatagory=(catagoryType)=>{
        setCatagory(catagoryType);
    }
    const MongoPizzaData=useSelector(state=>state.productDetails)
    const pizzas=MongoPizzaData[0]?.products
    const burgers=MongoPizzaData[1]?.products
    const cakes=MongoPizzaData[2]?.products
    const milkshakes=MongoPizzaData[3]?.products
    const allProducts=pizzas?[...pizzas,...burgers,...cakes,...milkshakes]:[]
   
    return (
        <MenuContainer>
            <h3>Catagories </h3>
            <Catagories>
                <CatagoryCard>
                <CatagoryItem src={pizzaCategoryImage} alt="Pizza" onClick={()=>toggleCatagory("pizzas")}/>
                <CatagoryName>pizzas</CatagoryName>
                </CatagoryCard>
                <CatagoryCard>
                <CatagoryItem src={burgerCategoryImage} alt="Deserts" onClick={()=>toggleCatagory("burgers")}/>
                <CatagoryName>Burgers</CatagoryName>
                </CatagoryCard>
                <CatagoryCard>
                <CatagoryItem src={milkshakeCategoryImage} alt="Milkshake" onClick={()=>toggleCatagory("milkshakes")}/>
                <CatagoryName>Milkshakes</CatagoryName>
                </CatagoryCard>
                <CatagoryCard>
                <CatagoryItem src={cakeCategoryImage} alt="Cakes" onClick={()=>toggleCatagory("cakes")}/>
                <CatagoryName>Cakes</CatagoryName>
                </CatagoryCard>
                <CatagoryCard>
                <CatagoryItem src={cakeCategoryImage} alt="ALL" onClick={()=>toggleCatagory("allItems")}/>
                <CatagoryName>All Items</CatagoryName>
                </CatagoryCard>
            </Catagories>
            { catagory==="pizzas"?<Prodcuts heading="All varients Pizza" data={pizzas} updateCart={updateCart}/>:<></> }
            { catagory==="burgers"?<Prodcuts heading="All varients Milkshake" data={burgers} updateCart={updateCart}/>:<></> }
            { catagory==="milkshakes"?<Prodcuts heading="All varients Deserts" data={milkshakes} updateCart={updateCart}/>:<></> }
            { catagory==="cakes"?<Prodcuts heading="All varients Cakes" data={cakes} updateCart={updateCart}/>:<></> }
            { catagory==="allItems"?<Prodcuts heading="All products" data={allProducts} updateCart={updateCart}/>:<></> }
        </MenuContainer>
    )
}

export default Menu

import React,{useCallback, useEffect, useRef, useState} from 'react'
import {MenuContainer,Catagories,CatagoryItem,CatagoryName,CatagoryCard, SearchContainer, SearchText, SearchLabel, SearchResults, SearchResultItems, SearchWrapper} from './MenuElements'
// import {productData,productDataTwo,topSweets,topPizzas} from '../Products/Data'
import burgerCategoryImage from '../../Assets/icons/burger.png'
import milkshakeCategoryImage from '../../Assets/icons/Milkshake.png'
import cakeCategoryImage from '../../Assets/icons/cake.png'
import pizzaCategoryImage from '../../Assets/icons/pizza.png'
import Products from '../Products';
import { useSelector } from 'react-redux';
const Menu = ({updateCart}) => {
    const [catagory,setCatagory] =useState("pizzas");
    const [searchOutput,setSearchOutput]=useState([])
    const toggleCatagory=(catagoryType)=>{
        setCatagory(catagoryType);
    }
    const MongoPizzaData=useSelector(state=>state.productDetails)
    const pizzas=MongoPizzaData[0]?.products
    const burgers=MongoPizzaData[1]?.products
    const cakes=MongoPizzaData[2]?.products
    const milkshakes=MongoPizzaData[3]?.products
    const allProducts=pizzas?[...pizzas,...burgers,...cakes,...milkshakes]:[]
    const ref=useRef(null)
        useEffect(() => {
       
          // Function for click event
          function handleOutsideClick(event) {
            if (ref.current && !ref.current.contains(event.target)) {
            console.log( ref.current) 
            setSearchOutput([])
            }
          }
       
          // Adding click event listener
          document.addEventListener("click", handleOutsideClick);
          return () => document.removeEventListener("click", handleOutsideClick);
        }, [ref])
    const searchResultHandler=(event)=>{
        let term=event.target.value
       setSearchOutput(allProducts.filter((prd)=>
       prd.name.toLowerCase().search(term.toLowerCase())>=0?prd.name:false
      
   )) 
   console.log("3")
    }
   const debounce=(fun,d)=>{
      let timer
      console.log("here 1")
      return function (...args) {
            let context=this
            clearTimeout(timer)
            console.log("2")
            timer=setTimeout(()=>{
            fun.apply(context,args)
            },d);
        }
    
   }
   const memoised=useCallback(debounce(searchResultHandler,500)
   );
    return <>
        <SearchContainer>
            <SearchLabel>search</SearchLabel>
            <SearchWrapper>
            <SearchText onChange={memoised}/>
            {searchOutput.length>0&&<SearchResults ref={ ref} len={searchOutput.length}>
                {searchOutput?.map((item,index) => 
                   <SearchResultItems key={index}>{item.name}</SearchResultItems>
                )}
              </SearchResults>}
              </SearchWrapper>
        </SearchContainer>
        <MenuContainer>
            <h3>Catagories </h3>
            <Catagories>
                <CatagoryCard>
                <CatagoryItem src={pizzaCategoryImage} alt="Pizza" onClick={()=>toggleCatagory("pizzas")}/>
                <CatagoryName>pizzas</CatagoryName>
                </CatagoryCard>
                <CatagoryCard>
                <CatagoryItem src={burgerCategoryImage} alt="burgers" onClick={()=>toggleCatagory("burgers")}/>
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
            { catagory==="pizzas"&&<Products heading="All varients Pizza" data={pizzas} updateCart={updateCart}/> }
            { catagory==="burgers"&&<Products heading="All varients Milkshake" data={burgers} updateCart={updateCart}/> }
            { catagory==="milkshakes"?<Products heading="All varients Deserts" data={milkshakes} updateCart={updateCart}/>:<></> }
            { catagory==="cakes"?<Products heading="All varients Cakes" data={cakes} updateCart={updateCart}/>:<></> }
            { catagory==="allItems"?<Products heading="All products" data={allProducts} updateCart={updateCart}/>:<></> }
        </MenuContainer>
        </>
}

export default Menu

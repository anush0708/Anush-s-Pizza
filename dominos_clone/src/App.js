import React,{useEffect} from "react";
import { BrowserRouter as Router,Route,Link,Switch } from "react-router-dom";
import Hero from "./Components/Hero";
import Login from "./Components/Login";
import { GlobalStyle } from "./globalStyles";
import {productData,productDataTwo,cartData,topPizzas,topSweets} from "./Components/Products/Data"
import Prodcuts from "./Components/Products";
import Feature from "./Components/Feature";
import Footer from "./Components/Footer";
import Cart from "./Components/Cart";
import Menu from "./Components/Menu";
import {useDispatch,Provider, useSelector} from "react-redux"
import {productDetails, setloggedInUser, updateCart} from "./redux/actions/productActions"
import pizzaService from "./services/log"
import cartService from "./services/cartService"
import { useState } from "react";
import NavBar from "./Components/NavBar";
function App() {
  const [allProducts,setAllProducts]= useState([])
  const dispatch = useDispatch()
  useEffect(() => {
    if(localStorage.getItem("userDetails")!=""&&localStorage.getItem("userDetails")!=undefined)
    {
        dispatch(setloggedInUser(JSON.parse(localStorage.getItem("userDetails")) ))
        cartService.getCartProducts(`bearer ${JSON.parse(window.localStorage.userDetails)?.token}`).then(products=>dispatch(updateCart(products)))  
       
    }
    pizzaService.getAll().then(products=>dispatch(productDetails(products)))
    pizzaService.getAllProducts().then(products=>setAllProducts(products))

    // dispatch(updateCart((await cartService.getCartProducts(token)).Prodcuts)) 
  }, [])

  const token = `bearer ${useSelector(state=>state.loggedInUser.token)}`

  const updateCartContent= async(product)=>{
    
   const newObject={
      productId:product,
      quantity:1
      }
      
        const res=await cartService.updateCartProducts(newObject,token)
         res.productId=allProducts.find(prd=>prd.id===res.productId) 
         console.log("main",res)
        dispatch(updateCart(res));
  }
 
  console.log(useSelector(state=>state.cart).filter(prd=>prd.id!="6157f624d69bd95dfe7e6827"))
 
  return (
    <Router>
      <GlobalStyle/>
      <Switch>
      <Route path="/cart">

        <Cart/>
      </Route>
      
      {/* <Route path="/menu">
        <Menu />
      </Route> */}
      <Route exact path="/login" component={Login} />
      
      <Route exact path="/" >
      <Hero/>
      <Menu updateCart={updateCartContent}/>
      <Prodcuts heading="Top 3 picks for you -pizaa" data={topPizzas} updateCart={updateCartContent}/>
      <Feature/>
      <Prodcuts heading="Top 3 picks for you -sweets" data={topSweets} updateCart={updateCartContent}/>
      </Route>
      
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;

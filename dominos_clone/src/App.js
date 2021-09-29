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
function App() {
  
  const dispatch = useDispatch()
  const token = `bearer ${useSelector(state=>state.loggedInUser.token)}`
  const updateCartContent=(product)=>{
    dispatch(updateCart(product));
   const newObject={id:product.id}
    cartService.updateCartProducts(newObject,token)
    console.log(product.id,token)
    
  }
 
  useEffect(() => {
    if(localStorage.getItem("userDetails"))
    {
        dispatch(setloggedInUser(JSON.parse(localStorage.getItem("userDetails")) ))
    }
    pizzaService.getAll().then(products=>dispatch(productDetails(products)))
    
    // dispatch(updateCart((await cartService.getCartProducts(token)).Prodcuts)) 
  }, [])
 
  return (
    <Router>
      <GlobalStyle/>
      <Switch>
      <Route path="/cart">
        <Cart />
      </Route>
      
      <Route path="/menu">
        <Menu />
      </Route>
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

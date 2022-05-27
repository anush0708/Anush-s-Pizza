import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Feature from '../Components/Feature';
import Hero from '../Components/Hero';
import Menu from '../Components/Menu';
import Products from '../Components/Products';
import SlideBars from '../Components/SlideBars';
import { topPizzas, topSweets } from '../Components/Products/Data';

import { fetchProducts, setloggedInUser } from '../redux/actions/productActions';
import updateCart from '../redux/reducers/updateCart';

import cartService from '../services/cartService';
import pizzaService from '../services/log';

import Modal from '../Modal';

function Home() {
  const [allProducts, setAllProducts] = useState([]);
  const [modal, setModal] = useState(false);
  const token = `bearer ${useSelector((state) => state.loggedInUser.token)}`;

  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem('userDetails') !== '' && localStorage.getItem('userDetails') !== undefined && localStorage.getItem('userDetails')) {
      dispatch(setloggedInUser(JSON.parse(localStorage.getItem('userDetails'))));

      cartService.getCartProducts(`bearer ${JSON.parse(window.localStorage.userDetails)?.token}`).then((products) => dispatch(updateCart(products)));
    }
    dispatch(fetchProducts());
    // pizzaService.getAll().then(products=>dispatch(productDetails(products)))
    pizzaService.getAllProducts().then((products) => setAllProducts(products));
    // dispatch(updateCart((await cartService.getCartProducts(token)).Prodcuts))
  }, []);
  const updateCartContent = async (product) => {
    if (!token.split(' ')[1]) {
      setModal(true);
    } else {
      const newObject = { productId: product, quantity: 1 };
      const res = await cartService.updateCartProducts(newObject, token);
      res.productId = allProducts.find((prd) => prd.id === res.productId);
      dispatch(updateCart(res));
    }
  };
  return (
    <>
      <Hero />
      <Menu updateCart={updateCartContent} />
      <SlideBars Heading="Top picks of the DAY" Products={topPizzas} />
      <Feature />
      <Products heading="Top 3 picks for you -sweets" data={topSweets} updateCart={updateCartContent} />
      {modal && <Modal setModal={setModal} />}
    </>
  );
}

export default Home;

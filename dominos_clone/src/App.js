import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import { GlobalStyle } from './globalStyles';
import Footer from './Components/Footer';
import Cart from './Components/Cart';
import Home from './Pages/Home';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;

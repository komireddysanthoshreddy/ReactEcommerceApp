import './App.css';
import Cart from './Cart';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"
import Navbar from './Navbar';
import Carousel from './Carousel';
import Card from './Card';
import React from 'react';
import data from './Data';

function App() {

  const [cartData, setCartData] = React.useState([])


  const handleCartData = (product) => {
        console.log(product)
      setCartData((cartData) => [...cartData, { data: product, quantity: 1 }]);
    
  }

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Carousel />
        <Routes>
          <Route path="/" element={<Card data={data} handleCartData={handleCartData} />} />
          <Route path="/cart" element={<Cart data={cartData} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
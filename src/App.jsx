import React,{ Component } from "react";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Register from "./pages/Register";
import ProductList from "./pages/ProductList";
import ShirtProductList from "./pages/ShirtProductList";
import LoungeProductList from "./pages/LoungeProductList";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import JacketProductList from "./pages/JacketProductList";

const App = () => {
    // return <Home/>
    // return <ProductList/>
  // return <Product/>;
  // return <Register/>
  // return <Login/>
  // return <Cart/>
  return(
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>} />
            <Route path="/productlist" element={<ProductList/>}/>
            <Route path="/product" element={<Product/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/shirtproductlist" element={<ShirtProductList/>} />
            <Route path="/loungeproductlist" element={<LoungeProductList/>} />
            <Route path="/jacketproductlist" element={<JacketProductList/>} />
      </Routes>
    </BrowserRouter>
    );
};

export default App;
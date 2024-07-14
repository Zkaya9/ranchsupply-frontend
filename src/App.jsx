import React from "react";

import Navigation from "./components/home/Navigation";
import Home from "./components/home/Home";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import AboutUs from "./components/home/AboutUs";
import ContactUs from "./components/home/ContactUs";
import Products from "./components/products/Products";
import Footer from "./components/home/Footer";
import "./App.css";

function App() {
  return (
    <>
      {/* <Navigation /> */}

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<AboutUs />} />
          <Route exact path="/contact" element={<ContactUs />} />
          <Route exact path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;

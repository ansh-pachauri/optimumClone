import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import LetsConnect from "./pages/LetsConnect";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Services from "./pages/Services";

import Contactus from "./pages/ContactUs";
import Card from "./components/Card";
import Footer2 from "./components/Footer2";


function App() {
  return (
    <div>
  
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/connect" element={<LetsConnect />} />
        <Route path="/funding" element={<Card />} />
      </Routes>
      
      <Footer2 />
      
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LetsConnect from "./pages/LetsConnect";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Services from "./pages/Services";
import Contact from "./components/Contact";
import Contactus from "./pages/ContactUs";


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
      </Routes>
      

      <Footer />
    </div>
  );
}

export default App;

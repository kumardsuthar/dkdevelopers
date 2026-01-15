import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<h1>Services</h1>} />
<Route path="/work" element={<h1>Work</h1>} />
<Route path="/contact" element={<h1>Contact</h1>} />
      </Routes>
   <Footer/>
    </>
  );
}

export default App;

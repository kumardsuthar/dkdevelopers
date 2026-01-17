import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Work from "./pages/Work";
import Service from "./pages/Service";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service/>} />
<Route path="/work" element={<Work/>} />
<Route path="/contact" element={<Contact/>} />
      </Routes>
   <Footer/>
    </>
  );
}

export default App;

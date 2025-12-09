// import { useState } from 'react'
import toast from "react-hot-toast";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/common/Navbar";
import { Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import About from "./pages/About";

function App() {
  // const [count, setCount] = useState(0)
  toast.success("Login successfully");
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/services" element={<Services />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </>
  );
}

export default App;

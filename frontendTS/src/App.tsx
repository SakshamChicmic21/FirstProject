// import { useState } from 'react'
import toast from "react-hot-toast";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/common/Navbar";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import About from "./pages/About";
import { useEffect } from "react";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Students from "./pages/Students";
import Search from "./pages/Search";
import List from "./pages/List";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        {" "}
        <Navbar />
        <Home />
      </div>
    ),
  },
  {
    path: "/services",
    element: (
      <div>
        {" "}
        <Navbar />
        <Services />
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        {" "}
        <Navbar />
        <About />
      </div>
    ),
  },
  {
    path: "/contact",
    element: (
      <div>
        {" "}
        <Navbar />
        <Contact />
      </div>
    ),
  },
]);
function App() {
  // const [count, setCount] = useState(0)
  toast.success("Login successfully");

  // return function will run during unmounting or when dependencies change
  // useEffect(() => {
  //   console.log("Effect runs");
  //   return () => console.log("Cleanup runs");
  // }, []); 
  return (
    <>
      {/* <RouterProvider router={router} /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/students/:id" element={<Students />} />
        <Route path="/services" element={<Services />}>
          <Route path="search" element={<Search />} />
          <Route path="list" element={<List />} />
        </Route>

        <Route path="*" element={<ErrorPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/admin" element={<Admin />} /> */}
      </Routes>
    </>
  );
}

export default App;

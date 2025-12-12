import { useState } from "react";
import toast from "react-hot-toast";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/common/Navbar";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
  useLocation,
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
import Dashboard from "./pages/Dashboard";
import Stats from "./components/Dashboard/Stats";
import PrivateRoute from "./pages/PrivateRoute";
import useOnlineStatus from "./customHooks/useOnlineStatus";
// import router from "./routes";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <div>
//         {" "}
//         <Navbar />
//         <Home />
//       </div>
//     ),
//   },
//   {
//     path: "/services",
//     element: (
//       <div>
//         {" "}
//         <Navbar />
//         <PrivateRoute>
//           <Services />
//         </PrivateRoute>
//       </div>
//     ),
//   },
//   {
//     path: "/about",
//     element: (
//       <div>
//         {" "}
//         <Navbar />
//         <About />
//       </div>
//     ),
//   },
//   {
//     path: "/contact",
//     element: (
//       <div>
//         {" "}
//         <Navbar />
//         <Contact />
//       </div>
//     ),
//   },
//   {
//     path: "/students/:id",
//     element: (
//       <div>
//         <Navbar />
//         <Students />
//       </div>
//     ),
//   },
//   {
//     path: "/services/search",
//     element: (
//       <div>
//         <Navbar />
//         <Search />
//       </div>
//     ),
//   },
//   {
//     path: "/services/list",
//     element: (
//       <div>
//         <Navbar />
//         <List />
//       </div>
//     ),
//   },
//   {
//     path: "/dashboard",
//     element: (
//       <div>
//         <Navbar />
//         <Dashboard />
//       </div>
//     ),
//     children: [
//       {
//         path: "stats",
//         element: (
//           <div>
//             <Stats />
//           </div>
//         ),
//       },
//       {
//         path: "settings",
//         element: <div>Dashboard Settings</div>,
//       },
//       {
//         path: "reports",
//         element: <div>Dashboard Reports</div>,
//       },
//     ],
//   },
//   {
//     path: "/login",
//     element: (
//       <div>
//         <Login />
//       </div>
//     ),
//   },
//   {
//     path: "/signup",
//     element: (
//       <div>
//         <Signup />
//       </div>
//     ),
//   },
//   {
//     path: "*",
//     element: (
//       <div>
//         {" "}
//         <Navbar />
//         <ErrorPage />
//       </div>
//     ),
//   },
// ]);
function StatusBar() {
  const isOnline = useOnlineStatus();
  return <h1>{isOnline ? "✅ Online" : "❌ Disconnected"}</h1>;
}

function SaveButton() {
  const isOnline = useOnlineStatus();

  function handleSaveClick() {
    console.log("✅ Progress saved");
  }

  return (
    <button disabled={!isOnline} onClick={handleSaveClick}>
      {isOnline ? "Save progress" : "Reconnecting..."}
    </button>
  );
}
function App() {
  // const [count, setCount] = useState(0)

  toast.success("Login successfully");
  const location = useLocation();
  const noNabbarPaths = ["/login", "/signup"];
  const showNavbar = !noNabbarPaths.includes(location.pathname);

  // return function will run during unmounting or when dependencies change
  // useEffect(() => {
  //   console.log("Effect runs");
  //   return () => console.log("Cleanup runs");
  // }, []);
  return (
    <>
      {/* <RouterProvider router={router} /> */}
      {showNavbar && <Navbar />}
      <SaveButton />
      <StatusBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/students/:id"
          element={
            <PrivateRoute>
              <Students />
            </PrivateRoute>
          }
        />
        <Route
          path="/services"
          element={
            <PrivateRoute>
              <Services />
            </PrivateRoute>
          }
        >
          <Route path="search" element={<Search />} />
          <Route path="list" element={<List />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="stats" element={<Stats />} />
          <Route path="settings" element={<div>Dashboard Settings</div>} />
          <Route path="reports" element={<div>Dashboard Reports</div>} />
        </Route>

        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        {/* <Route path="/admin" element={<Admin />} /> */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;

import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Services from "../pages/Services";
import Search from "../pages/Search";
import List from "../pages/List";
import RootLayout from "../components/common/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "contact",
        Component: Contact,
      },
      {
        path: "services",
        Component: Services,
        children: [
          { path: "search", Component: Search },
          { path: "list", Component: List },
        ],
      },
      //   {
      //     path: "auth",
      //     Component: AuthLayout,
      //     children: [
      //       { path: "login", Component: Login },
      //       { path: "register", Component: Register },
      //     ],
      //   },
      //   {
      //     path: "concerts",
      //     children: [
      //       { index: true, Component: ConcertsHome },
      //       { path: ":city", Component: ConcertsCity },
      //       { path: "trending", Component: ConcertsTrending },
      //     ],
      //   },
    ],
  },
]);
export default router;

// const router = createBrowserRouter([
//   // --- Routes without Navbar (Login, Signup) ---
//   {
//     path: "/login",
//     element: <Login />, // No Navbar wrapper here
//   },
//   {
//     path: "/signup",
//     element: <Signup />, // No Navbar wrapper here
//   },

//   // --- Main Layout Route (Includes Navbar for all children) ---
//   {
//     path: "/",
//     element: <RootLayout />,
//     errorElement: <ErrorPage />, // Use errorElement on the layout for better error handling
//     children: [
//       {
//         index: true, // Matches exactly "/"
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//       {
//         // Example of how to integrate your PrivateRoute HOC within the layout structure
//         path: "services",
//         element: <PrivateRoute><Services /></PrivateRoute>, 
//       },
//       {
//         path: "students/:id",
//         element: <Students />,
//       },
//       // Note: You no longer need separate routes for /services/search and /services/list
//       // as they should likely be children of the Services component itself if they render within it.

//       // Dashboard section (inherits Navbar from RootLayout)
//       {
//         path: "dashboard",
//         element: <Dashboard />,
//         children: [
//           { path: "stats", element: <Stats /> },
//           { path: "settings", element: <div>Dashboard Settings</div> },
//           { path: "reports", element: <div>Dashboard Reports</div> },
//         ],
//       },
//     ],
//   },
  
//   // The wildcard path is now handled efficiently by the errorElement above.
//   // If you still need a dedicated 404 page *outside* the layout:
//   // {
//   //   path: "*",
//   //   element: <ErrorPage />,
//   // }
// ]);

// export default router;
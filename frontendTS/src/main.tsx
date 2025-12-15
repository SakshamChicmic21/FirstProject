// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import store from "./redux/store.ts";
import StatusBar from "./components/common/StatusBar.tsx";
createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <Provider store={store}>
    <Router>
      <App />
      <StatusBar />
      <Toaster position="top-center" reverseOrder={false} />
    </Router>
  </Provider>
  // </StrictMode>
);

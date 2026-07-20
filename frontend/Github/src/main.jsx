import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { authProvider } from "./context/authContext.jsx";
import AppRoutes from "./routes/routes.js";
import {BrowserRouter as Router} from "react-router-dom";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <authProvider>
    <Router>
      <AppRoutes/>
    </Router>
    {/* <App /> */}
  </authProvider>,
  // </StrictMode>,
);
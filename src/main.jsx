import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";
import { PrivyProvider } from "@privy-io/react-auth";
import { ThemeContextProvider } from "./context/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PrivyProvider
      appId="cm1x2dy38048b3iwyq71m2q4i"
      config={{
        appearance: {
          theme: "dark",
        },
      }}
    >
      <Router>
        <ThemeContextProvider>
          <App />
        </ThemeContextProvider>
      </Router>
    </PrivyProvider>
  </React.StrictMode>,
);

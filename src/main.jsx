import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";
import { PrivyProvider } from "@privy-io/react-auth";
import { ThemeContextProvider } from "./context/ThemeContext";
import { Buffer } from "buffer";
import { StateContextProvider } from "./context";
window.Buffer = Buffer;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PrivyProvider
      appId={import.meta.env.VITE_PRIVY_APP_ID}
      config={{
        appearance: {
          theme: "dark",
        },
      }}
    >
      <Router>
        <ThemeContextProvider>
          <StateContextProvider>
            <App />
          </StateContextProvider>
        </ThemeContextProvider>
      </Router>
    </PrivyProvider>
  </React.StrictMode>,
);

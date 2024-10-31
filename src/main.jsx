import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";
import { PrivyProvider } from "@privy-io/react-auth";
import { ThemeContextProvider } from "./context/ThemeContext";
import { UserStateContextProvider } from "./context/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <PrivyProvider
    appId={import.meta.env.VITE_PRIVY_APP_ID}
    config={{
      appearance: {
        theme: "dark",
      },
    }}
  >
    <React.StrictMode>
      <Router>
        <ThemeContextProvider>
          <UserStateContextProvider>
            <App />
          </UserStateContextProvider>
        </ThemeContextProvider>
      </Router>
    </React.StrictMode>
  </PrivyProvider>,
);

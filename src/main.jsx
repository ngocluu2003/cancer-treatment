import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";
import { ThemeContextProvider } from "./context/ThemeContext";
import { UserStateContextProvider } from "./context/UserContext";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <ThemeContextProvider>
        <UserStateContextProvider>
          <ClerkProvider
            appearance={{
              baseTheme: shadesOfPurple,
            }}
            publishableKey={PUBLISHABLE_KEY}
            afterSignOutUrl="/"
          >
            <App />
          </ClerkProvider>
        </UserStateContextProvider>
      </ThemeContextProvider>
    </Router>
  </React.StrictMode>,
);

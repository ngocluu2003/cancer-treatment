import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { Home } from "./pages";

const App = () => {
  return (
    <div className="relative flex min-h-screen flex-row bg-[#f5f5f5] dark:bg-[#13131a] p-4 transition-colors duration-200">
      <div className="relative mr-10 hidden sm:flex">
        <Sidebar />
      </div>
      <div className="mx-auto max-w-[1280px] flex-1 w-full sm:pr-3">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

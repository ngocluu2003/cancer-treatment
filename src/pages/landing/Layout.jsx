import React from "react";
import Header from "./components/Header";
import Home from ".";

const Layout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-[#0D1117] dark:to-[#161C22]">
      <Header />
      <main className="p-2">
        <Home />
      </main>
      {/* footer */}
      <footer className="bg-blue-100 py-12 dark:bg-[#0D1117]">
        <div className="container mx-auto px-4 text-center text-black dark:text-white">
          <p>Made with ❤️ by Vinay Chhabra</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

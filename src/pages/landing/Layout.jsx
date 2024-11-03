import React from "react";

import Header from "./components/Header";
import Home from ".";

const Layout = () => {
  return (
    <div>
      {" "}
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-4">
        <Home />
      </main>
      {/* footer */}
      <footer className="bg-blue-100 py-12">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>Made with ❤️ by Vinay Chhabra</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

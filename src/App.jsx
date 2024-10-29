import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { Home, Profile } from "./pages";
import { Onboarding } from "./pages";
import { useUserStateContext } from "./context/User";
import { usePrivy } from "@privy-io/react-auth";

const App = () => {
  const { currentUser } = useUserStateContext();
  const { ready, authenticated, login, user } = usePrivy();
  const navigate = useNavigate();
  useEffect(() => {
    if (!authenticated) {
      login();
    } else if (user && !currentUser) {
      console.log(currentUser);
      navigate("/onboarding");
    }
  }, [ready,currentUser, navigate]);
  return (
    <div className="relative flex min-h-screen flex-row bg-[#f5f5f5] p-4 transition-colors duration-300 dark:bg-[#13131a] dark:text-white">
      <div className="relative mr-10 hidden sm:flex">
        <Sidebar />
      </div>
      <div className="mx-auto w-full max-w-[1280px] flex-1 sm:pr-3">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { Home, Profile, Onboarding } from "./pages";
import MedicalRecord from "./pages/records/MedicalRecord";
import SingleRecordDetails from "./pages/records/SingleRecordDetail";
import ScreeningSchedule from "./pages/ScreeningSchedule";
import { Buffer } from "buffer";
import useAuth from "./hooks/useAuth";

if (typeof window !== "undefined" && !window.Buffer) {
  window.Buffer = Buffer;
}

const App = () => {
  const { loading } = useAuth();

  if (loading) {
    return <div>Loading....</div>;
  }

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
          <Route path="/medical-records" element={<MedicalRecord />} />
          <Route
            path="/medical-records/:id"
            element={<SingleRecordDetails />}
          />
          <Route path="/screening-schedules" element={<ScreeningSchedule />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

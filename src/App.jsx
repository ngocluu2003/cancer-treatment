import React from "react";
import { Route, Routes } from "react-router-dom";
import { Profile, Onboarding } from "./pages";
import MedicalRecord from "./pages/records/MedicalRecord";
import SingleRecordDetails from "./pages/records/SingleRecordDetail";
import ScreeningSchedule from "./pages/ScreeningSchedule";
import { Buffer } from "buffer";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Home from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import Layout from "./components/Layout";

if (typeof window !== "undefined" && !window.Buffer) {
  window.Buffer = Buffer;
}

const App = () => {
  return (
    <Routes>
      <Route
        path="/dashboard"
        element={
          <ProtectedRoutes>
            <Dashboard />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/onboarding"
        element={
          <ProtectedRoutes>
            <Onboarding />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoutes>
            <Profile />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/medical-records"
        element={
          <ProtectedRoutes>
            <MedicalRecord />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/medical-records/:id"
        element={
          <ProtectedRoutes>
            <SingleRecordDetails />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/screening-schedules"
        element={
          <ProtectedRoutes>
            <ScreeningSchedule />
          </ProtectedRoutes>
        }
      />
      <Route path="/" element={<Layout />} />
    </Routes>
  );
};

export default App;

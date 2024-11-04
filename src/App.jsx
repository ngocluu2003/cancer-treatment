import React, { useEffect } from "react";
import { Route, Routes, useNavigate, useSearchParams } from "react-router-dom";
import { Profile, Onboarding } from "./pages";
import MedicalRecord from "./pages/records/MedicalRecord";
import SingleRecordDetails from "./pages/records/SingleRecordDetail";
import ScreeningSchedule from "./pages/ScreeningSchedule";
import { Buffer } from "buffer";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Dashboard from "./pages/Dashboard";
import { SignIn, useUser } from "@clerk/clerk-react";
import Layout from "./pages/landing/Layout";
import Monitoring from "./pages/Monitoring";
import Screenings from "./pages/Screenings";
import Appointments from "./pages/Appointments";

if (typeof window !== "undefined" && !window.Buffer) {
  window.Buffer = Buffer;
}

const App = () => {
  const [searchParams] = useSearchParams();
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    const isSignIn = searchParams.get("sign-in") === "true";
    if (isSignIn && user) {
      navigate("/dashboard");
    }
  }, [searchParams, user, navigate]);

  const isSignIn = searchParams.get("sign-in") === "true";

  return (
    <div>
      {!isSignIn ? (
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
          <Route
            path="/appointments"
            element={
              <ProtectedRoutes>
                <Appointments />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/screenings"
            element={
              <ProtectedRoutes>
                <Screenings />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/monitoring"
            element={
              <ProtectedRoutes>
                <Monitoring />
              </ProtectedRoutes>
            }
          />
        </Routes>
      ) : (
        !user && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
            <SignIn
              signUpForceRedirectUrl="/dashboard"
              signUpFallbackRedirectUrl="/dashboard"
            />
          </div>
        )
      )}
    </div>
  );
};

export default App;

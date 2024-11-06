import React, { useState } from "react";
import {
  SignIn as ClerkSignIn,
  SignUp as ClerkSignUp,
} from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { useThemeContext } from "@/context/ThemeContext";

const SignIn = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const navigate = useNavigate();
  const { theme } = useThemeContext();

  const handleOverlayClick = () => {
    navigate("/");
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          theme === "light" ? "url('/bg-white.png')" : "url('/bg-black.png')",
      }}
      onClick={handleOverlayClick}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      <div
        className="relative z-10 mx-4 w-full max-w-md rounded-lg bg-[#403D76] p-6 shadow-2xl sm:mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex justify-center text-sm text-gray-200">
          <span>
            {showSignUp
              ? "Already have an account? "
              : "Don't have an account? "}
            <strong
              onClick={() => setShowSignUp((prev) => !prev)}
              className="cursor-pointer text-[#1ec070] hover:underline"
            >
              {showSignUp ? "Sign In" : "Sign Up"}
            </strong>
          </span>
        </div>

        <div className="mb-4">
          {showSignUp ? (
            <ClerkSignUp
              appearance={{
                elements: {
                  footer: "hidden",
                },
              }}
              signUpForceRedirectUrl="/dashboard"
              signUpFallbackRedirectUrl="/dashboard"
            />
          ) : (
            <ClerkSignIn
              appearance={{
                elements: {
                  footer: "hidden",
                },
              }}
              signUpForceRedirectUrl="/dashboard"
              signUpFallbackRedirectUrl="/dashboard"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SignIn;

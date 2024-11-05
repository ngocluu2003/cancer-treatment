import React from "react";
import { SignIn as ClerkSignIn } from "@clerk/clerk-react";

const SignIn = () => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/bg.png')",
      }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      <div className="relative z-10 mx-4 w-full max-w-md rounded-lg bg-white/80 p-6 shadow-xl dark:bg-gray-800/90 sm:mx-auto">
        <h2 className="mb-4 text-center text-2xl font-semibold text-gray-800 dark:text-white">
          Welcome Back
        </h2>

        <ClerkSignIn
          signUpForceRedirectUrl="/dashboard"
          signUpFallbackRedirectUrl="/dashboard"
        />
      </div>
    </div>
  );
};

export default SignIn;

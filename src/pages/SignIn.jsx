import React from "react";
import { SignIn as ClerkSignIn } from "@clerk/clerk-react";
import Header from "./landing/components/Header";
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import LoadingSpinner from "@/components/LoadingSpinner";

const SignIn = () => {
  const navigate = useNavigate();
  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return <LoadingSpinner />;
  }

  if (isLoaded && user) {
    return navigate("/dashboard");
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white dark:from-[#0D1117] dark:to-[#161C22]">
      <Header />

      <div className="container mx-auto flex flex-col items-center justify-center px-4 py-16 sm:px-6 lg:flex-row lg:space-x-10 lg:px-8">
        {/* Left Section */}
        <div className="flex w-full flex-col items-center space-y-6 text-center lg:w-1/2 lg:items-start lg:text-left">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
            Welcome Back!
          </h2>
          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Access your account or sign up to start your journey with us. Our
            platform is designed to help you manage your life effortlessly.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Join us and explore the possibilities today!
          </p>
        </div>

        {/* Right Section */}
        <div className="flex w-full flex-col items-center p-6 lg:w-1/2">
          <div className="w-full max-w-md p-8">
            <ClerkSignIn
              appearance={{
                elements: {
                  footer: "hidden",
                },
              }}
              signUpForceRedirectUrl="/dashboard"
              signUpFallbackRedirectUrl="/dashboard"
            />
            <button
              onClick={() => navigate("/sign-up")}
              className="mt-6 w-full text-sm font-medium text-[#1ec070] hover:underline focus:outline-none dark:text-[#1dc071]"
            >
              Don't have an account? Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

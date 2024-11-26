import React from "react";
import { SignUp as ClerkSignUp, useUser } from "@clerk/clerk-react";
import Header from "./landing/components/Header";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "@/components/LoadingSpinner";

const SignUp = () => {
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

      <div className="flex flex-grow items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto flex flex-col items-center justify-center lg:flex-row lg:space-x-10">
          {/* Left Section */}
          <div className="flex w-full flex-col items-center space-y-6 text-center lg:w-1/2 lg:items-start lg:text-left">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
              Create Your Account
            </h2>
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              Join us and start managing your life effortlessly. Signing up is
              quick and easy!
            </p>
            <button
              className="text-sm text-gray-500 dark:text-gray-400 hover:underline"
              onClick={() => navigate("/sign-in")}
            >
              Already have an account? Sign in to continue your journey.
            </button>
          </div>

          {/* Right Section */}
          <div className="flex w-full flex-col items-center p-6 lg:w-1/2">
            <div className="w-full max-w-md p-8">
              <ClerkSignUp
                appearance={{
                  elements: {
                    footer: "hidden",
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

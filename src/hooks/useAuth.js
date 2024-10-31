import { useEffect, useState } from "react";
import { useUserStateContext } from "../context/UserContext.jsx";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const useAuthentication = () => {
  const { currentUser, fetchUserByEmail } = useUserStateContext();
  const { isLoaded, user } = useUser();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeApp = async () => {
      // Ensure that Clerk's user context is loaded before proceeding
      if (isLoaded) {
        if (!user) {
          navigate("/?sign-in=true"); // Redirect to sign-in if no user
          setLoading(false); // Stop loading
          return; // Exit early
        }

        // Get user's email address
        const email = user.emailAddresses[0]?.emailAddress;

        // Fetch user details by email
        if (email) {
          const userDetails = await fetchUserByEmail(email);

          // Handle user state based on the fetched details
          if (!userDetails || userDetails === "user-not-found") {
            navigate("/onboarding"); // Redirect if user not found
          } else if (!userDetails.isOnBoarded) {
            navigate("/onboarding"); // Redirect if user not onboarded
          } else if (window.location.pathname === "/onboarding") {
            navigate("/"); // Redirect to home if already onboarded
          }
        }
      }

      setLoading(false); // Stop loading once everything is handled
    };

    initializeApp();
  }, [isLoaded, user, fetchUserByEmail, navigate]); // Removed `currentUser` from dependencies

  return { loading };
};

export default useAuthentication;

import { useEffect, useState } from "react";
import { useUserStateContext } from "../context/UserContext.jsx";
import { useUser } from "@clerk/clerk-react";
import { useNavigate, useLocation } from "react-router-dom";

const useAuthentication = () => {
  const { currentUser, fetchUserByEmail } = useUserStateContext();
  const { isLoaded, user } = useUser();
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeApp = async () => {
      if (!isLoaded) {
        return; // Don't do anything until loaded
      }

      if (!user) {
        navigate("/?sign-in=true");
        setLoading(false);
        return;
      }

      const email = user.emailAddresses[0]?.emailAddress;

      try {
        if (!currentUser) {
          await fetchUserByEmail(email);
        }

        // Check user onboarding status
        if (currentUser === "user-not-found" || !currentUser?.isOnBoarded) {
          navigate("/onboarding");
        } else if (location.pathname === "/onboarding") {
          navigate("/");
        }
      } catch (error) {
        console.error("Error initializing app:", error);
        // Handle error (e.g., navigate to an error page or show a notification)
      } finally {
        setLoading(false);
      }
    };

    initializeApp();
  }, [isLoaded, user, navigate, currentUser, location.pathname]);

  return { loading };
};

export default useAuthentication;

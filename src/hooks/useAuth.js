import { useEffect, useState } from "react";
import { useUserStateContext } from "../context/UserContext.jsx";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const useAuthentication = () => {
  const { currentUser, fetchUserByEmail } = useUserStateContext();
  const { isLoaded, user } = useUser();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  console.log(currentUser);

  useEffect(() => {
    const initializeApp = async () => {
      if (isLoaded) {
        if (!user) {
          navigate("/?sign-in=true");
          setLoading(false);
          return; // Exit early
        }

        const email = user.emailAddresses[0]?.emailAddress;
        if (email) {
          const userDetails = await fetchUserByEmail(email);

          if (userDetails === "user-not-found") {
            navigate("/onboarding");
          } else if (!userDetails?.isOnBoarded) {
            navigate("/onboarding");
          } else if (window.location.pathname === "/onboarding") {
            navigate("/");
          }
        }

        setLoading(false);
      }
    };

    initializeApp();
  }, [isLoaded, user, currentUser, fetchUserByEmail, navigate]);

  return { loading };
};

export default useAuthentication;

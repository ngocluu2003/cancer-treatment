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
      if (isLoaded) {
        if (!user) {
          navigate("/?sign-in=true");
          setLoading(false);
          return;
        }
        const email = user.emailAddresses[0]?.emailAddress;
        if (!currentUser) {
          await fetchUserByEmail(email);
        } else if (
          currentUser === "user-not-found" ||
          !currentUser.isOnBoarded
        ) {
          navigate("/onboarding");
        } else if (location.pathname === "/onboarding") {
          navigate("/");
        }
      }

      setLoading(false);
    };

    initializeApp();
  }, [isLoaded, user, navigate, currentUser]);

  return { loading };
};

export default useAuthentication;

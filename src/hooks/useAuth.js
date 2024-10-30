import { useEffect, useState } from "react";
import { useUserStateContext } from "../context/UserContext.jsx";
import { usePrivy } from "@privy-io/react-auth";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const { currentUser, fetchUserByEmail } = useUserStateContext();
  const { ready, authenticated, login, user } = usePrivy();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true); // Manage loading state here

  useEffect(() => {
    const initializeApp = async () => {
      if (ready) {
        if (!authenticated) {
          await login();
        }

        if (user) {
          if (!currentUser) {
            await fetchUserByEmail(user.email?.address);
          } else if (
            currentUser === "user-not-found" ||
            !currentUser.isOnBoarded
          ) {
            navigate("/onboarding");
          } else {
            if (window.location.pathname === "/onboarding") {
              navigate("/");
            }
          }
        }
        setLoading(false);
      }
    };

    initializeApp();
  }, [ready, authenticated, user, currentUser, navigate]);

  return { loading };
};

export default useAuth;

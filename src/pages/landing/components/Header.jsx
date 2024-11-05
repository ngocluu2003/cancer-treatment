import React from "react";
import { Button } from "../../../components/ui/button";
import { IconHeartHandshake } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";
import UserMenu from "../../../components/UserMenu";
import ThemeSwitch from "@/components/ThemeSwitch";

const Header = () => {
  return (
    <nav className="mx-auto flex items-center justify-between border-b-2 px-4 py-2 shadow-md">
      <Link to={"/"} className="flex items-center">
        <IconHeartHandshake size={50} color="#1ec070" />
      </Link>

      <div className="flex items-center gap-4">
        <Link to={"/dashboard"}>
          <Button className="ml-2 flex items-center gap-2">
            <img src="/apps.svg" alt="dashboard-logo" className="h-6 w-6" />
            <span className="hidden sm:flex">DashBoard</span>
          </Button>
        </Link>
        <ThemeSwitch className="m-2 flex h-10 w-10 items-center justify-center rounded-full" />
        <SignedOut>
          <SignInButton forceRedirectUrl="/dashboard">
            <Button variant="outline" className="px-6 py-4 text-md">
              Login
            </Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserMenu />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Header;

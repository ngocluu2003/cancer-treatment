import React from "react";
import { Button } from "../../../components/ui/button";
import { PenBox } from "lucide-react";
import {
  IconDashboard,
  IconHeartHandshake,
  IconLayoutDashboard,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";
import UserMenu from "./UserMenu";

const Header = () => {
  return (
    <nav className="mx-auto flex items-center justify-between border-b-2 px-4 py-2 shadow-md">
      <Link to={"/"} className="flex items-center">
        <IconHeartHandshake size={50} color="#1ec070" />
      </Link>

      <div className="flex items-center gap-4">
        <Link to={"/dashboard"}>
          <Button className="flex items-center gap-2">
            <IconLayoutDashboard size={18} />
            DashBoard
          </Button>
        </Link>
        <SignedOut>
          <SignInButton forceRedirectUrl="/dashboard">
            <Button variant="outline">Login</Button>
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

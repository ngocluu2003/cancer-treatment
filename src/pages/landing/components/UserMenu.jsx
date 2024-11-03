import { UserButton } from "@clerk/clerk-react";
import { ChartNoAxesGantt } from "lucide-react";

const UserMenu = () => {
  return (
    <UserButton
      appearance={{
        elements: {
          avatarBox: "w-10 h-10",
        },
      }}
    >
      <UserButton.MenuItems>
        <UserButton.Link
          label="My Dashboard"
          labelIcon={<ChartNoAxesGantt size={15} />}
          href="/dashboard"
        />
        <UserButton.Action label="manageAccount" />
      </UserButton.MenuItems>
    </UserButton>
  );
};

export default UserMenu;

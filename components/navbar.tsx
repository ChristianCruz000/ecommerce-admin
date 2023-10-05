import { UserButton } from "@clerk/nextjs";
import { Image } from "lucide-react";
import { MainNav } from "@/components/main-nav";
import StoreSwitcher from "@/components/store-switcher";

const Navbar = () => {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4 gap-9">
        <div className="logo">
          <img src="/dompax_logo.svg" width="100" />
        </div>
        <StoreSwitcher />
        <MainNav className="" />
        <div className="ml-auto flex items-center space-x-4">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

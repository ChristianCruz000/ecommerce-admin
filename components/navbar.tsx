import { UserButton, auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { MainNav } from "@/components/main-nav";
import StoreSwitcher from "@/components/store-switcher";
import prismadb from "@/lib/prismadb";
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";

const Navbar = async () => {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const stores = await prismadb.store.findMany({
    where: {
      userId,
    },
  });

  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4 gap-3">
        <div className="">
          <Image alt="logo" src="/admin_logo_vert.svg" width="36" />
        </div>

        <StoreSwitcher items={stores} />
        <MainNav />

        <div className="md:ml-2 flex items-center gap-4">
          <ThemeToggle />
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

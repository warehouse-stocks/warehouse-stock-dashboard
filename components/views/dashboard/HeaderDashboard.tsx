"use client";

import { useSession } from "next-auth/react";
import { CircleUserRound } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";

import { TitleCase } from "@/helpers/formatter";

const HeaderDashboard = () => {
  const { data, status } = useSession();

  if (status === "loading") {
    return (
      <div className="w-full bg-white shadow-sm px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">Loading...</h1>
      </div>
    );
  }

  return (
    <header className="w-full ml-[1px] bg-white shadow-sm px-6 py-4 flex items-center justify-between">
      <h1 className="text-2xl font-semibold text-gray-800">
        Welcome {TitleCase(data?.user?.username as string)}
      </h1>
      <Avatar>
        <CircleUserRound size={32} />
      </Avatar>
    </header>
  );
};

export default HeaderDashboard;

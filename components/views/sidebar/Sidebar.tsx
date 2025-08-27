"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Package, Boxes, BarChart3, TrendingUp, LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

const ADMIN_SIDEBAR_LINKS = [
  { name: "Overview", href: "/dashboard", icon: BarChart3 },
  { name: "Products", href: "/dashboard/products", icon: Boxes },
  { name: "Reports", href: "/dashboard/report", icon: TrendingUp },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="flex flex-col justify-between h-full">
      <div className="flex-1">
        {/* Logo Section */}
        <div className="flex items-center gap-3 px-2">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
            <Package className="text-white" size={32} />
          </div>
          <p className="text-2xl font-semibold">StockIn</p>
        </div>
        <hr className="w-full my-5" />

        {/* Navigation Links */}
        <nav className="my-10">
          <ul className="space-y-2">
            {ADMIN_SIDEBAR_LINKS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    pathname === item.href
                      ? "bg-blue-100 text-blue-700 border-l-4 border-blue-600"
                      : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                  }`}
                >
                  <item.icon size={24} />
                  <span className="font-medium">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="">
        <hr className="my-3" />
        <button
          className="flex items-center gap-1 px-4 py-3 cursor-pointer"
          onClick={() => signOut()}
        >
          <LogOut size={24} className="text-red-600" />
          <span className="text-red-600 font-semibold">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;

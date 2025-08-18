import React from "react";
import { Package } from "lucide-react";

import { cn } from "@/libs/utils";

const Logo = ({ className }: React.ComponentProps<"div">) => {
  return (
    <div className="flex items-center justify-center">
      <div className="p-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-lg">
        <Package className={cn("text-white", className)} />
      </div>
    </div>
  );
};

export default Logo;

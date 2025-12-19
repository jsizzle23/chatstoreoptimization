"use client";

import { Leaf } from "lucide-react";

export function Logo() {
  return (
    <div className="flex items-center gap-2 sm:gap-3">
      <div className="relative w-10 h-10 sm:w-11 sm:h-11 bg-gradient-to-br from-emerald-600 to-teal-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
        <Leaf className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </div>
      <div className="flex flex-col">
        <span className="font-display font-bold text-lg sm:text-xl tracking-tight leading-tight">Green Rewards</span>
        <span className="text-xs sm:text-sm text-muted-foreground font-medium -mt-0.5">Hub</span>
      </div>
    </div>
  );
}

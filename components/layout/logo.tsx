"use client";

import { Smartphone } from "lucide-react";

export function Logo() {
  return (
    <div className="flex items-center gap-2 sm:gap-3">
      <div className="relative w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center">
        <Smartphone className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
      </div>
      <span className="font-serif font-bold text-xl sm:text-2xl tracking-tight">Chat Store Optimization</span>
    </div>
  );
}

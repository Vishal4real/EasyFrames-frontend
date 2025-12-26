"use client";

import { useState } from "react";
import { Info } from "lucide-react";
import { cn } from "@/lib/utils";

interface InfoTooltipProps {
  message: string;
  className?: string;
}

export function InfoTooltip({ message, className }: InfoTooltipProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn("relative inline-flex items-center", className)}>
      <div className="group relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          onBlur={() => setIsOpen(false)}
          className="flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-slate-800/20 dark:focus:ring-slate-300/20"
          aria-label="Information"
          aria-expanded={isOpen}
        >
          <Info className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200" />
        </button>
        
        {/* Tooltip */}
        <div className={cn(
          "absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-64 sm:w-72 max-w-[calc(100vw-2rem)] transition-all duration-200 pointer-events-none z-50",
          "opacity-0 invisible group-hover:opacity-100 group-hover:visible",
          isOpen && "opacity-100 visible"
        )}>
          <div className="bg-slate-900 dark:bg-gray-800 text-white dark:text-gray-100 text-xs sm:text-sm rounded-lg p-3 shadow-xl border border-gray-700 dark:border-gray-600 font-inter">
            <p className="leading-relaxed">{message}</p>
            {/* Arrow */}
            <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900 dark:border-t-gray-800"></div>
          </div>
        </div>
      </div>
    </div>
  );
}


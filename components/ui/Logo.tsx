import React from "react";
import { Crown } from "lucide-react";

interface LogoProps {
     className?: string;
}

export default function Logo({ className = "h-8 w-auto" }: LogoProps) {
     return (
          <div className={`flex items-center space-x-2 ${className}`}>
               <div className="relative">
                    <Crown className="h-8 w-8 text-traian-gold" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-traian-burgundy rounded-full opacity-80"></div>
               </div>
               <div className="flex flex-col">
                    <span className="font-serif font-bold text-xl text-traian-burgundy leading-tight tracking-wide">
                         HOTEL
                    </span>
                    <span className="font-serif font-semibold text-lg text-traian-charcoal leading-tight tracking-widest -mt-1">
                         TRAIAN
                    </span>
               </div>
          </div>
     );
}

import React from "react";
import Link from "next/link";

interface ButtonProps {
     children: React.ReactNode;
     variant?: "primary" | "secondary" | "outline";
     size?: "sm" | "md" | "lg";
     href?: string;
     // 👇 AICI ESTE MODIFICAREA: permitem funcției să primească un eveniment
     onClick?: (e?: React.MouseEvent<HTMLElement>) => void;
     disabled?: boolean;
     className?: string;
     type?: "button" | "submit" | "reset";
}

export default function Button({
     children,
     variant = "primary",
     size = "md",
     href,
     onClick,
     disabled = false,
     className = "",
     type = "button",
}: ButtonProps) {
     const baseClasses =
          "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

     const variants = {
          primary: "bg-traian-burgundy text-white hover:bg-traian-burgundy/90 focus:ring-traian-burgundy",
          secondary:
               "bg-traian-gold text-traian-charcoal hover:bg-traian-gold/90 focus:ring-traian-gold",
          outline: "border-2 border-traian-burgundy text-traian-burgundy hover:bg-traian-burgundy hover:text-white focus:ring-traian-burgundy",
     };

     const sizes = {
          sm: "px-4 py-2 text-sm",
          md: "px-6 py-3 text-base",
          lg: "px-8 py-4 text-lg",
     };

     const classes = `${baseClasses} ${variants[variant]} ${
          sizes[size]
     } ${className} ${
          disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
     }`;

     if (href && !disabled) {
          return (
               <Link href={href} className={classes} onClick={onClick as any}>
                    {children}
               </Link>
          );
     }

     return (
          <button
               type={type}
               className={classes}
               onClick={onClick}
               disabled={disabled}
          >
               {children}
          </button>
     );
}

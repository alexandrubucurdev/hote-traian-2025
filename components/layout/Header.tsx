"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Mail } from "lucide-react";
import Logo from "@/components/ui/Logo";

const navigation = [
     { name: "Acasă", href: "/" },
     { name: "Camere", href: "/camere" },
     { name: "Galerie", href: "/galerie" },
     { name: "Despre Noi", href: "/despre" },
     { name: "Locația", href: "/locatie" },
     { name: "Contact", href: "/contact" },
];

export default function Header() {
     const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
     const [isScrolled, setIsScrolled] = useState(false);

     useEffect(() => {
          const handleScroll = () => {
               setIsScrolled(window.scrollY > 0);
          };
          window.addEventListener("scroll", handleScroll);
          return () => window.removeEventListener("scroll", handleScroll);
     }, []);

     return (
          <>
               {/* Top Contact Bar */}
               <div className="bg-traian-charcoal text-white py-2 hidden md:block">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                         <div className="flex justify-between items-center text-sm">
                              <div className="flex items-center space-x-6">
                                   <a
                                        href="tel:+40268123456"
                                        className="flex items-center space-x-2 hover:text-traian-gold transition-colors"
                                   >
                                        <Phone className="h-4 w-4" />
                                        <span>+40 268 123 456</span>
                                   </a>
                                   <a
                                        href="mailto:rezervari@hotel-traian-brasov.ro"
                                        className="flex items-center space-x-2 hover:text-traian-gold transition-colors"
                                   >
                                        <Mail className="h-4 w-4" />
                                        <span>
                                             rezervari@hotel-traian-brasov.ro
                                        </span>
                                   </a>
                              </div>
                              <div className="text-traian-gold">
                                   Str. Republicii nr. 42, Brașov
                              </div>
                         </div>
                    </div>
               </div>

               {/* Main Header */}
               <header
                    className={`sticky top-0 z-50 transition-all duration-300 ${
                         isScrolled
                              ? "bg-white/95 backdrop-blur-md shadow-lg"
                              : "bg-white/90 backdrop-blur-sm"
                    }`}
               >
                    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                         <div className="flex justify-between items-center py-4">
                              {/* Logo */}
                              <div className="flex-shrink-0">
                                   <Link href="/">
                                        <Logo className="h-12 w-auto" />
                                   </Link>
                              </div>

                              {/* Desktop Navigation */}
                              <div className="hidden lg:block">
                                   <div className="flex items-center space-x-8">
                                        {navigation.map((item) => (
                                             <Link
                                                  key={item.name}
                                                  href={item.href}
                                                  className="text-traian-charcoal hover:text-traian-burgundy font-medium transition-colors relative group"
                                             >
                                                  {item.name}
                                                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-traian-burgundy transition-all group-hover:w-full"></span>
                                             </Link>
                                        ))}
                                        <Link
                                             href="/contact"
                                             className="bg-traian-burgundy text-white px-6 py-2 rounded-lg hover:bg-traian-burgundy/90 transition-colors font-medium"
                                        >
                                             Rezervă Acum
                                        </Link>
                                   </div>
                              </div>

                              {/* Mobile menu button */}
                              <div className="lg:hidden">
                                   <button
                                        type="button"
                                        className="text-traian-charcoal hover:text-traian-burgundy"
                                        onClick={() =>
                                             setMobileMenuOpen(!mobileMenuOpen)
                                        }
                                   >
                                        <span className="sr-only">
                                             Open main menu
                                        </span>
                                        {mobileMenuOpen ? (
                                             <X
                                                  className="h-6 w-6"
                                                  aria-hidden="true"
                                             />
                                        ) : (
                                             <Menu
                                                  className="h-6 w-6"
                                                  aria-hidden="true"
                                             />
                                        )}
                                   </button>
                              </div>
                         </div>
                    </nav>

                    {/* Mobile Navigation */}
                    {mobileMenuOpen && (
                         <div className="lg:hidden bg-white border-t border-gray-200">
                              <div className="space-y-1 px-4 pb-6 pt-2">
                                   {navigation.map((item) => (
                                        <Link
                                             key={item.name}
                                             href={item.href}
                                             className="block px-3 py-2 text-base font-medium text-traian-charcoal hover:text-traian-burgundy hover:bg-gray-50 rounded-md transition-colors"
                                             onClick={() =>
                                                  setMobileMenuOpen(false)
                                             }
                                        >
                                             {item.name}
                                        </Link>
                                   ))}
                                   <div className="pt-4">
                                        <Link
                                             href="/contact"
                                             className="block w-full text-center bg-traian-burgundy text-white px-6 py-3 rounded-lg font-medium hover:bg-traian-burgundy/90 transition-colors"
                                             onClick={() =>
                                                  setMobileMenuOpen(false)
                                             }
                                        >
                                             Rezervă Acum
                                        </Link>
                                   </div>
                                   <div className="pt-4 border-t border-gray-200 mt-4">
                                        <div className="flex flex-col space-y-2 text-sm text-gray-600">
                                             <a
                                                  href="tel:+40268123456"
                                                  className="flex items-center space-x-2"
                                             >
                                                  <Phone className="h-4 w-4" />
                                                  <span>+40 268 123 456</span>
                                             </a>
                                             <a
                                                  href="mailto:rezervari@hotel-traian-brasov.ro"
                                                  className="flex items-center space-x-2"
                                             >
                                                  <Mail className="h-4 w-4" />
                                                  <span>
                                                       rezervari@hotel-traian-brasov.ro
                                                  </span>
                                             </a>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    )}
               </header>
          </>
     );
}

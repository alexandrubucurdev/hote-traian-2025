"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navigation = [
     { name: "Acasă", href: "/" },
     { name: "Camere", href: "/camere" },
     { name: "Galerie", href: "/galerie" },
     { name: "Despre Noi", href: "/despre" },
     { name: "Locația", href: "/locatie" },
     { name: "Contact", href: "/contact" },
];

const mobileMenuVariants = {
     hidden: {
          opacity: 0,
          height: 0,
          transition: { duration: 0.3, ease: "easeInOut" },
     },
     visible: {
          opacity: 1,
          height: "auto",
          transition: { duration: 0.3, ease: "easeInOut" },
     },
};

// Definim breakpoint-ul 'md' (768px)
const MD_BREAKPOINT = 768;

export default function Header() {
     const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
     const [isScrolled, setIsScrolled] = useState(false);
     const [isVisible, setIsVisible] = useState(true);
     const [lastScrollY, setLastScrollY] = useState(0);
     const pathname = usePathname();

     const headerRef = useRef<HTMLDivElement>(null);
     const [headerHeight, setHeaderHeight] = useState(0);

     const [isMediumOrLarger, setIsMediumOrLarger] = useState(false);

     // Hook-ul verifică acum breakpoint-ul 'md'
     useEffect(() => {
          const checkScreenSize = () => {
               setIsMediumOrLarger(window.innerWidth >= MD_BREAKPOINT);
          };
          checkScreenSize();
          window.addEventListener("resize", checkScreenSize);
          return () => window.removeEventListener("resize", checkScreenSize);
     }, []);

     // Hook pentru a bloca scroll-ul
     useEffect(() => {
          if (mobileMenuOpen) {
               document.body.style.overflow = "hidden";
          } else {
               document.body.style.overflow = "";
          }
          return () => {
               document.body.style.overflow = "";
          };
     }, [mobileMenuOpen]);

     // Hook-ul de scroll
     useEffect(() => {
          const handleScroll = () => {
               const currentScrollY = window.scrollY;
               setIsScrolled(currentScrollY > 10);

               if (currentScrollY < lastScrollY || currentScrollY < 100) {
                    setIsVisible(true);
               } else if (
                    currentScrollY > lastScrollY &&
                    currentScrollY > 100 &&
                    !mobileMenuOpen
               ) {
                    setIsVisible(false);
                    setMobileMenuOpen(false);
               }
               setLastScrollY(currentScrollY);
          };

          window.addEventListener("scroll", handleScroll);
          return () => window.removeEventListener("scroll", handleScroll);
     }, [lastScrollY, mobileMenuOpen]);

     // Hook pentru spacer-ul dinamic
     useEffect(() => {
          const timer = setTimeout(() => {
               if (isVisible && headerRef.current) {
                    setHeaderHeight(headerRef.current.offsetHeight);
               }
          }, 350);

          return () => clearTimeout(timer);
     }, [isScrolled, isVisible, pathname, isMediumOrLarger]);

     const headerVariants = {
          visible: { y: 0 },
          hidden: { y: "-100%" },
     };

     return (
          <>
               <motion.div
                    className="fixed top-0 left-0 right-0 z-50"
                    variants={headerVariants}
                    animate={isVisible ? "visible" : "hidden"}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
               >
                    <div ref={headerRef}>
                         {/* Bara gri de contact */}
                         <AnimatePresence>
                              {!isScrolled && isMediumOrLarger && (
                                   <motion.div
                                        className="bg-traian-charcoal text-white overflow-hidden"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{
                                             duration: 0.3,
                                             ease: "easeInOut",
                                        }}
                                   >
                                        <div className="py-2">
                                             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                                  <div className="flex justify-between items-center text-sm">
                                                       <div className="flex items-center space-x-6">
                                                            <a
                                                                 href="tel:+40268123456"
                                                                 className="flex items-center space-x-2 hover:text-traian-gold transition-colors"
                                                            >
                                                                 <Phone className="h-4 w-4" />
                                                                 <span>
                                                                      +40 268
                                                                      123 456
                                                                 </span>
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
                                                            Str. Republicii nr.
                                                            42, Brașov
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </motion.div>
                              )}
                         </AnimatePresence>

                         {/* Header-ul principal */}
                         <header
                              // --- MODIFICARE AICI ---
                              className={`w-full transition-colors duration-300 ${
                                   isScrolled
                                        ? "bg-white/95 backdrop-blur-xl border-b border-gray-100" // Am scos shadow-2xl de aici
                                        : "bg-white/90 backdrop-blur-sm"
                              } ${
                                   // Adăugăm umbra DOAR dacă s-a dat scroll ȘI meniul NU e deschis
                                   isScrolled && !mobileMenuOpen
                                        ? "shadow-2xl"
                                        : ""
                              }`}
                              // --- SFÂRȘIT MODIFICARE ---
                         >
                              <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                   <div
                                        className={`flex justify-between items-center transition-all duration-300 ${
                                             isScrolled ? "py-3" : "py-4"
                                        }`}
                                   >
                                        {/* Logo */}
                                        <div className="flex-shrink-0">
                                             <Link href="/">
                                                  <div
                                                       className={`transition-all duration-300 ${
                                                            isScrolled
                                                                 ? "scale-90"
                                                                 : "scale-100"
                                                       }`}
                                                  >
                                                       {/* <Logo
                                                            className={`w-auto transition-all duration-300 ${
                                                                 isScrolled
                                                                      ? "h-10"
                                                                      : "h-12"
                                                            }`}
                                                       /> */}
                                                       <Image
                                                            src="/logo.svg" // Calea directă din public
                                                            alt="Logo"
                                                            width={150} // Setează lățimea reală/dorită
                                                            height={40} // Setează înălțimea reală/dorită
                                                            className={`w-auto transition-all duration-300 ${
                                                                 isScrolled
                                                                      ? "h-10"
                                                                      : "h-12"
                                                            }`}
                                                       />
                                                  </div>
                                             </Link>
                                        </div>

                                        {/* Navigație Desktop (apare de la 'lg' în sus) */}
                                        <div className="hidden lg:block">
                                             <div
                                                  className={`flex items-center transition-all duration-300 ${
                                                       isScrolled
                                                            ? "space-x-6"
                                                            : "space-x-8"
                                                  }`}
                                             >
                                                  {navigation.map((item) => {
                                                       const isActive =
                                                            pathname ===
                                                            item.href;
                                                       return (
                                                            <Link
                                                                 key={item.name}
                                                                 href={
                                                                      item.href
                                                                 }
                                                                 className={`font-medium transition-all duration-200 relative group ${
                                                                      isScrolled
                                                                           ? "text-sm"
                                                                           : "text-base"
                                                                 } ${
                                                                      isActive
                                                                           ? "text-traian-burgundy"
                                                                           : "text-traian-charcoal hover:text-traian-burgundy"
                                                                 }`}
                                                            >
                                                                 {item.name}
                                                                 <span
                                                                      className={`absolute -bottom-1 left-0 h-0.5 bg-traian-burgundy transition-all duration-300 ${
                                                                           isActive
                                                                                ? "w-full"
                                                                                : "w-0 group-hover:w-full"
                                                                      }`}
                                                                 ></span>
                                                            </Link>
                                                       );
                                                  })}
                                                  <Link
                                                       href="/rezervari"
                                                       className={`bg-traian-burgundy text-white rounded-lg hover:bg-traian-burgundy/90 transition-all duration-300 font-medium transform hover:scale-105 hover:shadow-lg ${
                                                            isScrolled
                                                                 ? "px-4 py-1.5 text-sm"
                                                                 : "px-6 py-2 text-base"
                                                       }`}
                                                  >
                                                       Rezervă Acum
                                                  </Link>
                                             </div>
                                        </div>

                                        {/* Buton Meniu Mobil (dispare de la 'lg' în sus) */}
                                        <div className="lg:hidden">
                                             <button
                                                  type="button"
                                                  className="text-traian-charcoal hover:text-traian-burgundy transition-all duration-200 hover:scale-110"
                                                  onClick={() =>
                                                       setMobileMenuOpen(
                                                            !mobileMenuOpen
                                                       )
                                                  }
                                                  aria-expanded={mobileMenuOpen}
                                                  aria-controls="mobile-menu-panel"
                                             >
                                                  <span className="sr-only">
                                                       Open main menu
                                                  </span>
                                                  {mobileMenuOpen ? (
                                                       <X
                                                            className={`transition-all duration-200 ${
                                                                 isScrolled
                                                                      ? "h-5 w-5"
                                                                      : "h-6 w-6"
                                                            }`}
                                                            aria-hidden="true"
                                                       />
                                                  ) : (
                                                       <Menu
                                                            className={`transition-all duration-200 ${
                                                                 isScrolled
                                                                      ? "h-5 w-5"
                                                                      : "h-6 w-6"
                                                            }`}
                                                            aria-hidden="true"
                                                       />
                                                  )}
                                             </button>
                                        </div>
                                   </div>
                              </nav>
                         </header>
                    </div>
                    {/* --- Sfârșitul wrapper-ului de măsurare (headerRef) --- */}

                    {/* --- Meniul Mobil --- */}
                    <AnimatePresence>
                         {mobileMenuOpen && (
                              <motion.div
                                   id="mobile-menu-panel"
                                   className="lg:hidden bg-white border-t border-gray-200 overflow-hidden"
                                   initial="hidden"
                                   animate="visible"
                                   exit="hidden"
                                   variants={mobileMenuVariants}
                              >
                                   <div className="space-y-1 px-2 pb-3 pt-2">
                                        {navigation.map((item, index) => {
                                             const isActive =
                                                  pathname === item.href;
                                             return (
                                                  <Link
                                                       key={item.name}
                                                       href={item.href}
                                                       className={`block px-3 py-2 text-base font-medium rounded-md transition-all duration-200 transform hover:translate-x-2 ${
                                                            isActive
                                                                 ? "bg-gray-100 text-traian-burgundy"
                                                                 : "text-traian-charcoal hover:text-traian-burgundy hover:bg-gray-50"
                                                       } ${
                                                            mobileMenuOpen
                                                                 ? "opacity-100 translate-x-0"
                                                                 : "opacity-0 -translate-x-4"
                                                       }`}
                                                       style={{
                                                            transitionDelay:
                                                                 mobileMenuOpen
                                                                      ? `${
                                                                             index *
                                                                             50
                                                                        }ms`
                                                                      : "0ms",
                                                       }}
                                                       onClick={() =>
                                                            setMobileMenuOpen(
                                                                 false
                                                            )
                                                       }
                                                  >
                                                       {item.name}
                                                  </Link>
                                             );
                                        })}
                                        <div
                                             className={`pt-4 transition-all duration-300 ${
                                                  mobileMenuOpen
                                                       ? "opacity-100 translate-y-0"
                                                       : "opacity-0 translate-y-4"
                                             }`}
                                             style={{
                                                  transitionDelay:
                                                       mobileMenuOpen
                                                            ? "300ms"
                                                            : "0ms",
                                             }}
                                        >
                                             <Link
                                                  href="/rezervari"
                                                  className="block w-full text-center bg-traian-burgundy text-white px-6 py-3 rounded-lg font-medium hover:bg-traian-burgundy/90 transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
                                                  onClick={() =>
                                                       setMobileMenuOpen(false)
                                                  }
                                             >
                                                  Rezervă Acum
                                             </Link>
                                             <div
                                                  className={`pt-4 border-t border-gray-200 mt-4 transition-all duration-300 ${
                                                       mobileMenuOpen
                                                            ? "opacity-100 translate-y-0"
                                                            : "opacity-0 translate-y-4"
                                                  }`}
                                                  style={{
                                                       transitionDelay:
                                                            mobileMenuOpen
                                                                 ? "400ms"
                                                                 : "0ms",
                                                  }}
                                             >
                                                  <div className="flex flex-col space-y-2 text-sm text-gray-600">
                                                       <a
                                                            href="tel:+40268123456"
                                                            className="flex items-center space-x-2"
                                                       >
                                                            <Phone className="h-4 w-4" />
                                                            <span>
                                                                 +40 268 123 456
                                                            </span>
                                                       </a>
                                                       <a
                                                            href="mailto:rezervari@hotel-traian-brasov.ro"
                                                            className="flex items-center space-x-2"
                                                       >
                                                            <Mail className="h-4 w-4" />
                                                            <span className="break-all">
                                                                 rezervari@hotel-traian-brasov.ro
                                                            </span>
                                                       </a>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </motion.div>
                         )}
                    </AnimatePresence>
               </motion.div>
               {/* --- Sfârșitul wrapper-ului principal (motion.div) --- */}

               {/* Spacer-ul dinamic */}
               <motion.div
                    animate={{ height: headerHeight }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
               />
          </>
     );
}

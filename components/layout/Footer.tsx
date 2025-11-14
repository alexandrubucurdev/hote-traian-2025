"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
     Phone,
     Mail,
     MapPin,
     Clock,
     Wifi,
     Car,
     Coffee,
     Star,
     Map,
} from "lucide-react";
import Logo from "@/components/ui/Logo";

export default function Footer() {
     return (
          <footer className="bg-traian-charcoal text-white">
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                         {/* Hotel Info */}
                         <div className="lg:col-span-1">
                              <Image
                                   src="/logo/logo-white.svg"
                                   alt="Logo"
                                   width={150}
                                   height={40}
                                   className={`mb-6`}
                              />
                              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                                   Hotel Traian vă oferă o experiență de neuitat
                                   în inima Brașovului, la doar câțiva pași de
                                   Centrul Vechi și principalele atracții
                                   turistice.
                              </p>
                              <div className="flex items-center space-x-1 text-traian-gold">
                                   {[...Array(1)].map((_, i) => (
                                        <Star
                                             key={i}
                                             className="h-4 w-4 fill-current"
                                        />
                                   ))}
                                   <span className="ml-2 text-sm text-gray-300">
                                        Hotel o stea
                                   </span>
                              </div>
                         </div>

                         {/* Contact Info */}
                         <div>
                              <h3 className="font-serif font-semibold text-lg text-white mb-4">
                                   Contact
                              </h3>
                              <div className="space-y-3 text-sm">
                                   <div className="flex items-center space-x-3">
                                        <Phone className="h-4 w-4 text-traian-gold" />
                                        <div>
                                             <a
                                                  href="tel:+40268123456"
                                                  className="hover:text-traian-gold transition-colors"
                                             >
                                                  +40 268 333 065
                                             </a>
                                             <div className="text-gray-400 text-xs">
                                                  Recepție 24/7
                                             </div>
                                        </div>
                                   </div>
                                   <div className="flex items-center space-x-3">
                                        <Mail className="h-4 w-4 text-traian-gold" />
                                        <div>
                                             <a
                                                  href="mailto:rezervari@hotel-traian-brasov.ro"
                                                  className="hover:text-traian-gold transition-colors"
                                             >
                                                  rezervari@hotel-traian-brasov.ro
                                             </a>
                                        </div>
                                   </div>
                                   <div className="flex items-start space-x-3">
                                        <MapPin className="h-4 w-4 text-traian-gold mt-0.5" />
                                        <div>
                                             <span>Str. Lunii nr. 7</span>
                                             <br />
                                             <span>Brașov, 500327</span>
                                             <br />
                                             <span className="text-gray-400 text-xs">
                                                  10 min de Centrul Vechi
                                             </span>
                                        </div>
                                   </div>
                              </div>
                         </div>

                         {/* Quick Links */}
                         <div>
                              <h3 className="font-serif font-semibold text-lg text-white mb-4">
                                   Navigare Rapidă
                              </h3>
                              <div className="space-y-2 text-sm">
                                   <Link
                                        href="/camere"
                                        className="block text-gray-300 hover:text-traian-gold transition-colors"
                                   >
                                        Camere & Tarife
                                   </Link>
                                   <Link
                                        href="/galerie"
                                        className="block text-gray-300 hover:text-traian-gold transition-colors"
                                   >
                                        Galeria Foto
                                   </Link>
                                   <Link
                                        href="/despre"
                                        className="block text-gray-300 hover:text-traian-gold transition-colors"
                                   >
                                        Despre Hotel
                                   </Link>
                                   <Link
                                        href="/locatie"
                                        className="block text-gray-300 hover:text-traian-gold transition-colors"
                                   >
                                        Locația & Atracții
                                   </Link>
                                   <Link
                                        href="/contact"
                                        className="block text-gray-300 hover:text-traian-gold transition-colors"
                                   >
                                        Contact & Rezervări
                                   </Link>
                              </div>
                         </div>

                         {/* Amenities */}
                         <div>
                              <h3 className="font-serif font-semibold text-lg text-white mb-4">
                                   Facilități
                              </h3>
                              <div className="grid grid-cols-2 gap-3 text-sm">
                                   <div className="flex items-center space-x-2">
                                        <Wifi className="h-4 w-4 text-traian-gold" />
                                        <span className="text-gray-300">
                                             WiFi Gratuit
                                        </span>
                                   </div>
                                   <div className="flex items-center space-x-2">
                                        <Car className="h-4 w-4 text-traian-gold" />
                                        <span className="text-gray-300">
                                             Parcare
                                        </span>
                                   </div>
                                   <div className="flex items-center space-x-2">
                                        <Clock className="h-4 w-4 text-traian-gold" />
                                        <span className="text-gray-300">
                                             Recepție 24/7
                                        </span>
                                   </div>
                                   <div className="flex items-center space-x-2">
                                        <Map className="h-4 w-4 text-traian-gold" />
                                        <span className="text-gray-300">
                                             Locație Accesibilă
                                        </span>
                                   </div>
                              </div>
                         </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-gray-700 mt-8 pt-8">
                         <div className="flex flex-col md:flex-row justify-center items-center text-sm">
                              <div className="text-gray-400  mb-4 md:mb-0">
                                   © {new Date().getFullYear()} Hotel Traian
                                   Brașov. Toate drepturile rezervate.
                              </div>
                         </div>
                    </div>
               </div>
          </footer>
     );
}

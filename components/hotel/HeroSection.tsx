"use client";

import React from "react";
import { ChevronRight, MapPin, Star, Phone } from "lucide-react";
import Button from "@/components/ui/Button";

export default function HeroSection() {
     return (
          <section className="relative min-h-[90svh] flex items-center justify-center overflow-hidden pt-8 pb-28 md:py-0">
               {/* Background Image */}
               <div className="absolute inset-0 z-0">
                    <div
                         className="w-full h-full bg-cover bg-top md:bg-center md:bg-fixed"
                         style={{
                              backgroundImage: `linear-gradient(rgba(45, 55, 72, 0.1), rgba(139, 21, 56, 0.1)), url('images/bv.jpg')`,
                         }}
                    />
               </div>

               {/* Content */}
               <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center [text-shadow:0_0_8px_rgba(0,0,0,0.8)]">
                    <div className="animate-fade-in">
                         {/* Subtitle */}
                         <div className="flex items-center justify-center space-x-2 mb-4">
                              <MapPin className="h-5 w-5 text-traian-gold" />
                              <span className="text-traian-gold font-medium text-lg">
                                   În inima Brașovului
                              </span>
                         </div>

                         {/* Main Title */}
                         <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                              Hotel
                              <span className="text-traian-gold block lg:inline lg:ml-4">
                                   Traian
                              </span>
                         </h1>

                         {/* Description */}
                         <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                              Esențialul pentru șederea ta în Brașov. Simplu,
                              curat și bine conectat.
                              <span className="block mt-2 text-traian-gold font-medium">
                                   La doar 10 minute de Centrul Vechi
                              </span>
                         </p>

                         {/* Rating */}
                         <div className="flex items-center justify-center space-x-1 mb-8">
                              {[...Array(1)].map((_, i) => (
                                   <Star
                                        key={i}
                                        className="h-5 w-5 text-traian-gold fill-current"
                                   />
                              ))}
                              <span className="ml-3 text-white font-medium">
                                   Hotel o stea
                              </span>
                         </div>

                         {/* CTA Buttons */}
                         <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                              <Button
                                   href="/camere"
                                   variant="primary"
                                   size="lg"
                                   className="group shadow-xl hover:shadow-2xl transform hover:scale-105"
                              >
                                   Vezi Camerele
                                   <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                              </Button>

                              <Button
                                   href="tel:+40268123456"
                                   variant="secondary"
                                   size="lg"
                                   className="group shadow-xl hover:shadow-2xl transform hover:scale-105"
                              >
                                   <Phone className="mr-2 h-5 w-5" />
                                   Sună Acum
                              </Button>
                         </div>

                         {/* Quick Info */}
                         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                                   <div className="text-traian-gold font-semibold text-lg">
                                        WiFi Gratuit
                                   </div>
                                   <div className="text-white/80 text-sm">
                                        Internet de mare viteză
                                   </div>
                              </div>
                              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                                   <div className="text-traian-gold font-semibold text-lg">
                                        Parcare Gratuită
                                   </div>
                                   <div className="text-white/80 text-sm">
                                        Parcare privată securizată
                                   </div>
                              </div>
                              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                                   <div className="text-traian-gold font-semibold text-lg">
                                        Recepție 24/7
                                   </div>
                                   <div className="text-white/80 text-sm">
                                        Asistență permanentă
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

               {/* Scroll indicator */}
               <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                         <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
                    </div>
               </div>
          </section>
     );
}

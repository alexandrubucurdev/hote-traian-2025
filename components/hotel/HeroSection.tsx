"use client";

import React from "react";
import { ChevronRight, Star, Phone, Car } from "lucide-react"; // MapPin nu era folosit, l-am scos
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations"; // Importăm funcția de animație

export default function HeroSection() {
     return (
          <section className="relative min-h-[90svh] flex items-center justify-center overflow-hidden pt-8 pb-28 md:py-0">
               {/* Background Image */}
               <div className="absolute inset-0 z-0">
                    <div
                         className="w-full h-full bg-cover bg-top md:bg-center md:bg-fixed"
                         style={{
                              backgroundImage: `linear-gradient(rgba(45, 55, 72, 0.4), rgba(139, 21, 56, 0.3)), url('/images/bg.webp')`,
                         }}
                    />
               </div>

               {/* Content */}
               <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center [text-shadow:0_0_8px_rgba(0,0,0,0.8)]">
                    {/* Am eliminat div-ul cu "animate-fade-in" și animăm elementele individual pentru efect de cascadă */}

                    {/* 1. Main Title - Apare primul */}
                    <motion.h1
                         className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight flex items-center justify-center gap-3 sm:gap-5"
                         initial="hidden"
                         animate="visible"
                         variants={fadeIn(0)} // Delay 0
                    >
                         Hotel
                         <Star className="h-8 w-8 sm:h-12 sm:w-12 text-traian-gold fill-current" />
                         <span className="text-white">Traian</span>
                    </motion.h1>

                    {/* 2. Description - Apare după 0.2 secunde */}
                    <motion.p
                         className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
                         initial="hidden"
                         animate="visible"
                         variants={fadeIn(0.2)}
                    >
                         Loc de cazare ideal pentru șederi scurte și buget
                         redus. Curat, funcțional și cu acces facil la toate
                         punctele de interes.
                         <span className="mt-2 text-traian-gold font-medium flex items-center justify-center gap-2">
                              <Car className="h-5 w-5" />
                              La doar 10 minute de Centrul Vechi
                         </span>
                    </motion.p>

                    {/* 3. Rating - Apare după 0.3 secunde */}
                    <motion.div
                         className="flex items-center justify-center space-x-1 mb-8"
                         initial="hidden"
                         animate="visible"
                         variants={fadeIn(0.3)}
                    >
                         {[...Array(1)].map((_, i) => (
                              <Star
                                   key={i}
                                   className="h-5 w-5 text-traian-gold fill-current"
                              />
                         ))}
                         <span className="ml-3 text-white font-medium">
                              Hotel o stea
                         </span>
                    </motion.div>

                    {/* 4. CTA Buttons - Apar după 0.4 secunde */}
                    <motion.div
                         className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
                         initial="hidden"
                         animate="visible"
                         variants={fadeIn(0.4)}
                    >
                         <Button
                              href="/camere"
                              variant="primary"
                              size="lg"
                              className="group shadow-xl hover:shadow-2xl transform hover:scale-105"
                         >
                              Vezi Camerele
                              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                         </Button>

                         <a
                              href="/contact"
                              className="hidden md:inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-traian-gold text-traian-charcoal hover:bg-traian-gold/90 focus:ring-traian-gold px-8 py-4 text-lg group shadow-xl hover:shadow-2xl transform hover:scale-105 cursor-pointer"
                         >
                              <Phone className="mr-2 h-5 w-5" />
                              Sună Acum
                         </a>

                         <a
                              href="tel:+40746332414"
                              className="inline-flex md:hidden items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-traian-gold text-traian-charcoal hover:bg-traian-gold/90 focus:ring-traian-gold px-8 py-4 text-lg group shadow-xl hover:shadow-2xl transform hover:scale-105 cursor-pointer"
                         >
                              <Phone className="mr-2 h-5 w-5" />
                              Sună Acum
                         </a>
                    </motion.div>

                    {/* 5. Quick Info - Apar ultimele (0.6 secunde) */}
                    <motion.div
                         className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
                         initial="hidden"
                         animate="visible"
                         variants={fadeIn(0.6)}
                    >
                         <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                              <div className="text-traian-gold font-semibold text-lg">
                                   WiFi Gratuit
                              </div>
                              <div className="text-white/80 text-sm">
                                   WIFI gratuit în spațiile comune
                              </div>
                         </div>
                         <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                              <div className="text-traian-gold font-semibold text-lg">
                                   Parcare Gratuită
                              </div>
                              <div className="text-white/80 text-sm">
                                   Parcare gratuită
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
                    </motion.div>
               </div>

               {/* Scroll indicator - Acesta poate fi animat separat, să apară ultimul */}
               <motion.div
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
               >
                    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                         <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
                    </div>
               </motion.div>
          </section>
     );
}

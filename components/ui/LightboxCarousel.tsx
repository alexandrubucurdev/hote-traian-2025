"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// --- Definim tipul pentru Props ---
interface ImageProps {
     src: string;
     alt: string;
}

interface LightboxCarouselProps {
     images: ImageProps[];
     show: boolean; // Starea dacă modalul e deschis
     startIndex?: number; // De la ce imagine să pornească
     onClose: () => void; // Funcție pentru a închide
}

// --- Variantele de animație (mutate aici) ---
const swipeVariants = {
     enter: (direction: number) => ({
          x: direction > 0 ? "100%" : "-100%",
          opacity: 0,
     }),
     center: {
          x: 0,
          opacity: 1,
     },
     exit: (direction: number) => ({
          x: direction < 0 ? "100%" : "-100%",
          opacity: 0,
     }),
};

export default function LightboxCarousel({
     images,
     show,
     startIndex = 0,
     onClose,
}: LightboxCarouselProps) {
     // --- State-ul este acum gestionat intern în componentă ---
     const [currentIndex, setCurrentIndex] = useState(startIndex);
     const [direction, setDirection] = useState(0);

     // Sincronizăm startIndex-ul de fiecare dată când modalul este deschis
     useEffect(() => {
          if (show) {
               setCurrentIndex(startIndex);
          }
     }, [show, startIndex]);

     // --- Logica de navigare (mutată aici) ---
     const handleNext = (e: React.MouseEvent) => {
          e.stopPropagation();
          setDirection(1);
          const nextIndex = (currentIndex + 1) % images.length;
          setCurrentIndex(nextIndex);
     };

     const handlePrev = (e: React.MouseEvent) => {
          e.stopPropagation();
          setDirection(-1);
          const prevIndex = (currentIndex - 1 + images.length) % images.length;
          setCurrentIndex(prevIndex);
     };

     return (
          <AnimatePresence>
               {show && (
                    <motion.div
                         initial={{ opacity: 0 }}
                         animate={{ opacity: 1 }}
                         exit={{ opacity: 0 }}
                         transition={{ duration: 0.5, ease: "easeInOut" }}
                         className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
                         onClick={onClose}
                    >
                         {/* Buton Închidere (X) */}
                         <button
                              className="absolute top-5 right-5 z-[101] text-white/70 hover:text-white transition-colors"
                              onClick={onClose}
                         >
                              <X className="h-8 w-8" />
                         </button>

                         {/* Buton Înapoi (<) */}
                         <button
                              className="absolute left-5 z-[101] text-white/70 hover:text-white transition-colors bg-black/30 rounded-full p-2"
                              onClick={handlePrev}
                         >
                              <ChevronLeft className="h-8 w-8" />
                         </button>

                         {/* Buton Înainte (>) */}
                         <button
                              className="absolute right-5 z-[101] text-white/70 hover:text-white transition-colors bg-black/30 rounded-full p-2"
                              onClick={handleNext}
                         >
                              <ChevronRight className="h-8 w-8" />
                         </button>

                         {/* Container Carusel Animat */}
                         <div
                              onClick={(e) => e.stopPropagation()}
                              className="relative w-full h-full max-w-4xl max-h-[80vh] overflow-hidden"
                         >
                              <AnimatePresence
                                   initial={false}
                                   custom={direction}
                              >
                                   <motion.img
                                        key={currentIndex}
                                        src={images[currentIndex].src}
                                        alt={images[currentIndex].alt}
                                        custom={direction}
                                        variants={swipeVariants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{
                                             x: {
                                                  type: "spring",
                                                  stiffness: 300,
                                                  damping: 30,
                                             },
                                             opacity: { duration: 0.2 },
                                        }}
                                        className="absolute w-full h-full object-contain"
                                   />
                              </AnimatePresence>
                         </div>
                    </motion.div>
               )}
          </AnimatePresence>
     );
}

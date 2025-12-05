"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { rooms } from "@/lib/data/rooms";
import Button from "@/components/ui/Button";
import LightboxCarousel from "@/components/ui/LightboxCarousel";

// --- Variantele de animație ---
const fadeIn = (delay = 0) => ({
     hidden: { opacity: 0, y: 20 },
     visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut", delay },
     },
});

// 1. Definim imaginile pentru Zona de Așteptare
const waitingAreaImages = [
     {
          src: "/images/receptie1.webp",
          alt: "Zona de Așteptare",
          roomId: "waiting-area",
     },
     {
          src: "/images/cladire1.webp",
          alt: "Cladirea Hotelului",
          roomId: "waiting-area",
     },
     {
          src: "/images/receptie2.webp",
          alt: "Zona de Așteptare",
          roomId: "waiting-area",
     },
];

// 2. Procesăm imaginile camerelor existente
const roomImages = rooms.flatMap((room) =>
     room.images.map((imgSrc) => ({
          src: imgSrc,
          alt: `Imagine din ${room.name}`,
          roomId: room.id,
     }))
);

// 3. Combinăm toate imaginile
const allImages = [...roomImages, ...waitingAreaImages];

export default function GaleriePage() {
     const [activeCategory, setActiveCategory] = useState("toate");
     const [selectedImageIndex, setSelectedImageIndex] = useState(null);

     const imagesToShow =
          activeCategory === "toate"
               ? allImages
               : allImages.filter((img) => img.roomId === activeCategory);

     const closeLightbox = () => {
          setSelectedImageIndex(null);
     };

     return (
          // MODIFICARE 1: 'flex flex-col' pe containerul părinte
          <div className="min-h-screen bg-traian-cream flex flex-col">
               {/* --- Secțiunea Hero --- */}
               <section
                    className="bg-traian-charcoal text-white py-20 relative"
                    style={{
                         backgroundImage:
                              "radial-gradient(circle, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
                         backgroundSize: "10px 10px",
                    }}
               >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                         <motion.div
                              className="text-center"
                              initial="hidden"
                              animate="visible"
                              variants={fadeIn()}
                         >
                              <h1 className="font-serif text-4xl lg:text-6xl font-bold mb-6">
                                   Galeria Noastră
                              </h1>
                              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                                   Descoperiți spațiile care vă vor face șederea
                                   plăcută.
                              </p>
                         </motion.div>
                    </div>
               </section>

               {/* --- Secțiunea Galeriei --- */}
               {/* MODIFICARE 2: 'flex-1' pentru a umple ecranul */}
               <section className="py-20 flex-1 flex flex-col">
                    {/* MODIFICARE 3: 'flex-1 flex flex-col justify-center' pentru a centra conținutul vertical dacă sunt puține poze */}
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
                         {/* Filtrele de categorii */}
                         <motion.div
                              className="flex justify-center flex-wrap gap-3 mb-12"
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true, amount: 0.1 }}
                              variants={fadeIn(0.2)}
                         >
                              <Button
                                   variant={
                                        activeCategory === "toate"
                                             ? "primary"
                                             : "outline"
                                   }
                                   onClick={() => setActiveCategory("toate")}
                              >
                                   Toate Pozele
                              </Button>

                              <Button
                                   variant={
                                        activeCategory === "waiting-area"
                                             ? "primary"
                                             : "outline"
                                   }
                                   onClick={() =>
                                        setActiveCategory("waiting-area")
                                   }
                              >
                                   Zona de Așteptare
                              </Button>

                              {rooms.map((room) => (
                                   <Button
                                        key={room.id}
                                        variant={
                                             activeCategory === room.id
                                                  ? "primary"
                                                  : "outline"
                                        }
                                        onClick={() =>
                                             setActiveCategory(room.id)
                                        }
                                   >
                                        {room.name}
                                   </Button>
                              ))}
                         </motion.div>

                         {/* Grila de imagini */}
                         <motion.div
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true, amount: 0.1 }}
                              variants={fadeIn(0.4)}
                              className="w-full" // Asigură lățimea completă
                         >
                              <AnimatePresence mode="wait">
                                   <motion.div
                                        key={activeCategory}
                                        className="flex flex-wrap justify-center gap-4"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{
                                             duration: 0.4,
                                             ease: "easeInOut",
                                        }}
                                   >
                                        {imagesToShow.map((image, index) => (
                                             <div
                                                  key={`${image.src}-${index}`}
                                                  // Aici dimensiunea e controlată. Dacă vrei poze mai mari, modifică w-full sm:w-[...]
                                                  className="relative h-64 rounded-lg shadow-md overflow-hidden cursor-pointer group w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.67rem)]"
                                                  onClick={() =>
                                                       setSelectedImageIndex(
                                                            index
                                                       )
                                                  }
                                             >
                                                  <Image
                                                       src={image.src}
                                                       alt={image.alt}
                                                       fill
                                                       sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                       className="object-cover transition-all duration-300 group-hover:scale-110"
                                                  />
                                                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70 group-hover:opacity-100 transition-opacity"></div>
                                                  <span className="absolute bottom-3 left-3 text-white font-medium text-sm p-1 rounded">
                                                       {image.alt.replace(
                                                            "Imagine din ",
                                                            ""
                                                       )}
                                                  </span>
                                             </div>
                                        ))}
                                   </motion.div>
                              </AnimatePresence>
                         </motion.div>
                    </div>
               </section>

               <LightboxCarousel
                    images={imagesToShow}
                    show={selectedImageIndex !== null}
                    startIndex={selectedImageIndex ?? 0}
                    onClose={closeLightbox}
               />
          </div>
     );
}

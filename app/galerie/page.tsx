"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { rooms } from "@/lib/data/rooms";
import Button from "@/components/ui/Button";
import LightboxCarousel from "@/components/ui/LightboxCarousel";

const allImages = rooms.flatMap((room) =>
     room.images.map((imgSrc) => ({
          src: imgSrc,
          alt: `Imagine din ${room.name}`,
          roomId: room.id,
     }))
);

export default function GaleriePage() {
     const [activeCategory, setActiveCategory] = useState("toate");
     const [selectedImageIndex, setSelectedImageIndex] = useState<
          number | null
     >(null);

     const imagesToShow =
          activeCategory === "toate"
               ? allImages
               : allImages.filter((img) => img.roomId === activeCategory);

     const closeLightbox = () => {
          setSelectedImageIndex(null);
     };

     return (
          <div className="min-h-screen bg-traian-cream">
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
                         <div className="text-center">
                              <h1 className="font-serif text-4xl lg:text-6xl font-bold mb-6">
                                   Galeria Noastră
                              </h1>
                              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                                   Explorați vizual confortul și eleganța
                                   Hotelului Traian. Descoperiți spațiile care
                                   vă vor face sejurul de neuitat.
                              </p>
                         </div>
                    </div>
               </section>

               {/* --- Secțiunea Galeriei --- */}
               <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                         {/* Filtrele de categorii */}
                         <div className="flex justify-center flex-wrap gap-3 mb-12">
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
                         </div>

                         {/* Grila de imagini -- MODIFICARE AICI */}
                         <AnimatePresence mode="wait">
                              <motion.div
                                   key={activeCategory}
                                   className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
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
                                             key={image.src}
                                             className="relative h-64 rounded-lg shadow-md overflow-hidden cursor-pointer group"
                                             onClick={() =>
                                                  setSelectedImageIndex(index)
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

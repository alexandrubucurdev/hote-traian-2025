"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
     Wifi,
     Tv,
     Bath,
     Refrigerator,
     Users,
     Maximize2,
     ArrowLeft,
     Check,
     Star,
     Calendar,
     Phone,
     ImageIcon,
     Info,
} from "lucide-react";
import Button from "@/components/ui/Button";
import LightboxCarousel from "@/components/ui/LightboxCarousel";
import { Room } from "@/lib/data/rooms";

// --- Variantele de animație pentru apariție (Exact ca în ContactPage) ---
const fadeIn = (delay = 0) => ({
     hidden: { opacity: 0, y: 20 },
     visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut", delay },
     },
});

interface RoomDetailsClientProps {
     room: Room;
}

export default function RoomDetailsClient({ room }: RoomDetailsClientProps) {
     const [isLightboxOpen, setIsLightboxOpen] = useState(false);
     const [currentImageIndex, setCurrentImageIndex] = useState(0);

     // Pregătim toate imaginile pentru lightbox
     const lightboxImages = room.images.map((img) => ({
          src: img,
          alt: room.name,
     }));

     // Selectăm doar primele 3 imagini pentru afișarea în pagină (fără hero)
     const previewImages = room.images.slice(1, 4);

     const openLightbox = (index: number) => {
          setCurrentImageIndex(index);
          setIsLightboxOpen(true);
     };

     return (
          <>
               <div className="min-h-screen bg-traian-cream/50 font-sans text-traian-charcoal pb-20">
                    {/* --- 1. HERO SECTION --- */}
                    <div
                         className="relative h-[70vh] min-h-[500px] w-full cursor-pointer group overflow-hidden"
                         onClick={() => openLightbox(0)}
                    >
                         <Image
                              src={room.images[0]}
                              alt={room.name}
                              fill
                              priority
                              className="object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                         />
                         <div className="absolute inset-0 bg-gradient-to-t from-traian-charcoal/90 via-traian-charcoal/40 to-transparent" />

                         {/* Buton Back */}
                         <div className="absolute top-8 left-4 md:left-8 z-20 pointer-events-auto">
                              <Link
                                   href="/camere"
                                   onClick={(e) => e.stopPropagation()}
                                   className="flex items-center text-white/90 hover:text-traian-gold transition-colors bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2.5 rounded-full text-sm font-medium"
                              >
                                   <ArrowLeft className="w-4 h-4 mr-2" />
                                   Înapoi la Camere
                              </Link>
                         </div>

                         {/* Text Central */}
                         <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pointer-events-none z-10 mt-10">
                              <motion.span
                                   className="text-traian-gold uppercase tracking-[0.2em] text-xs md:text-sm font-bold mb-4"
                                   initial="hidden"
                                   animate="visible"
                                   variants={fadeIn(0)}
                              >
                                   Hotel Traian Brașov
                              </motion.span>
                              <motion.h1
                                   className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-xl"
                                   initial="hidden"
                                   animate="visible"
                                   variants={fadeIn(0.2)}
                              >
                                   {room.name}
                              </motion.h1>

                              <motion.div
                                   className="pointer-events-auto mt-4"
                                   initial="hidden"
                                   animate="visible"
                                   variants={fadeIn(0.4)}
                              >
                                   <Button
                                        onClick={(e) => {
                                             e?.stopPropagation();
                                             openLightbox(0);
                                        }}
                                        className="flex items-center gap-2 !bg-white/10 hover:!bg-white/20 backdrop-blur-md !text-white !border !border-white/30 !rounded-full transition-all duration-300 hover:scale-105 group-hover:!bg-traian-gold/90 group-hover:!border-traian-gold group-hover:!text-traian-charcoal shadow-none hover:shadow-xl"
                                   >
                                        <ImageIcon className="w-5 h-5" />
                                        <span className="font-medium">
                                             Vezi Galeria Foto
                                        </span>
                                   </Button>
                              </motion.div>
                         </div>
                    </div>

                    {/* --- 2. MAIN CONTENT --- */}
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-20 -mt-20">
                         {/* Folosim items-stretch pentru a forța coloanele să aibă aceeași înălțime */}
                         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                              {/* === COLOANA STÂNGA: Detalii & Facilități === */}
                              <motion.div
                                   className="lg:col-span-2 flex flex-col"
                                   initial="hidden"
                                   animate="visible"
                                   variants={fadeIn(0.2)} // Animație la încărcare
                              >
                                   <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100 h-full flex flex-col">
                                        {/* Statistici Grid */}
                                        <div className="grid grid-cols-3 gap-4 mb-10 pb-10 border-b border-gray-100">
                                             <div className="flex flex-col items-center justify-center p-5 rounded-2xl bg-traian-cream border border-traian-gold/20 text-center hover:shadow-md transition-shadow">
                                                  <Users className="w-6 h-6 text-traian-burgundy mb-2" />
                                                  <span className="text-xs text-gray-500 uppercase tracking-wider font-medium mb-1">
                                                       Capacitate
                                                  </span>
                                                  <span className="font-serif text-lg text-traian-charcoal font-bold">
                                                       {room.capacity}{" "}
                                                       {room.capacity === 1
                                                            ? "Persoană"
                                                            : "Persoane"}
                                                  </span>
                                             </div>
                                             <div className="flex flex-col items-center justify-center p-5 rounded-2xl bg-traian-cream border border-traian-gold/20 text-center hover:shadow-md transition-shadow">
                                                  <Maximize2 className="w-6 h-6 text-traian-burgundy mb-2" />
                                                  <span className="text-xs text-gray-500 uppercase tracking-wider font-medium mb-1">
                                                       Suprafață
                                                  </span>
                                                  <span className="font-serif text-lg text-traian-charcoal font-bold">
                                                       {room.size} mp
                                                  </span>
                                             </div>
                                             <div className="flex flex-col items-center justify-center p-5 rounded-2xl bg-traian-cream border border-traian-gold/20 text-center hover:shadow-md transition-shadow">
                                                  <Star className="w-6 h-6 text-traian-gold mb-2 fill-current" />
                                                  <span className="text-xs text-gray-500 uppercase tracking-wider font-medium mb-1">
                                                       Confort
                                                  </span>
                                                  <span className="font-serif text-lg text-traian-charcoal font-bold">
                                                       Standard
                                                  </span>
                                             </div>
                                        </div>

                                        {/* Descriere */}
                                        <div className="mb-12 flex-grow">
                                             <h2 className="font-serif text-3xl font-bold text-traian-charcoal mb-6 flex items-center">
                                                  <span className="w-1 h-8 bg-traian-burgundy mr-4 rounded-full"></span>
                                                  Despre Cameră
                                             </h2>
                                             <p className="text-gray-600 leading-8 text-lg font-light text-justify">
                                                  {room.description}
                                             </p>
                                        </div>

                                        {/* Facilități */}
                                        <div className="mb-10">
                                             <h3 className="font-serif text-xl font-bold text-traian-charcoal mb-6">
                                                  Facilități Incluse
                                             </h3>
                                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                                                  {room.amenities.map(
                                                       (amenity, index) => (
                                                            <div
                                                                 key={index}
                                                                 className="flex items-center text-gray-700 group"
                                                            >
                                                                 <div className="w-6 h-6 rounded-full bg-traian-cream flex items-center justify-center mr-3 group-hover:bg-traian-gold group-hover:text-white transition-colors duration-300">
                                                                      <Check className="w-3.5 h-3.5" />
                                                                 </div>
                                                                 <span className="text-sm font-medium">
                                                                      {amenity}
                                                                 </span>
                                                            </div>
                                                       )
                                                  )}
                                             </div>
                                        </div>

                                        {/* Icons Row */}
                                        <div className="pt-8 border-t border-gray-100 flex flex-wrap gap-6 md:gap-10 justify-center md:justify-start opacity-70 mt-auto">
                                             <div
                                                  className="flex items-center gap-2"
                                                  title="TV Cablu"
                                             >
                                                  <Tv className="w-5 h-5 text-traian-burgundy" />{" "}
                                                  <span className="text-sm">
                                                       TV
                                                  </span>
                                             </div>
                                             <div
                                                  className="flex items-center gap-2"
                                                  title="Baie Privată"
                                             >
                                                  <Bath className="w-5 h-5 text-traian-burgundy" />{" "}
                                                  <span className="text-sm">
                                                       Baie
                                                  </span>
                                             </div>
                                             <div
                                                  className="flex items-center gap-2"
                                                  title="Frigider"
                                             >
                                                  <Refrigerator className="w-5 h-5 text-traian-burgundy" />{" "}
                                                  <span className="text-sm">
                                                       Frigider
                                                  </span>
                                             </div>
                                        </div>
                                   </div>
                              </motion.div>

                              {/* === COLOANA DREAPTĂ: Preț & Suport === */}
                              <motion.div
                                   className="lg:col-span-1 flex flex-col h-full"
                                   initial="hidden"
                                   animate="visible"
                                   variants={fadeIn(0.4)} // Apare după coloana stângă
                              >
                                   {/* Folosim justify-between pentru a împinge cardul de suport jos, aliniat cu stânga */}
                                   <div className="flex flex-col justify-between h-full gap-6">
                                        {/* Card Rezervare (Sus) */}
                                        <div className="bg-white rounded-3xl shadow-xl p-8 border-t-4 border-traian-burgundy relative overflow-hidden">
                                             <div className="text-center mb-8">
                                                  <span className="inline-block px-3 py-1 bg-traian-cream text-traian-gold text-[10px] font-bold uppercase tracking-wider rounded-full mb-3">
                                                       Tarif
                                                  </span>
                                                  <div className="flex items-baseline justify-center text-traian-charcoal">
                                                       <span className="text-5xl font-serif font-bold text-traian-burgundy">
                                                            {room.price}
                                                       </span>
                                                       <span className="text-xl font-bold ml-1">
                                                            RON
                                                       </span>
                                                       <span className="text-gray-400 text-sm ml-2">
                                                            / noapte
                                                       </span>
                                                  </div>
                                             </div>

                                             <div className="space-y-4 mb-8 bg-traian-cream/30 p-5 rounded-xl border border-gray-100">
                                                  <div className="flex justify-between text-sm items-center">
                                                       <span className="text-gray-600 flex items-center">
                                                            <Calendar className="w-4 h-4 mr-2 text-traian-gold" />{" "}
                                                            Check-in
                                                       </span>
                                                       <span className="font-bold text-traian-charcoal">
                                                            12:00
                                                       </span>
                                                  </div>
                                                  <div className="w-full h-[1px] bg-gray-200"></div>
                                                  <div className="flex justify-between text-sm items-center">
                                                       <span className="text-gray-600 flex items-center">
                                                            <Calendar className="w-4 h-4 mr-2 text-traian-gold" />{" "}
                                                            Check-out
                                                       </span>
                                                       <span className="font-bold text-traian-charcoal">
                                                            12:00
                                                       </span>
                                                  </div>
                                             </div>

                                             <div className="space-y-3">
                                                  <a
                                                       href="tel:+40746332414"
                                                       className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-traian-burgundy text-white hover:bg-traian-burgundy/90 focus:ring-traian-burgundy w-full py-4 text-base shadow-lg shadow-traian-burgundy/20 hover:shadow-traian-burgundy/30 transition-shadow cursor-pointer"
                                                  >
                                                       <Phone className="w-5 h-5 mr-2" />
                                                       Rezervă Telefonic
                                                  </a>
                                                  <Button
                                                       href="/contact"
                                                       variant="outline"
                                                       className="w-full justify-center py-4 text-base border-2 border-gray-200 hover:border-traian-burgundy hover:text-traian-burgundy"
                                                  >
                                                       Trimite Mesaj
                                                  </Button>
                                             </div>

                                             <div className="mt-6 pt-4 border-t border-gray-100 flex items-start gap-2 text-xs text-gray-400 leading-tight">
                                                  <Info className="w-4 h-4 flex-shrink-0" />
                                                  <p>
                                                       Plata se face la
                                                       recepție. Tarifele includ
                                                       toate taxele locale.
                                                  </p>
                                             </div>
                                        </div>

                                        {/* Card Suport (Jos) */}
                                        <div className="bg-traian-charcoal text-white rounded-3xl p-8 text-center relative overflow-hidden group shadow-lg">
                                             <div className="absolute top-0 right-0 w-32 h-32 bg-traian-gold/10 rounded-full blur-2xl -mr-16 -mt-16 transition-all group-hover:bg-traian-gold/20"></div>

                                             <div className="relative z-10">
                                                  <h3 className="font-serif text-xl font-bold mb-3">
                                                       Ai întrebări?
                                                  </h3>
                                                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                                                       Recepția noastră este
                                                       deschisă 24/7 pentru a vă
                                                       ajuta.
                                                  </p>
                                                  <a
                                                       href="tel:+40268123456"
                                                       className="inline-flex items-center text-traian-gold font-bold text-lg hover:text-white transition-colors"
                                                  >
                                                       <Phone className="w-5 h-5 mr-2 animate-pulse" />
                                                       +40 268 333 065
                                                  </a>
                                                  <a
                                                       href="tel:+40746332414"
                                                       className="inline-flex items-center text-traian-gold font-bold text-lg hover:text-white transition-colors"
                                                  >
                                                       <Phone className="w-5 h-5 mr-2 animate-pulse" />
                                                       +40 746 332 414
                                                  </a>
                                             </div>
                                        </div>
                                   </div>
                              </motion.div>
                         </div>
                    </div>

                    {/* --- 3. GALERIE FOTO (Sub secțiunea principală, aliniată pe centru) --- */}
                    {previewImages.length > 0 && (
                         <motion.div
                              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12"
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true, amount: 0.1 }}
                              variants={fadeIn(0.6)}
                         >
                              <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                                   <h2 className="font-serif text-3xl font-bold text-traian-charcoal mb-8 text-center">
                                        Galerie Foto
                                   </h2>
                                   {/* Flex container cu justify-center pentru a centra pozele */}
                                   <div className="flex flex-wrap justify-center gap-6">
                                        {previewImages.map((img, index) => (
                                             <div
                                                  key={index}
                                                  className="relative w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] h-64 rounded-2xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
                                                  onClick={() =>
                                                       openLightbox(index + 1)
                                                  } // index + 1 pentru că sărim peste Hero image
                                             >
                                                  <Image
                                                       src={img}
                                                       alt={`${room.name} ${index}`}
                                                       fill
                                                       className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                  />
                                                  <div className="absolute inset-0 bg-black/0 group-hover:bg-traian-burgundy/20 transition-all duration-300 flex items-center justify-center">
                                                       <Maximize2 className="text-white opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300 drop-shadow-lg" />
                                                  </div>
                                             </div>
                                        ))}
                                   </div>
                              </div>
                         </motion.div>
                    )}
               </div>

               <LightboxCarousel
                    images={lightboxImages}
                    show={isLightboxOpen}
                    startIndex={currentImageIndex}
                    onClose={() => setIsLightboxOpen(false)}
               />
          </>
     );
}

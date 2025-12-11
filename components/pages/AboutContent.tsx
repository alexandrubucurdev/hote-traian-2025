"use client";

import React, { useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import LightboxCarousel from "@/components/ui/LightboxCarousel";
import { motion } from "framer-motion";

// --- Variantele de animație pentru apariție (Exact ca în ContactPage) ---
const fadeIn = (delay = 0) => ({
     hidden: { opacity: 0, y: 20 },
     visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut", delay },
     },
});

const buildingImages = [
     {
          src: "/images/receptie1.webp",
          alt: "Vedere de la Hotel Traian",
     },
     {
          src: "/images/cladire1.webp",
          alt: "Imagine clădire Hotel Traian",
     },
     {
          src: "/images/receptie2.webp",
          alt: "Fațadă Hotel Traian",
     },
];

export default function DespreNoiPage() {
     const [selectedImageIndex, setSelectedImageIndex] = useState<
          number | null
     >(null);

     const closeLightbox = () => {
          setSelectedImageIndex(null);
     };

     return (
          // MODIFICARE 1: Am adăugat 'flex flex-col' pentru a gestiona înălțimea
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
                                   Despre Hotel Traian
                              </h1>
                              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                                   Hotel Traian este soluția ideală pentru
                                   șederi scurte și buget redus. O alegere
                                   practică și accesibilă în Brașov.
                              </p>
                         </motion.div>
                    </div>
               </section>

               {/* --- Secțiunea de Conținut (Text + Poze) --- */}
               {/* MODIFICARE 2: Am adăugat 'flex-1 flex items-center'. 
          Asta forțează secțiunea să ocupe tot spațiul liber și centrează conținutul vertical. */}
               <section className="py-20 flex-1 flex items-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                              {/* Coloana de Text */}
                              <motion.div
                                   className="flex flex-col justify-center"
                                   initial="hidden"
                                   whileInView="visible"
                                   viewport={{ once: true, amount: 0.1 }}
                                   variants={fadeIn(0.2)}
                              >
                                   <Image
                                        src="/logo/logo.svg"
                                        alt="Hotel Traian Logo"
                                        width={180}
                                        height={48}
                                        className="mb-8"
                                   />
                                   <h2 className="font-serif text-3xl lg:text-4xl font-bold text-traian-charcoal mb-6">
                                        Confort și Accesibilitate
                                   </h2>
                                   <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                                        <p>
                                             <span className="font-semibold text-traian-burgundy">
                                                  Hotelul Traian
                                             </span>{" "}
                                             este un loc de cazare ideal pentru
                                             șederi scurte și{" "}
                                             <span className="font-semibold text-traian-burgundy">
                                                  buget redus
                                             </span>
                                             . Curat, funcțional și cu acces
                                             facil la toate punctele de interes.
                                        </p>

                                        <p>
                                             Hotelul oferă cazare în 78 camere
                                             dispuse pe patru nivele, având un
                                             total de 252 locuri de cazare.
                                             Camerele duble sunt cu pat
                                             matrimonial sau twin. Camerele cu 2
                                             și 3 locuri dispun de baie proprie,
                                             televizor și frigider. Pentru
                                             camerele cu 4 locuri, baia este
                                             situată pe hol.
                                        </p>

                                        <p>
                                             Hotelul Traian este o alegere
                                             practică pentru cei care caută
                                             funcționalitate și economie.
                                             Confort de bază la tarif minim.
                                        </p>
                                   </div>
                              </motion.div>

                              {/* Coloana de Imagini */}
                              <motion.div
                                   className="w-full"
                                   initial="hidden"
                                   whileInView="visible"
                                   viewport={{ once: true, amount: 0.1 }}
                                   variants={fadeIn(0.4)}
                              >
                                   <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-4 lg:h-[500px]">
                                        {/* Imaginea Mare */}
                                        <div
                                             className="relative h-64 sm:h-80 lg:h-auto lg:row-span-2 rounded-2xl shadow-xl overflow-hidden group cursor-pointer"
                                             onClick={() =>
                                                  setSelectedImageIndex(0)
                                             }
                                        >
                                             <Image
                                                  src={buildingImages[0].src}
                                                  alt={buildingImages[0].alt}
                                                  fill
                                                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                  sizes="(max-width: 1024px) 100vw, 50vw"
                                             />
                                        </div>

                                        {/* Imaginea Mică 1 */}
                                        <div
                                             className="relative h-64 sm:h-80 lg:h-auto rounded-2xl shadow-xl overflow-hidden group cursor-pointer"
                                             onClick={() =>
                                                  setSelectedImageIndex(1)
                                             }
                                        >
                                             <Image
                                                  src={buildingImages[1].src}
                                                  alt={buildingImages[1].alt}
                                                  fill
                                                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                  sizes="(max-width: 1024px) 100vw, 50vw"
                                             />
                                        </div>

                                        {/* Imaginea Mică 2 */}
                                        <div
                                             className="relative h-64 sm:h-80 lg:h-auto rounded-2xl shadow-xl overflow-hidden group cursor-pointer"
                                             onClick={() =>
                                                  setSelectedImageIndex(2)
                                             }
                                        >
                                             <Image
                                                  src={buildingImages[2].src}
                                                  alt={buildingImages[2].alt}
                                                  fill
                                                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                  sizes="(max-width: 1024px) 100vw, 50vw"
                                             />
                                        </div>
                                   </div>
                              </motion.div>
                         </div>
                    </div>
               </section>

               {/* --- Secțiunea CTA --- */}
               <section
                    className="py-16 bg-traian-burgundy relative"
                    style={{
                         backgroundImage:
                              "radial-gradient(circle, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
                         backgroundSize: "10px 10px",
                    }}
               >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                         <motion.div
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true, amount: 0.1 }}
                              variants={fadeIn(0.2)}
                         >
                              <h2 className="font-serif text-3xl font-bold text-white mb-4">
                                   Sunteți Gata să Ne Vizitați?
                              </h2>
                              <p className="text-traian-gold mb-8 max-w-2xl mx-auto">
                                   Rezervați-vă șederea acum sau contactați-ne
                                   pentru orice întrebare. Echipa noastră este
                                   gata să vă ajute!
                              </p>
                              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                   <Button href="/contact" variant="secondary">
                                        Rezervă Acum
                                   </Button>
                                   <Button
                                        href="/contact"
                                        variant="outline"
                                        className="border-white text-white hover:bg-white hover:text-traian-burgundy"
                                   >
                                        Trimite un Mesaj
                                   </Button>
                              </div>
                         </motion.div>
                    </div>
               </section>

               <LightboxCarousel
                    images={buildingImages}
                    show={selectedImageIndex !== null}
                    startIndex={selectedImageIndex ?? 0}
                    onClose={closeLightbox}
               />
          </div>
     );
}

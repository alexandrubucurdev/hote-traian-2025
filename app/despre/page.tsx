"use client";

import React, { useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import LightboxCarousel from "@/components/ui/LightboxCarousel";

const buildingImages = [
     {
          src: "../images/cladire.jpg",
          alt: "Imagine clădire Hotel Traian",
     },
     {
          src: "../images/cladire2.jpg",
          alt: "Vedere de la Hotel Traian",
     },
     {
          src: "../images/intrare.jpg",
          alt: "Fațadă Hotel Traian",
     },
];

export default function DespreNoiPage() {
     // Starea pentru lightbox
     const [selectedImageIndex, setSelectedImageIndex] = useState<
          number | null
     >(null);

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
                                   Despre Hotel Traian
                              </h1>
                              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                                   Așezat în apropierea dealului Tâmpa, hotelul
                                   nostru este diferit nu numai din punct de
                                   vedere arhitectural, dar și ambiental.
                              </p>
                         </div>
                    </div>
               </section>

               {/* --- Secțiunea de Conținut (Text + Poze) --- */}
               <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                         <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
                              {/* Coloana de Text */}
                              <div className="lg:col-span-3">
                                   {/* --- LOGO ADĂUGAT AICI --- */}
                                   <Image
                                        src="/logo/logo.svg"
                                        alt="Hotel Traian Logo"
                                        width={180}
                                        height={48}
                                        className="mb-8"
                                   />
                                   <h2 className="font-serif text-3xl lg:text-4xl font-bold text-traian-charcoal mb-6">
                                        O Oază de Liniște Lângă Inima Orașului
                                   </h2>
                                   <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                                        <p>
                                             Așezat în apropierea dealului{" "}
                                             <span className="font-semibold text-traian-burgundy">
                                                  Tâmpa
                                             </span>
                                             , hotelul acesta este diferit de
                                             celelalte nu numai din punct de
                                             vedere arhitectural, dar și
                                             ambiental. Zona aleasă, foarte ușor
                                             accesibilă, permite aprecierea
                                             frumuseților oferite de natură dar
                                             și o intimitate pe care orice
                                             turist se așteaptă să o aibă în
                                             scurta-i vacanță. De asemenea,
                                             interioarelor li s-a acordat cu
                                             generozitate spațiu suficient
                                             pentru a te simți în largul tău.
                                        </p>
                                        <p>
                                             Hotel Traian oferă cazare în 78
                                             camere dispuse pe trei nivele,
                                             având un total de 252 locuri de
                                             cazare. Camerele sunt cu pat
                                             matrimonial, cu pat dublu, cu 2 și
                                             3 locuri, dispun de baie proprie și
                                             televizor color. Însă există și
                                             camere cu 2, 3 și 4 locuri la care
                                             baia este situată pe hol.
                                        </p>
                                        <p>
                                             Construcția este dotată cu centrală
                                             termică. Fiecare cameră are baie cu
                                             cabină de duș, TV color conectat la
                                             rețeaua de programe difuzate prin
                                             cablu.
                                        </p>
                                        <p>
                                             Hotel Traian are o poziție
                                             privilegiată. De aici pot fi
                                             admirați atât Munții Bucegi, Munții
                                             Ciucaș cât și dealul{" "}
                                             <span className="font-semibold text-traian-burgundy">
                                                  Tâmpa
                                             </span>
                                             . De altfel, cine ajunge la Brașov
                                             nu trebuie să rateze o vizită în
                                             legendara Biserică (
                                             <span className="font-semibold text-traian-burgundy">
                                                  Biserica Neagră
                                             </span>
                                             ), Muzeul de istorie plasat în
                                             Centrul istoric al Brașovului,
                                             Prima Școală Românească situată în
                                             Șcheii Brașovului de asemenea
                                             vestitele turnuri, Turnul
                                             Țesătorilor și Turnul Alb.
                                        </p>
                                        <p>
                                             Pasionații drumețiilor vor fi
                                             încântați și de celelalte atracții
                                             ale zonei: traseele ce pornesc spre
                                             Piatra Craiului, Poiana Brașov și
                                             Munții Bucegi.
                                        </p>
                                   </div>
                              </div>

                              {/* Coloana de Imagini */}
                              <div className="lg:col-span-2">
                                   <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-4 md:h-[450px]">
                                        {/* Imaginea Mare (Verticală) */}
                                        <div
                                             className="w-full h-80 md:h-full md:col-span-1 md:row-span-2 rounded-2xl shadow-xl overflow-hidden group cursor-pointer"
                                             onClick={() =>
                                                  setSelectedImageIndex(0)
                                             }
                                        >
                                             <Image
                                                  src={buildingImages[0].src}
                                                  alt={buildingImages[0].alt}
                                                  width={600}
                                                  height={800}
                                                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                             />
                                        </div>
                                        {/* Imaginea Mică (Sus) */}
                                        <div
                                             className="w-full h-64 md:h-full md:col-span-1 md:row-span-1 rounded-2xl shadow-xl overflow-hidden group cursor-pointer"
                                             onClick={() =>
                                                  setSelectedImageIndex(1)
                                             }
                                        >
                                             <Image
                                                  src={buildingImages[1].src}
                                                  alt={buildingImages[1].alt}
                                                  width={600}
                                                  height={400}
                                                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                             />
                                        </div>
                                        {/* Imaginea Mică (Jos) */}
                                        <div
                                             className="w-full h-64 md:h-full md:col-span-1 md:row-span-1 rounded-2xl shadow-xl overflow-hidden group cursor-pointer"
                                             onClick={() =>
                                                  setSelectedImageIndex(2)
                                             }
                                        >
                                             <Image
                                                  src={buildingImages[2].src}
                                                  alt={buildingImages[2].alt}
                                                  width={600}
                                                  height={400}
                                                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                             />
                                        </div>
                                   </div>
                              </div>
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
                         <h2 className="font-serif text-3xl font-bold text-white mb-4">
                              Sunteți Gata să Ne Vizitați?
                         </h2>
                         <p className="text-traian-gold mb-8 max-w-2xl mx-auto">
                              Rezervați-vă șederea acum sau contactați-ne pentru
                              orice întrebare. Echipa noastră este gata să vă
                              ajute!
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
                    </div>
               </section>

               {/* --- NOU: Componenta Lightbox (mult mai curată) --- */}
               <LightboxCarousel
                    images={buildingImages}
                    show={selectedImageIndex !== null}
                    startIndex={selectedImageIndex ?? 0}
                    onClose={closeLightbox}
               />
          </div>
     );
}

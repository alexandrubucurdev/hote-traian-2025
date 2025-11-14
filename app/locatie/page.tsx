"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
     MapPin,
     Clock,
     Car,
     Train,
     Footprints,
     Landmark,
     Mountain,
     BookOpen,
     CableCar,
} from "lucide-react";
import Button from "@/components/ui/Button";

const localAttractions = [
     {
          name: "Centrul Istoric",
          distance: "10 min",
          type: "car",
          Icon: MapPin,
          description: "Piața Sfatului și străzile pietonale pline de viață.",
          imageUrl:
               "https://placehold.co/600x400/8B1538/FFFFFF?text=Centrul+Istoric",
     },
     {
          name: "Biserica Neagră",
          distance: "15 min",
          type: "walking",
          Icon: Landmark,
          description: "Un monument istoric emblematic al Brașovului.",
          imageUrl:
               "https://placehold.co/600x400/2D3748/FFFFFF?text=Biserica+Neagră",
     },
     {
          name: "Telecabina Tâmpa",
          distance: "20 min",
          type: "walking",
          Icon: Mountain,
          description: "Panoramă spectaculoasă asupra întregului oraș.",
          imageUrl:
               "https://placehold.co/600x400/2F855A/FFFFFF?text=Vedere+Tâmpa",
     },
     {
          name: "Strada Sforii",
          distance: "15 min",
          type: "walking",
          Icon: Footprints,
          description: "Una dintre cele mai înguste străzi din Europa.",
          imageUrl:
               "https://placehold.co/600x400/D4AF37/2D3748?text=Strada+Sforii",
     },
     {
          name: "Prima Școală Românească",
          distance: "20 min",
          type: "car",
          Icon: BookOpen,
          description: "Un pilon al culturii și educației românești.",
          imageUrl:
               "https://placehold.co/600x400/8B1538/FFFFFF?text=Prima+Școală",
     },
     {
          name: "Turnul Alb & Turnul Negru",
          distance: "25 min",
          type: "walking",
          Icon: Landmark,
          description: "Turnuri de veghe medievale cu priveliști unice.",
          imageUrl:
               "https://placehold.co/600x400/2D3748/FFFFFF?text=Turnurile+Brașovului",
     },
];

const regionalAttractions = [
     {
          name: "Castelul Bran",
          distance: "55 min",
          type: "car",
          Icon: Landmark,
          description: "Descoperiți faimosul castel al lui Dracula.",
          imageUrl:
               "https://placehold.co/600x400/8B1538/FFFFFF?text=Castelul+Bran",
     },
     {
          name: "Castelul Peleș",
          distance: "60 min",
          type: "car",
          Icon: Landmark,
          description: "O perlă a arhitecturii regale românești în Sinaia.",
          imageUrl:
               "https://placehold.co/600x400/D4AF37/2D3748?text=Castelul+Peleș",
     },
     {
          name: "Cetatea Râșnov",
          distance: "40 min",
          type: "car",
          Icon: Landmark,
          description:
               "O fortăreață medievală impresionantă cu vederi superbe.",
          imageUrl:
               "https://placehold.co/600x400/2D3748/FFFFFF?text=Cetatea+Râșnov",
     },
     {
          name: "Poiana Brașov",
          distance: "30 min",
          type: "car",
          Icon: CableCar,
          description: "Cea mai renumită stațiune de schi din România.",
          imageUrl:
               "https://placehold.co/600x400/2F855A/FFFFFF?text=Poiana+Brașov",
     },
     {
          name: "Piatra Craiului",
          distance: "50 min",
          type: "car",
          Icon: Mountain,
          description: "Trasee de drumeție spectaculoase și peisaje alpine.",
          imageUrl:
               "https://placehold.co/600x400/8B1538/FFFFFF?text=Piatra+Craiului",
     },
     {
          name: "Mănăstirea Sâmbăta",
          distance: "90 min",
          type: "car",
          Icon: Landmark,
          description: "Un important centru spiritual și de reculegere.",
          imageUrl:
               "https://placehold.co/600x400/2D3748/FFFFFF?text=Mănăstirea+Sâmbăta",
     },
];

const cardVariants = {
     hidden: { opacity: 0, y: 30 },
     visible: {
          opacity: 1,
          y: 0,
          transition: {
               duration: 0.6,
               ease: "easeOut",
          },
     },
};

export default function LocatiePage() {
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
                                   Locație și Atracții
                              </h1>
                              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                                   Descoperiți avantajele locației noastre și
                                   explorați comorile pe care Brașovul și
                                   împrejurimile le au de oferit.
                              </p>
                         </div>
                    </div>
               </section>

               {/* --- Secțiunea Hartă și Acces --- */}
               <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                              {/* Harta */}
                              <div className="h-96 lg:h-full w-full rounded-2xl overflow-hidden shadow-2xl">
                                   <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d777.8954169979602!2d25.624777618175525!3d45.645756927321585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b35c6300d3f317%3A0x300c5d59f271cfb8!2sTraian!5e1!3m2!1sro!2sro!4v1763121946229!5m2!1sro!2sro"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="rounded-2xl"
                                   />
                              </div>

                              {/* Informații Acces */}
                              <div className="lg:p-8">
                                   <h2 className="font-serif text-3xl lg:text-4xl font-bold text-traian-charcoal mb-6">
                                        Cum Ajungeți la Noi
                                   </h2>
                                   <p className="text-lg text-gray-700 leading-relaxed mb-8">
                                        Hotel Traian este situat strategic pe
                                        Str. Lunii nr. 7, oferind acces facil
                                        atât cu mașina, cât și cu mijloacele de
                                        transport în comun, fiind la doar câteva
                                        minute de inima orașului.
                                   </p>
                                   <div className="space-y-6">
                                        <div className="flex items-start">
                                             <MapPin className="h-6 w-6 text-traian-burgundy mr-4 flex-shrink-0 mt-1" />
                                             <div>
                                                  <h4 className="font-semibold text-traian-charcoal text-lg">
                                                       Adresa Noastră
                                                  </h4>
                                                  <p className="text-gray-600">
                                                       Str. Lunii nr. 7, Brașov,
                                                       500327
                                                  </p>
                                             </div>
                                        </div>
                                        <div className="flex items-start">
                                             <Train className="h-6 w-6 text-traian-burgundy mr-4 flex-shrink-0 mt-1" />
                                             <div>
                                                  <h4 className="font-semibold text-traian-charcoal text-lg">
                                                       Gara Brașov
                                                  </h4>
                                                  <p className="text-gray-600">
                                                       Aproximativ 15 minute cu
                                                       mașina sau taxiul.
                                                  </p>
                                             </div>
                                        </div>
                                        <div className="flex items-start">
                                             <Car className="h-6 w-6 text-traian-burgundy mr-4 flex-shrink-0 mt-1" />
                                             <div>
                                                  <h4 className="font-semibold text-traian-charcoal text-lg">
                                                       Cu Mașina
                                                  </h4>
                                                  <p className="text-gray-600">
                                                       Acces ușor din orice
                                                       direcție. Oferim parcare
                                                       privată gratuită pentru
                                                       oaspeții noștri.
                                                  </p>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>

               {/* --- Secțiunea Atracții Locale --- */}
               <section className="py-20 bg-traian-cream">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                         <div className="text-center mb-16">
                              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-traian-charcoal mb-6">
                                   Atracții Locale
                              </h2>
                              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                   Descoperiți farmecul Brașovului la doar
                                   câțiva pași distanță.
                              </p>
                         </div>

                         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                              {localAttractions.map((item, index) => (
                                   <motion.div
                                        key={item.name}
                                        className="bg-white rounded-2xl shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                                        variants={cardVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.3 }}
                                   >
                                        <div className="relative h-64 w-full">
                                             <Image
                                                  src={item.imageUrl}
                                                  alt={item.name}
                                                  fill
                                                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                                             />
                                             <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                             <div className="absolute top-4 right-4 bg-traian-gold text-traian-charcoal px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                                                  {item.type === "walking" ? (
                                                       <Footprints className="h-4 w-4" />
                                                  ) : (
                                                       <Car className="h-4 w-4" />
                                                  )}
                                                  <span>{item.distance}</span>
                                             </div>
                                        </div>
                                        <div className="p-6">
                                             <item.Icon className="h-8 w-8 text-traian-burgundy mb-3" />
                                             <h3 className="font-serif text-2xl font-bold text-traian-charcoal mb-2">
                                                  {item.name}
                                             </h3>
                                             <p className="text-gray-600">
                                                  {item.description}
                                             </p>
                                        </div>
                                   </motion.div>
                              ))}
                         </div>
                    </div>
               </section>

               {/* --- Secțiunea Atracții Regionale --- */}
               <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                         <div className="text-center mb-16">
                              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-traian-charcoal mb-6">
                                   Excursii de o Zi
                              </h2>
                              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                   Profitați de locația noastră pentru a explora
                                   comorile din împrejurimile Brașovului.
                              </p>
                         </div>

                         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                              {regionalAttractions.map((item, index) => (
                                   <motion.div
                                        key={item.name}
                                        className="bg-white rounded-2xl shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                                        variants={cardVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.3 }}
                                   >
                                        <div className="relative h-64 w-full">
                                             <Image
                                                  src={item.imageUrl}
                                                  alt={item.name}
                                                  fill
                                                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                                             />
                                             <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                             <div className="absolute top-4 right-4 bg-traian-gold text-traian-charcoal px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                                                  <Car className="h-4 w-4" />
                                                  <span>{item.distance}</span>
                                             </div>
                                        </div>
                                        <div className="p-6">
                                             <item.Icon className="h-8 w-8 text-traian-burgundy mb-3" />
                                             <h3 className="font-serif text-2xl font-bold text-traian-charcoal mb-2">
                                                  {item.name}
                                             </h3>
                                             <p className="text-gray-600">
                                                  {item.description}
                                             </p>
                                        </div>
                                   </motion.div>
                              ))}
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
                              Planificați-vă Aventura
                         </h2>
                         <p className="text-traian-gold mb-8 max-w-2xl mx-auto">
                              Echipa noastră vă stă la dispoziție pentru a vă
                              oferi indicații și sfaturi pentru a explora
                              regiunea.
                         </p>
                         <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                              <Button href="/camere" variant="secondary">
                                   Vezi Camerele
                              </Button>
                              <Button
                                   href="/contact"
                                   variant="outline"
                                   className="border-white text-white hover:bg-white hover:text-traian-burgundy"
                              >
                                   Contactează-ne
                              </Button>
                         </div>
                    </div>
               </section>
          </div>
     );
}

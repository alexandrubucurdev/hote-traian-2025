"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
     Users,
     Maximize2,
     ArrowRight,
     Tv,
     Bath,
     Refrigerator,
     Info,
     AlertTriangle,
} from "lucide-react";
import { rooms } from "@/lib/data/rooms";
import Button from "@/components/ui/Button";

// --- Variantele de animație pentru apariție (Exact ca în ContactPage) ---
const fadeIn = (delay = 0) => ({
     hidden: { opacity: 0, y: 20 },
     visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut", delay },
     },
});

export default function CamerePage() {
     return (
          <div className="min-h-screen bg-traian-cream flex flex-col">
               {/* Header */}
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
                                   Camerele Noastre
                              </h1>
                              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                                   Toate camerele sunt dotate cu facilități de
                                   bază.
                              </p>
                         </motion.div>
                    </div>
               </section>

               {/* Rooms Grid */}
               <section className="py-20 flex-1">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                         <div className="flex flex-wrap justify-center gap-8">
                              {rooms.map((room, index) => (
                                   <motion.div
                                        key={room.id}
                                        className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group w-full lg:max-w-xl"
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.1 }}
                                        variants={fadeIn(0.2)}
                                   >
                                        {/* Image */}
                                        <div className="relative h-64 overflow-hidden">
                                             <img
                                                  src={room.images[0]}
                                                  alt={room.name}
                                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                             />
                                             <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                                             {room.isPopular && (
                                                  <div className="absolute top-4 left-4">
                                                       <span className="bg-traian-gold text-traian-charcoal px-3 py-1 rounded-full text-sm font-semibold">
                                                            Populară
                                                       </span>
                                                  </div>
                                             )}

                                             <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                                                  <div className="text-traian-burgundy font-bold text-lg">
                                                       {room.price} RON
                                                  </div>
                                                  <div className="text-gray-600 text-xs">
                                                       per noapte
                                                  </div>
                                             </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-8">
                                             <h2 className="font-serif text-2xl font-bold text-traian-charcoal mb-4">
                                                  {room.name}
                                             </h2>
                                             <p className="text-gray-600 mb-6 leading-relaxed">
                                                  {room.description}
                                             </p>

                                             {/* Room Details */}
                                             <div className="flex items-center space-x-6 mb-6 text-gray-500">
                                                  <div className="flex items-center space-x-2">
                                                       <Users className="h-5 w-5" />
                                                       <span>
                                                            {room.capacity}{" "}
                                                            {room.capacity === 1
                                                                 ? "persoană"
                                                                 : "persoane"}
                                                       </span>
                                                  </div>
                                                  <div className="flex items-center space-x-2">
                                                       <Maximize2 className="h-5 w-5" />
                                                       <span>
                                                            {room.size} mp
                                                       </span>
                                                  </div>
                                             </div>

                                             {/* Key Amenities Icons */}
                                             <div className="flex items-center space-x-4 mb-6">
                                                  <div className="flex items-center space-x-1 text-traian-burgundy">
                                                       <Tv className="h-4 w-4" />
                                                       <span className="text-xs">
                                                            TV
                                                       </span>
                                                  </div>
                                                  <div className="flex items-center space-x-1 text-traian-burgundy">
                                                       <Bath className="h-4 w-4" />
                                                       <span className="text-xs">
                                                            {room.id ===
                                                            "camera-cvadrupla"
                                                                 ? "Baie la comun"
                                                                 : "Baie privată"}
                                                       </span>
                                                  </div>
                                                  <div className="flex items-center space-x-1 text-traian-burgundy">
                                                       <Refrigerator className="h-4 w-4" />
                                                       <span className="text-xs">
                                                            Frigider
                                                       </span>
                                                  </div>
                                             </div>

                                             {/* Amenities List */}
                                             <div className="mb-8">
                                                  <h4 className="font-semibold text-traian-charcoal mb-3">
                                                       Facilități incluse:
                                                  </h4>
                                                  <div className="grid grid-cols-2 gap-2">
                                                       {room.amenities.map(
                                                            (amenity, idx) => (
                                                                 <div
                                                                      key={idx}
                                                                      className="flex items-center space-x-2 text-sm text-gray-600"
                                                                 >
                                                                      <div className="w-1.5 h-1.5 bg-traian-burgundy rounded-full"></div>
                                                                      <span>
                                                                           {
                                                                                amenity
                                                                           }
                                                                      </span>
                                                                 </div>
                                                            )
                                                       )}
                                                  </div>
                                             </div>

                                             {/* CTA Buttons */}
                                             <div className="flex flex-col sm:flex-row gap-4">
                                                  <Button
                                                       href={`/camere/${room.id}`}
                                                       variant="primary"
                                                       className="flex-1"
                                                  >
                                                       Vezi Detaliile
                                                       <ArrowRight className="ml-2 h-4 w-4" />
                                                  </Button>
                                                  <Button
                                                       href="/contact"
                                                       variant="outline"
                                                       className="flex-1"
                                                  >
                                                       Rezervă Acum
                                                  </Button>
                                             </div>
                                        </div>
                                   </motion.div>
                              ))}
                         </div>

                         <motion.div
                              className="mt-20 bg-white rounded-2xl shadow-lg p-8 lg:p-12 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-t-4 border-traian-gold"
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true, amount: 0.1 }}
                              variants={fadeIn(0.4)}
                         >
                              <h3 className="font-serif text-3xl font-bold text-traian-charcoal mb-8 text-center">
                                   Informații Utile & Politici
                              </h3>
                              <ul className="space-y-4 text-gray-700 max-w-2xl mx-auto">
                                   <li className="flex items-start">
                                        <Info className="h-5 w-5 text-traian-burgundy mr-3 flex-shrink-0 mt-1" />
                                        <span>
                                             Tarifele includ toate taxele.
                                        </span>
                                   </li>
                                   <li className="flex items-start">
                                        <Info className="h-5 w-5 text-traian-burgundy mr-3 flex-shrink-0 mt-1" />
                                        <span>
                                             Ziua hotelieră începe la ora 12:00
                                             și se termină a doua zi la ora
                                             12:00.
                                        </span>
                                   </li>
                                   <li className="flex items-start">
                                        <Info className="h-5 w-5 text-traian-burgundy mr-3 flex-shrink-0 mt-1" />
                                        <span>
                                             Cazarea se face doar pe baza cărții
                                             de identitate sau a pașaportului.
                                        </span>
                                   </li>
                                   <li className="flex items-start">
                                        <Info className="h-5 w-5 text-traian-burgundy mr-3 flex-shrink-0 mt-1" />
                                        <span>
                                             Plata se face în momentul cazării.
                                        </span>
                                   </li>
                                   <li className="flex items-start">
                                        <AlertTriangle className="h-5 w-5 text-traian-gold mr-3 flex-shrink-0 mt-1" />
                                        <span className="font-medium text-traian-charcoal">
                                             Nu lăsați bunuri de valoare în
                                             camere!
                                        </span>
                                   </li>
                                   <li className="flex items-start">
                                        <AlertTriangle className="h-5 w-5 text-traian-gold mr-3 flex-shrink-0 mt-1" />
                                        <span className="font-medium text-traian-charcoal">
                                             Nu răspundem pentru bunurile și
                                             mașinile din parcare!
                                        </span>
                                   </li>
                              </ul>
                         </motion.div>
                    </div>
               </section>

               {/* CTA Section */}
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
                                   Ai nevoie de ajutor la alegerea camerei?
                              </h2>
                              <p className="text-traian-gold mb-8 max-w-2xl mx-auto">
                                   Echipa noastră este disponibilă 24/7 pentru a
                                   vă ajuta să alegeți camera perfectă pentru
                                   sejurul dumneavoastră.
                              </p>
                              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                   <a
                                        href="tel:+40746332414"
                                        className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-traian-gold text-traian-charcoal hover:bg-traian-gold/90 focus:ring-traian-gold px-6 py-3 text-base cursor-pointer"
                                   >
                                        Sună la Recepție
                                   </a>
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
          </div>
     );
}

import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
     Users,
     Maximize2,
     ArrowRight,
     Wifi,
     Tv,
     Bath,
     Wind,
} from "lucide-react";
import { rooms } from "@/lib/data/rooms";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
     title: "Camere & Tarife | Hotel Traian Brașov",
     description:
          "Descoperă gama completă de camere ale Hotel Traian din Brașov. Camere standard, superioare, triple și suite executive cu facilități moderne.",
};

export default function CamerePage() {
     return (
          <div className="min-h-screen bg-gray-50">
               {/* Header */}
               <section className="bg-traian-charcoal text-white py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                         <div className="text-center">
                              <h1 className="font-serif text-4xl lg:text-6xl font-bold mb-6">
                                   Camerele Noastre
                              </h1>
                              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                                   Alege camera perfectă pentru sejurul tău în
                                   Brașov. Toate camerele sunt dotate cu
                                   facilități moderne pentru confortul maxim.
                              </p>
                         </div>
                    </div>
               </section>

               {/* Rooms Grid */}
               <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                              {rooms.map((room, index) => (
                                   <div
                                        key={room.id}
                                        className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
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
                                                       {room.price.low} -{" "}
                                                       {room.price.high} RON
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
                                                       <Wifi className="h-4 w-4" />
                                                       <span className="text-xs">
                                                            WiFi
                                                       </span>
                                                  </div>
                                                  <div className="flex items-center space-x-1 text-traian-burgundy">
                                                       <Tv className="h-4 w-4" />
                                                       <span className="text-xs">
                                                            TV
                                                       </span>
                                                  </div>
                                                  <div className="flex items-center space-x-1 text-traian-burgundy">
                                                       <Bath className="h-4 w-4" />
                                                       <span className="text-xs">
                                                            Baie
                                                       </span>
                                                  </div>
                                                  <div className="flex items-center space-x-1 text-traian-burgundy">
                                                       <Wind className="h-4 w-4" />
                                                       <span className="text-xs">
                                                            AC
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
                                   </div>
                              ))}
                         </div>
                    </div>
               </section>

               {/* CTA Section */}
               <section className="py-16 bg-traian-burgundy">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                         <h2 className="font-serif text-3xl font-bold text-white mb-4">
                              Ai nevoie de ajutor la alegerea camerei?
                         </h2>
                         <p className="text-traian-gold mb-8 max-w-2xl mx-auto">
                              Echipa noastră este disponibilă 24/7 pentru a vă
                              ajuta să alegeți camera perfectă pentru sejurul
                              dumneavoastră.
                         </p>
                         <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                              <Button
                                   href="tel:+40268123456"
                                   variant="secondary"
                              >
                                   Sună la Recepție
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
          </div>
     );
}

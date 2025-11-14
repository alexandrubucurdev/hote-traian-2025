import React from "react";
import Link from "next/link";
import { Users, ArrowRight, Maximize2 } from "lucide-react";
import { getPopularRooms } from "@/lib/data/rooms";
import Button from "@/components/ui/Button";

export default function RoomsPreview() {
     const popularRooms = getPopularRooms();

     return (
          <section className="py-20 bg-white">
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-16">
                         <h2 className="font-serif text-4xl lg:text-5xl font-bold text-traian-charcoal mb-6">
                              Camerele Noastre
                         </h2>
                         <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                              Alege din gama noastră variată de camere, fiecare
                              dotată cu facilități moderne pentru confortul
                              dumneavoastră.
                         </p>
                    </div>

                    {/* Rooms Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                         {popularRooms.map((room, index) => (
                              <div
                                   key={room.id}
                                   className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
                              >
                                   {/* Image */}
                                   <div className="relative h-64 overflow-hidden">
                                        <img
                                             src={room.images[0]}
                                             alt={room.name}
                                             className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                                        {/* Popular Badge */}
                                        <div className="absolute top-4 left-4">
                                             <span className="bg-traian-gold text-traian-charcoal px-3 py-1 rounded-full text-sm font-semibold">
                                                  Populară
                                             </span>
                                        </div>

                                        {/* Price */}
                                        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                                             <div className="text-traian-burgundy font-bold text-lg">
                                                  {room.price} RON
                                             </div>
                                             <div className="text-gray-600 text-xs">
                                                  per noapte
                                             </div>
                                        </div>
                                   </div>

                                   {/* Content */}
                                   <div className="p-6">
                                        <h3 className="font-serif text-2xl font-semibold text-traian-charcoal mb-3">
                                             {room.name}
                                        </h3>
                                        <p className="text-gray-600 mb-4 leading-relaxed">
                                             {room.shortDescription}
                                        </p>

                                        {/* Room Details */}
                                        <div className="flex items-center space-x-6 mb-6 text-sm text-gray-500">
                                             <div className="flex items-center space-x-2">
                                                  <Users className="h-4 w-4" />
                                                  <span>
                                                       {room.capacity}{" "}
                                                       {room.capacity === 1
                                                            ? "persoană"
                                                            : "persoane"}
                                                  </span>
                                             </div>
                                             <div className="flex items-center space-x-2">
                                                  <Maximize2 className="h-4 w-4" />
                                                  <span>{room.size} mp</span>
                                             </div>
                                        </div>

                                        {/* Amenities Preview */}
                                        <div className="mb-6">
                                             <div className="flex flex-wrap gap-2">
                                                  {room.amenities
                                                       .slice(0, 3)
                                                       .map((amenity, idx) => (
                                                            <span
                                                                 key={idx}
                                                                 className="bg-traian-cream text-traian-charcoal px-3 py-1 rounded-full text-xs"
                                                            >
                                                                 {amenity}
                                                            </span>
                                                       ))}
                                                  {room.amenities.length >
                                                       3 && (
                                                       <span className="text-traian-burgundy text-xs px-3 py-1">
                                                            +
                                                            {room.amenities
                                                                 .length -
                                                                 3}{" "}
                                                            mai multe
                                                       </span>
                                                  )}
                                             </div>
                                        </div>

                                        {/* CTA */}
                                        <Link
                                             href={`/camere/${room.id}`}
                                             className="inline-flex items-center space-x-2 text-traian-burgundy hover:text-traian-burgundy/80 font-semibold group/link"
                                        >
                                             <span>Vezi Detaliile</span>
                                             <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                                        </Link>
                                   </div>
                              </div>
                         ))}
                    </div>

                    {/* View All Rooms CTA */}
                    <div className="text-center">
                         <Button href="/camere" variant="outline" size="lg">
                              Vezi Toate Camerele
                              <ArrowRight className="ml-2 h-5 w-5" />
                         </Button>
                    </div>
               </div>
          </section>
     );
}

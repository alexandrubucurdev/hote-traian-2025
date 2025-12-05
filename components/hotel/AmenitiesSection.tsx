import React from "react";
import { hotelAmenities } from "@/lib/data/amenities";

export default function AmenitiesSection() {
     return (
          <section className="py-20 bg-traian-cream">
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-16">
                         <h2 className="font-serif text-4xl lg:text-5xl font-bold text-traian-charcoal mb-8">
                              Facilitățile Hotelului
                         </h2>

                         {/* Secțiunea Servicii Gratuite - Obligatorie */}
                         <div className="mb-8">
                              <h3 className="font-serif text-sm font-bold text-traian-burgundy uppercase tracking-[0.2em] mb-4 relative inline-block after:content-[''] after:block after:w-1/2 after:h-[1px] after:bg-traian-gold after:mx-auto after:mt-2">
                                   Servicii Gratuite
                              </h3>
                              <p className="text-gray-700 font-medium max-w-4xl mx-auto leading-loose text-base md:text-lg">
                                   <span className="whitespace-nowrap">
                                        WIFI &bull;
                                   </span>{" "}
                                   <span className="whitespace-nowrap">
                                        Parcare &bull;
                                   </span>{" "}
                                   <span className="whitespace-nowrap">
                                        Recepție 24/7 &bull;
                                   </span>{" "}
                                   <span className="whitespace-nowrap">
                                        Sistem de supraveghere &bull;
                                   </span>{" "}
                                   <span className="whitespace-nowrap">
                                        Comenzi taxi &bull;
                                   </span>{" "}
                                   <span className="whitespace-nowrap">
                                        Zonă de așteptare &bull;
                                   </span>{" "}
                                   <span className="whitespace-nowrap">
                                        Depozit bagaje
                                   </span>
                              </p>
                         </div>

                         <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                              Vă oferim toate facilitățile necesare pentru un
                              sejur confortabil în Brașov.
                         </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-8">
                         {hotelAmenities.map((amenity, index) => {
                              const IconComponent = amenity.icon;
                              return (
                                   <div
                                        key={amenity.id}
                                        className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 basis-full md:basis-[calc(50%-1rem)] lg:basis-[calc(25%-1.5rem)] shrink-0 grow-0"
                                   >
                                        <div className="flex flex-col items-center text-center">
                                             {/* Icon */}
                                             <div className="w-16 h-16 bg-traian-burgundy/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-traian-burgundy group-hover:scale-110 transition-all duration-300">
                                                  <IconComponent className="h-8 w-8 text-traian-burgundy group-hover:text-white transition-colors duration-300" />
                                             </div>

                                             {/* Content */}
                                             <h3 className="font-semibold text-lg text-traian-charcoal mb-2">
                                                  {amenity.name}
                                             </h3>
                                             <p className="text-gray-600 text-sm leading-relaxed">
                                                  {amenity.description}
                                             </p>
                                        </div>
                                   </div>
                              );
                         })}
                    </div>

                    {/* Additional Info */}
                    <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
                         <div className="text-center">
                              <h3 className="font-serif text-2xl font-bold text-traian-charcoal mb-4">
                                   De Ce Să Alegeți Hotel Traian?
                              </h3>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                                   <div className="text-center">
                                        <div className="text-3xl font-bold text-traian-burgundy mb-2">
                                             10 min
                                        </div>
                                        <div className="text-gray-600">
                                             până în Centrul Vechi
                                        </div>
                                   </div>
                                   <div className="text-center">
                                        <div className="text-3xl font-bold text-traian-burgundy mb-2">
                                             24/7
                                        </div>
                                        <div className="text-gray-600">
                                             servicii de recepție
                                        </div>
                                   </div>
                                   <div className="text-center">
                                        <div className="text-3xl font-bold text-traian-burgundy mb-2">
                                             100%
                                        </div>
                                        <div className="text-gray-600">
                                             satisfacția clienților
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
}

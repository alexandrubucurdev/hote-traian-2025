import React from "react";
import { MapPin, Clock, Car, Train } from "lucide-react";
import Button from "@/components/ui/Button";

const attractions = [
     {
          name: "Centrul Istoric",
          distance: "10 min",
          type: "car",
          description: "Piața Sfatului și străzile pietonale",
     },
     {
          name: "Biserica Neagră",
          distance: "15 min",
          type: "walking",
          description: "Monument istoric emblematic",
     },
     {
          name: "Telecabina Tâmpa",
          distance: "20 min",
          type: "walking",
          description: "Panoramă spectaculoasă asupra orașului",
     },
     {
          name: "Parc Aventura",
          distance: "10 min",
          type: "car",
          description:
               "Cel mai mare parc de aventură din zonă, cu multiple tiroliene și trasee.",
     },
     {
          name: "Canionul 7 Scări",
          distance: "15 min",
          type: "car",
          description: "Defileu spectaculos cu cascade și scări metalice",
     },
     {
          name: "Castelul Bran",
          distance: "55 min",
          type: "car",
          description: "Castelul lui Dracula",
     },
     {
          name: "Castelul Peleș",
          distance: "60 min",
          type: "car",
          description: "Perlă a arhitecturii românești",
     },
     {
          name: "Cetatea Râșnov",
          distance: "40 min",
          type: "car",
          description: "Fortăreață medievală impresionantă",
     },
];

export default function LocationSection() {
     return (
          <section className="py-20 bg-white">
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-16">
                         <h2 className="font-serif text-4xl lg:text-5xl font-bold text-traian-charcoal mb-6">
                              Localizare Perfectă
                         </h2>
                         <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                              Hotel Traian beneficiază de o locație accesibilă
                              în Brașov, oferind conexiuni facile către punctele
                              de interes ale orașului și ale împrejurimilor.
                         </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                         {/* Map */}
                         <div className="relative">
                              <div className="relative h-96 bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
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
                              <div className="hidden md:block absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                                   <div className="flex items-center space-x-2">
                                        <MapPin className="h-5 w-5 text-traian-burgundy" />
                                        <div>
                                             <div className="font-semibold text-traian-charcoal">
                                                  Hotel Traian
                                             </div>
                                             <div className="text-sm text-gray-600">
                                                  Str. Lunii nr. 7, Brașov
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>

                         {/* Attractions */}
                         <div>
                              <h3 className="font-serif text-2xl font-bold text-traian-charcoal mb-6">
                                   Atracții în Apropiere
                              </h3>
                              <div className="space-y-4">
                                   {attractions.map((attraction, index) => (
                                        <div
                                             key={index}
                                             className="bg-traian-cream rounded-lg p-4 hover:shadow-md transition-shadow"
                                        >
                                             <div className="flex items-center justify-between mb-2">
                                                  <h4 className="font-semibold text-traian-charcoal">
                                                       {attraction.name}
                                                  </h4>
                                                  <div className="flex items-center space-x-2 text-traian-burgundy">
                                                       {attraction.type ===
                                                       "walking" ? (
                                                            <Clock className="h-4 w-4" />
                                                       ) : (
                                                            <Car className="h-4 w-4" />
                                                       )}
                                                       <span className="font-medium text-sm">
                                                            {
                                                                 attraction.distance
                                                            }
                                                       </span>
                                                  </div>
                                             </div>
                                             <p className="text-gray-600 text-sm">
                                                  {attraction.description}
                                             </p>
                                        </div>
                                   ))}
                              </div>

                              {/* Transport Info */}
                              <div className="mt-8 p-6 bg-traian-burgundy/5 rounded-xl">
                                   <h4 className="font-semibold text-traian-charcoal mb-4">
                                        Informații Transport
                                   </h4>
                                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                                        <div className="flex items-center space-x-2">
                                             <Train className="h-4 w-4 text-traian-burgundy" />
                                             <span className="text-gray-700">
                                                  Gara Brașov: 15 min cu mașina
                                             </span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                             <Car className="h-4 w-4 text-traian-burgundy" />
                                             <span className="text-gray-700">
                                                  Parcare gratuită disponibilă
                                             </span>
                                        </div>
                                   </div>
                              </div>

                              <div className="mt-6">
                                   <Button href="/locatie" variant="outline">
                                        Vezi Mai Multe Detalii
                                   </Button>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
}

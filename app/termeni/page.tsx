"use client";

import React from "react";
import { motion } from "framer-motion";
import {
     Clock,
     Key,
     AlertCircle,
     CalendarDays,
     CreditCard,
     Cigarette,
     ShieldCheck,
     Car,
     Dog,
     Users,
     Leaf,
     Gavel,
     Shirt,
     Lock,
     Info,
} from "lucide-react";

// --- Variantele de animație pentru apariție (Exact ca în ContactPage) ---
const fadeIn = (delay = 0) => ({
     hidden: { opacity: 0, y: 20 },
     visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut", delay },
     },
});

export default function TermeniPage() {
     return (
          <div className="min-h-screen bg-traian-cream flex flex-col">
               {/* --- Header / Hero Section --- */}
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
                                   Termeni și Condiții
                              </h1>
                              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                                   Vă rugăm să citiți cu atenție regulamentul
                                   nostru de ordine interioară.
                              </p>
                         </motion.div>
                    </div>
               </section>

               {/* --- Main Content --- */}
               <section className="py-20 flex-1">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                         <motion.div
                              className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-12"
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true, amount: 0.1 }}
                              variants={fadeIn(0.2)}
                         >
                              {/* Introducere */}
                              <div className="text-gray-700 leading-relaxed border-b border-gray-100 pb-8">
                                   <p className="mb-4">
                                        Site-ul{" "}
                                        <strong>www.hotelultraian.ro</strong>{" "}
                                        este un site comercial, proprietate a{" "}
                                        <strong>
                                             SC ACTIVA CONSTRUCTII SA
                                        </strong>
                                        , care permite efectuarea de rezervări
                                        de camere la Hotelul Traian din Brașov.
                                   </p>
                                   <p>
                                        Folosirea, incluzând vizitarea și
                                        cumpărarea de servicii turistice de pe
                                        site-ul{" "}
                                        <strong>www.hotelultraian.ro</strong>{" "}
                                        implică acceptarea termenilor și
                                        condițiilor detaliate în următoarele
                                        paragrafe:
                                   </p>
                              </div>

                              {/* Sosire și Plecare */}
                              <section>
                                   <div className="flex items-center space-x-3 mb-4">
                                        <Clock className="h-6 w-6 text-traian-burgundy" />
                                        <h2 className="font-serif text-2xl font-bold text-traian-charcoal">
                                             Sosire și Plecare
                                        </h2>
                                   </div>
                                   <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2">
                                        <li>
                                             Cazarea se face începând cu ora{" "}
                                             <strong>14:00</strong>.
                                        </li>
                                        <li>
                                             Eliberarea camerelor se face până
                                             în ora <strong>12:00</strong>.
                                        </li>
                                        <li>
                                             La solicitarea clienților și când
                                             hotelul dispune de locuri libere,
                                             se pot aplica conform practicii
                                             internaționale, tarife speciale
                                             pentru rămânerea după ora 12:00 în
                                             cameră, astfel: pentru rămânerea
                                             până la ora 20:00 se va încasa 50%
                                             din tariful afișat.
                                        </li>
                                   </ul>
                              </section>

                              {/* Cazare */}
                              <section>
                                   <div className="flex items-center space-x-3 mb-4">
                                        <Key className="h-6 w-6 text-traian-burgundy" />
                                        <h2 className="font-serif text-2xl font-bold text-traian-charcoal">
                                             Cazare
                                        </h2>
                                   </div>
                                   <div className="text-gray-700 space-y-3">
                                        <p>
                                             Cazarea fiecărei persoane se face
                                             prin completarea fișei de anunțare
                                             a sosirii pe baza actului de
                                             identitate sau a pașaportului.
                                        </p>
                                        <p>
                                             Achitarea costurilor aferente
                                             cazării se va face la recepție în
                                             momentul sosirii. Din momentul
                                             preluării cheii de la recepție,
                                             turistul răspunde pentru camera
                                             rezervată.
                                        </p>
                                   </div>
                              </section>

                              {/* Obligațiile Turiștilor */}
                              <section>
                                   <div className="flex items-center space-x-3 mb-4">
                                        <AlertCircle className="h-6 w-6 text-traian-burgundy" />
                                        <h2 className="font-serif text-2xl font-bold text-traian-charcoal">
                                             Obligațiile Turiștilor
                                        </h2>
                                   </div>
                                   <p className="mb-4 text-gray-700 font-medium">
                                        Turiștii trebuie:
                                   </p>
                                   <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2">
                                        <li>
                                             Să nu deterioreze obiectele din
                                             dotarea Hotelului. În caz contrar,
                                             aceștia datorează Hotelului suma
                                             egală cu valoarea obiectului
                                             deteriorat și manopera de
                                             înlocuire.
                                        </li>
                                        <li>
                                             Să nu preia la plecare vreun obiect
                                             din dotare.
                                        </li>
                                        <li>
                                             Să nu deranjeze liniștea celorlalți
                                             clienți.
                                        </li>
                                        <li>
                                             Să nu lase copiii nesupravegheați.
                                        </li>
                                        <li>
                                             Să anunțe cât de repede posibil
                                             orice defecțiune a aparatelor sau
                                             instalațiilor din dotare.
                                        </li>
                                        <li>
                                             Să nu folosească prosoapele din
                                             dotarea hotelului pentru: șters
                                             părul vopsit, demacheat, curățat
                                             încălțămintea, geamantanele,
                                             pardoseala etc. A se folosi
                                             exclusiv pentru uz corporal.
                                        </li>
                                        <li>
                                             Să nu arunce în WC hârtie,
                                             șervețele umede și alte obiecte
                                             care ar putea conduce la avarierea
                                             stației de colectare a
                                             reziduurilor.
                                        </li>
                                        <li>
                                             Să predea cheia la recepție după
                                             expirarea perioadei rezervate.
                                             Predarea se va face numai după ce
                                             s-a realizat verificarea camerei de
                                             către personalul de serviciu al
                                             hotelului.
                                        </li>
                                   </ul>
                              </section>

                              {/* Rezervare și Anulare */}
                              <section>
                                   <div className="flex items-center space-x-3 mb-4">
                                        <CalendarDays className="h-6 w-6 text-traian-burgundy" />
                                        <h2 className="font-serif text-2xl font-bold text-traian-charcoal">
                                             Rezervare și Anulare
                                        </h2>
                                   </div>
                                   <div className="text-gray-700 space-y-4">
                                        <p>
                                             Pentru rezervare și orice anulare
                                             de rezervare contactați recepția
                                             hotelului.
                                        </p>
                                        <div className="bg-traian-cream/50 p-4 rounded-lg border border-traian-gold/30">
                                             <p className="mb-2">
                                                  <strong>
                                                       Rezervări mici (până la 5
                                                       camere):
                                                  </strong>{" "}
                                                  Nu se vor aplica penalizări
                                                  dacă anularea se va face cu
                                                  cel puțin{" "}
                                                  <strong>
                                                       5 zile înainte
                                                  </strong>
                                                  . Penalizarea reprezintă
                                                  contravaloarea primei zile de
                                                  cazare.
                                             </p>
                                             <p className="mb-2">
                                                  <strong>
                                                       Rezervări mari (5 sau mai
                                                       multe camere):
                                                  </strong>{" "}
                                                  Anularea acestora se va face
                                                  cu cel puțin{" "}
                                                  <strong>
                                                       10 zile înainte
                                                  </strong>{" "}
                                                  de data sosirii.
                                             </p>
                                             <p>
                                                  Pentru o rezervare de mai mult
                                                  de 5 camere, se va solicita
                                                  achitarea unui avans. Avansul
                                                  plătit nu se poate returna în
                                                  caz de anulare a rezervării.
                                             </p>
                                        </div>
                                   </div>
                              </section>

                              {/* Tarife și Plată */}
                              <section>
                                   <div className="flex items-center space-x-3 mb-4">
                                        <CreditCard className="h-6 w-6 text-traian-burgundy" />
                                        <h2 className="font-serif text-2xl font-bold text-traian-charcoal">
                                             Tarife și Modalități de Plată
                                        </h2>
                                   </div>
                                   <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2">
                                        <li>
                                             Tarifele diferă în funcție de tipul
                                             de cameră ales și de numărul de
                                             persoane.
                                        </li>
                                        <li>
                                             Este acceptată plata{" "}
                                             <strong>numerar (RON)</strong>,{" "}
                                             <strong>cărți de credit</strong>{" "}
                                             (Visa, Mastercard, Maestro) și{" "}
                                             <strong>transfer bancar</strong>.
                                        </li>
                                   </ul>
                              </section>

                              {/* Fumatul */}
                              <section>
                                   <div className="flex items-center space-x-3 mb-4">
                                        <Cigarette className="h-6 w-6 text-traian-burgundy" />
                                        <h2 className="font-serif text-2xl font-bold text-traian-charcoal">
                                             Fumatul
                                        </h2>
                                   </div>
                                   <p className="text-gray-700">
                                        Nu este permis fumatul în interiorul
                                        hotelului. Există spații destinate
                                        persoanelor fumătoare (pe balcoanele
                                        comune și în fața hotelului).
                                   </p>
                              </section>

                              {/* Siguranța */}
                              <section>
                                   <div className="flex items-center space-x-3 mb-4">
                                        <ShieldCheck className="h-6 w-6 text-traian-burgundy" />
                                        <h2 className="font-serif text-2xl font-bold text-traian-charcoal">
                                             Siguranța
                                        </h2>
                                   </div>
                                   <div className="text-gray-700 space-y-2">
                                        <p>
                                             Hotelul și spațiile publice sunt
                                             supravegheate prin sistem video. Nu
                                             ne asumăm răspunderea pentru
                                             obiectele uitate, pierdute sau
                                             presupus furate în incita
                                             hotelului.
                                        </p>
                                        <p>
                                             Orice accident produs ca urmare a
                                             utilizării necorespunzătoare a
                                             obiectelor din dotare, a
                                             nerespectării prezentului
                                             regulament sau a nesupravegherii
                                             copiilor nu este responsabilitatea
                                             noastră.
                                        </p>
                                        <p className="font-medium text-red-600">
                                             Este interzis accesul în hotel cu
                                             consumatori electrici mari,
                                             reșouri, radiatoare, fierbătoare.
                                        </p>
                                   </div>
                              </section>

                              {/* Parcare */}
                              <section>
                                   <div className="flex items-center space-x-3 mb-4">
                                        <Car className="h-6 w-6 text-traian-burgundy" />
                                        <h2 className="font-serif text-2xl font-bold text-traian-charcoal">
                                             Parcare
                                        </h2>
                                   </div>
                                   <p className="text-gray-700">
                                        Unitatea hotelieră beneficiază de
                                        parcare proprie gratuită. Nu ne asumăm
                                        răspunderea pentru furturi din
                                        autoturismele clienților noștri (sugerăm
                                        evitarea lăsării de obiecte la vedere).
                                   </p>
                              </section>

                              {/* Animale */}
                              <section>
                                   <div className="flex items-center space-x-3 mb-4">
                                        <Dog className="h-6 w-6 text-traian-burgundy" />
                                        <h2 className="font-serif text-2xl font-bold text-traian-charcoal">
                                             Animale de Companie
                                        </h2>
                                   </div>
                                   <p className="text-gray-700">
                                        Regula generală este că{" "}
                                        <strong>nu este permisă</strong> cazarea
                                        în hotel a persoanelor însoțite de
                                        animale și păsări. În cazuri
                                        excepționale și numai cu acordul
                                        hotelului, cazarea acestora se poate
                                        face prin prezentarea la sosire a
                                        certificatului național / internațional
                                        de sănătate (cu vaccinări). Taxa de
                                        plată reprezintă 50% din valoarea
                                        încasată pentru o persoană.
                                   </p>
                              </section>

                              {/* Vizitatori */}
                              <section>
                                   <div className="flex items-center space-x-3 mb-4">
                                        <Users className="h-6 w-6 text-traian-burgundy" />
                                        <h2 className="font-serif text-2xl font-bold text-traian-charcoal">
                                             Vizitatori
                                        </h2>
                                   </div>
                                   <p className="text-gray-700">
                                        Puteți primi vizitatori în camera
                                        dumneavoastră între orele{" "}
                                        <strong>08:00 și 22:00</strong>, fără
                                        costuri suplimentare, cu obligația
                                        înregistrării la recepție. După ora
                                        22:00 nu sunt permise vizitele în
                                        cameră.
                                   </p>
                              </section>

                              {/* Protecția Mediului */}
                              <section>
                                   <div className="flex items-center space-x-3 mb-4">
                                        <Leaf className="h-6 w-6 text-traian-burgundy" />
                                        <h2 className="font-serif text-2xl font-bold text-traian-charcoal">
                                             Protecția Mediului
                                        </h2>
                                   </div>
                                   <p className="text-gray-700">
                                        Protecția mediului reprezintă o
                                        preocupare permanentă. Lenjeria și
                                        prosoapele se schimbă la 3, respectiv 2
                                        zile de cazare sau la cererea
                                        clientului. Pentru a ne semnala dorința
                                        de a schimba obiecte de lenjerie sau
                                        prosoape, vă rugăm să le lăsați pe jos
                                        lângă baie.
                                   </p>
                              </section>

                              {/* Responsabilități și Comportament */}
                              <section>
                                   <div className="flex items-center space-x-3 mb-4">
                                        <Gavel className="h-6 w-6 text-traian-burgundy" />
                                        <h2 className="font-serif text-2xl font-bold text-traian-charcoal">
                                             Responsabilități și Comportament
                                        </h2>
                                   </div>
                                   <div className="text-gray-700 space-y-3">
                                        <p>
                                             Clientul este răspunzător față de
                                             hotel pentru daunele provocate dacă
                                             greșeala sau intenția îi poate fi
                                             imputată.
                                        </p>
                                        <p>
                                             Hotelul poate refuza cazarea sau
                                             evacua clienții în stare de
                                             ebrietate, nepoliticoși, turbulenți
                                             sau care încalcă normele de
                                             conviețuire socială și morale.
                                        </p>
                                        <p className="font-medium">
                                             Orice încălcare a uzanțelor
                                             hoteliere dă dreptul hotelierului
                                             să întrerupă imediat
                                             contractul/cazarea, fără nici un
                                             preaviz.
                                        </p>
                                   </div>
                              </section>

                              {/* Cod Vestimentar */}
                              <section>
                                   <div className="flex items-center space-x-3 mb-4">
                                        <Shirt className="h-6 w-6 text-traian-burgundy" />
                                        <h2 className="font-serif text-2xl font-bold text-traian-charcoal">
                                             Cod Vestimentar
                                        </h2>
                                   </div>
                                   <p className="text-gray-700">
                                        Nu vor fi acceptate persoanele îmbrăcate
                                        în halat, costum de baie,{" "}
                                        <strong>SALOPETE</strong> sau{" "}
                                        <strong>BOCANCI DE PROTECTIE</strong>.
                                        Aceste prevederi sunt pentru respectul
                                        față de clienții hotelului și menținerea
                                        curățeniei.
                                   </p>
                              </section>

                              {/* Fidelizare și Confidențialitate */}
                              <section>
                                   <div className="flex items-center space-x-3 mb-4">
                                        <Lock className="h-6 w-6 text-traian-burgundy" />
                                        <h2 className="font-serif text-2xl font-bold text-traian-charcoal">
                                             Diverse
                                        </h2>
                                   </div>
                                   <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2">
                                        <li>
                                             <strong>Fidelizare:</strong> Ne
                                             rezervăm dreptul de a acorda
                                             bonusuri și discounturi în scopul
                                             fidelizării clienților noștri.
                                        </li>
                                        <li>
                                             <strong>Confidențialitate:</strong>{" "}
                                             Nu vom folosi niciodată datele cu
                                             caracter personal fără să avem în
                                             prealabil acordul dumneavoastră.
                                        </li>
                                   </ul>
                              </section>

                              {/* Clauze Finale */}
                              <section className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                                   <div className="flex items-center space-x-3 mb-4">
                                        <Info className="h-6 w-6 text-traian-burgundy" />
                                        <h2 className="font-serif text-2xl font-bold text-traian-charcoal">
                                             Clauze Finale
                                        </h2>
                                   </div>
                                   <p className="text-gray-700 mb-4">
                                        Considerăm că orice client, în momentul
                                        accesării oricărui serviciu oferit de
                                        hotel, a luat cunoștință de termenii și
                                        condițiile menționate mai sus și le-a
                                        acceptat tacit. Politica hotelului poate
                                        fi oricând modificată fără notificare.
                                   </p>
                                   <p className="text-lg font-serif text-traian-burgundy text-center mt-8">
                                        Vă mulțumim pentru înțelegere și vă
                                        dorim ședere plăcută la HOTEL TRAIAN!
                                   </p>
                                   <p className="text-center text-gray-500 text-sm mt-2">
                                        Conducerea
                                   </p>
                              </section>
                         </motion.div>
                    </div>
               </section>
          </div>
     );
}

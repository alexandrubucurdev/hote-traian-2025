"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, Calendar, MapPin } from "lucide-react";

const fadeIn = (delay = 0) => ({
     hidden: { opacity: 0, y: 20 },
     visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut", delay },
     },
});

export default function ActionariPage() {
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
                         <motion.div
                              className="text-center"
                              initial="hidden"
                              animate="visible"
                              variants={fadeIn()}
                         >
                              <h1 className="font-serif text-4xl lg:text-6xl font-bold mb-6">
                                   Informații Acționari
                              </h1>
                              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                                   Comunicări oficiale și documente pentru
                                   acționarii SC Activa Constructii SA.
                              </p>
                         </motion.div>
                    </div>
               </section>

               {/* --- Secțiunea Document Oficial --- */}
               <section className="py-16 md:py-20">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                         <motion.div
                              className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border-t-4 border-traian-burgundy"
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true, amount: 0.1 }}
                              variants={fadeIn(0.2)}
                         >
                              <div className="flex items-center justify-center mb-8">
                                   <FileText className="h-12 w-12 text-traian-gold" />
                              </div>

                              <h2 className="font-serif text-3xl font-bold text-traian-charcoal mb-8 text-center border-b border-gray-200 pb-4">
                                   CONVOCARE
                              </h2>

                              <div className="space-y-6 text-gray-700 leading-relaxed text-lg text-justify">
                                   <p>
                                        <strong>
                                             Consiliul de administraţie al S.C.
                                             ACTIVA CONSTRUCTII S.A.
                                        </strong>
                                        , înregistrată la Oficiul Registrului
                                        Comerţului Braşov cu nr.{" "}
                                        <strong>J08/175/1992</strong>, convoacă{" "}
                                        <strong>
                                             Adunarea Generală Ordinară a
                                             Acţionarilor
                                        </strong>{" "}
                                        în data de{" "}
                                        <span className="font-semibold text-traian-burgundy">
                                             23 mai 2025, ora 9
                                        </span>
                                        , la recepţia hotelului Decebal din
                                        Braşov, str. Lunii nr. 3, cu următoarea
                                        ordine de zi:
                                   </p>

                                   <ol className="list-decimal list-inside space-y-3 pl-4">
                                        <li>
                                             Aprobarea situaţiilor financiare
                                             anuale ale societăţii, respectiv
                                             bilanţul contabil, contului de
                                             profit şi pierdere, notelor
                                             explicative şi a modului de
                                             repartizare a profitului pe anul
                                             2024;
                                        </li>
                                        <li>
                                             Aprobarea raportului
                                             administratorilor, raportului
                                             cenzorilor şi descărcarea de
                                             gestiune pentru anul 2024;
                                        </li>
                                        <li>
                                             Aprobarea bugetului de venituri şi
                                             cheltuieli şi a planului de
                                             investiţii pe anul 2025;
                                        </li>
                                        <li>
                                             Mandatarea dlui.{" "}
                                             <strong>Popa Lucian</strong> pentru
                                             efectuarea formalităţilor de
                                             înregistrare si publicitate si
                                             semnarea actelor necesare.
                                        </li>
                                   </ol>

                                   <p className="italic text-gray-600 bg-gray-50 p-4 rounded-lg border-l-4 border-traian-gold">
                                        Documentele supuse dezbaterii şi
                                        aprobării adunării generale se află la
                                        sediul societăţii.
                                   </p>

                                   <p>
                                        În cazul în care la prima convocare nu
                                        se îndeplinesc condiţiile legale pentru
                                        ţinerea adunării, aceasta se convoacă
                                        pentru ziua de{" "}
                                        <strong>30.05.2025</strong>, în acelaşi
                                        loc, la aceeaşi oră şi cu aceeaşi ordine
                                        de zi.
                                   </p>
                              </div>

                              <div className="mt-12 pt-8 border-t border-gray-200 text-center">
                                   <p className="font-serif font-bold text-xl text-traian-charcoal">
                                        Preşedintele consiliului de
                                        administraţie
                                   </p>
                                   <p className="text-traian-burgundy font-medium mt-2 text-lg">
                                        Popa Lucian
                                   </p>
                              </div>
                         </motion.div>

                         {/* --- Detalii Rapide --- */}
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                              <motion.div
                                   className="bg-white p-6 rounded-xl shadow-md flex items-center"
                                   initial="hidden"
                                   whileInView="visible"
                                   viewport={{ once: true, amount: 0.1 }}
                                   variants={fadeIn(0.3)}
                              >
                                   <div className="bg-traian-burgundy/10 p-3 rounded-full mr-4">
                                        <Calendar className="h-6 w-6 text-traian-burgundy" />
                                   </div>
                                   <div>
                                        <h4 className="font-bold text-traian-charcoal">
                                             Data și Ora
                                        </h4>
                                        <p className="text-gray-600">
                                             23 Mai 2025, Ora 09:00
                                        </p>
                                   </div>
                              </motion.div>

                              <motion.div
                                   className="bg-white p-6 rounded-xl shadow-md flex items-center"
                                   initial="hidden"
                                   whileInView="visible"
                                   viewport={{ once: true, amount: 0.1 }}
                                   variants={fadeIn(0.4)}
                              >
                                   <div className="bg-traian-burgundy/10 p-3 rounded-full mr-4">
                                        <MapPin className="h-6 w-6 text-traian-burgundy" />
                                   </div>
                                   <div>
                                        <h4 className="font-bold text-traian-charcoal">
                                             Locație
                                        </h4>
                                        <p className="text-gray-600">
                                             Recepția Hotel Decebal, Str. Lunii
                                             nr. 3
                                        </p>
                                   </div>
                              </motion.div>
                         </div>
                    </div>
               </section>
          </div>
     );
}

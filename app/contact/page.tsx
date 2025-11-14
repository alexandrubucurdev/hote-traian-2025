"use client"; // Necesar pentru animații și formular

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Building, FileCheck } from "lucide-react";
import Button from "@/components/ui/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// --- Schema de validare pentru formular ---
const contactSchema = z.object({
     name: z.string().min(3, "Numele este obligatoriu"),
     email: z.string().email("Adresă de e-mail invalidă"),
     phone: z.string().optional(),
     message: z.string().min(10, "Mesajul trebuie să aibă minim 10 caractere"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

// --- Componentă FormInput (Neschimbată) ---
const FormInput = ({ id, label, register, error, type = "text" }: any) => (
     <div className="relative">
          <input
               id={id}
               type={type}
               {...register(id)}
               placeholder=" "
               className={`block w-full px-4 py-3 bg-transparent border-0 border-b-2 
            appearance-none text-traian-charcoal 
            border-gray-300 focus:outline-none 
            focus:ring-0 focus:border-traian-burgundy peer`}
          />
          <label
               htmlFor={id}
               className={`absolute text-sm text-gray-500 duration-300 
            transform -translate-y-6 scale-75 top-3 
            left-4 px-1 bg-white
            origin-[0] 
            
            peer-placeholder-shown:scale-100
            peer-placeholder-shown:translate-y-0
            peer-placeholder-shown:left-0
            peer-placeholder-shown:px-4
            peer-placeholder-shown:bg-transparent
            
            peer-focus:scale-75
            peer-focus:-translate-y-6
            peer-focus:left-4
            peer-focus:px-1
            peer-focus:bg-white
            peer-focus:text-traian-burgundy
            
            pointer-events-none 
            
            peer-autofill:scale-75
            peer-autofill:-translate-y-6
            peer-autofill:left-4
            peer-autofill:px-1
            peer-autofill:bg-white
            peer-autofill:text-traian-burgundy
            `}
          >
               {label}
          </label>
          {error && (
               <p className="text-xs text-red-600 mt-1">{error.message}</p>
          )}
     </div>
);

// --- Componentă FormTextarea (Neschimbată) ---
const FormTextarea = ({ id, label, register, error }: any) => (
     <div className="relative">
          <textarea
               id={id}
               {...register(id)}
               rows={4}
               placeholder=" "
               className={`block w-full px-4 py-3 bg-transparent border-0 border-b-2 
            appearance-none text-traian-charcoal 
            border-gray-300 focus:outline-none 
            focus:ring-0 focus:border-traian-burgundy peer resize-none`}
          />
          <label
               htmlFor={id}
               className={`absolute text-sm text-gray-500 duration-300 
            transform -translate-y-6 scale-75 top-3 
            left-4 px-1 bg-white
            origin-[0] 
            
            peer-placeholder-shown:scale-100
            peer-placeholder-shown:translate-y-0
            peer-placeholder-shown:left-0
            peer-placeholder-shown:px-4
            peer-placeholder-shown:bg-transparent
            
            peer-focus:scale-75
            peer-focus:-translate-y-6
            peer-focus:left-4
            peer-focus:px-1
            peer-focus:bg-white
            peer-focus:text-traian-burgundy
            
            pointer-events-none 
            
            peer-autofill:scale-75
            peer-autofill:-translate-y-6
            peer-autofill:left-4
            peer-autofill:px-1
            peer-autofill:bg-white
            peer-autofill:text-traian-burgundy
            `}
          >
               {label}
          </label>
          {error && (
               <p className="text-xs text-red-600 mt-1">{error.message}</p>
          )}
     </div>
);

// --- Variantele de animație pentru apariție (Neschimbate) ---
const fadeIn = (delay = 0) => ({
     hidden: { opacity: 0, y: 20 },
     visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut", delay },
     },
});

export default function ContactPage() {
     // Configurare formular (Neschimbată)
     const {
          register,
          handleSubmit,
          formState: { errors, isSubmitting },
     } = useForm<ContactFormValues>({
          resolver: zodResolver(contactSchema),
     });

     const onSubmit = (data: ContactFormValues) => {
          // Simulare trimitere formular (Neschimbat)
          return new Promise((resolve) => {
               setTimeout(() => {
                    console.log(data);
                    alert("Mesajul a fost trimis! (simulare)");
                    resolve(true);
               }, 1000);
          });
     };

     return (
          <div className="min-h-screen bg-traian-cream">
               {/* --- Secțiunea Hero (Neschimbată) --- */}
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
                                   Contactează-ne
                              </h1>
                              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                                   Suntem aici pentru tine. Completează
                                   formularul sau folosește detaliile de mai jos
                                   pentru a ne trimite un mesaj.
                              </p>
                         </motion.div>
                    </div>
               </section>

               {/* --- Secțiune de Conținut (Info + Formular) --- */}
               <section className="py-12 md:py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                         {/* Grila pentru Formular și Info */}
                         <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                              {/* --- MODIFICAT: Coloana din Stânga (Info) --- */}
                              <motion.div
                                   className="lg:col-span-2 space-y-12"
                                   initial="hidden"
                                   whileInView="visible"
                                   viewport={{ once: true, amount: 0.1 }}
                                   variants={fadeIn(0.2)} // Animația apare prima
                              >
                                   {/* Titlu Info */}
                                   <div>
                                        <h2 className="font-serif text-3xl font-bold text-traian-charcoal mb-4">
                                             Date de Contact
                                        </h2>
                                        <p className="text-lg text-gray-600 leading-relaxed">
                                             Așteptăm cu nerăbdare să te auzim.
                                             Sună-ne, trimite-ne un e-mail sau
                                             vizitează-ne direct.
                                        </p>
                                   </div>

                                   {/* Informații Contact Interactive */}
                                   <div className="space-y-6">
                                        <a
                                             href="tel:+40268333065"
                                             className="flex items-center group p-4 rounded-lg hover:bg-white hover:shadow-md transition-all"
                                        >
                                             <Phone className="h-6 w-6 text-traian-burgundy mr-4 transition-all duration-300 group-hover:text-traian-gold group-hover:scale-110" />
                                             <div>
                                                  <h4 className="font-semibold text-lg text-traian-charcoal">
                                                       Telefon
                                                  </h4>
                                                  <p className="text-gray-600 group-hover:text-traian-burgundy transition-colors">
                                                       +40 268 333 065
                                                  </p>
                                             </div>
                                        </a>
                                        <a
                                             href="mailto:rezervari@hotel-traian-brasov.ro"
                                             className="flex items-center group p-4 rounded-lg hover:bg-white hover:shadow-md transition-all"
                                        >
                                             <Mail className="h-6 w-6 text-traian-burgundy mr-4 transition-all duration-300 group-hover:text-traian-gold group-hover:scale-110" />
                                             <div>
                                                  <h4 className="font-semibold text-lg text-traian-charcoal">
                                                       E-mail
                                                  </h4>
                                                  <p className="text-gray-600 group-hover:text-traian-burgundy transition-colors">
                                                       rezervari@hotel-traian-brasov.ro
                                                  </p>
                                             </div>
                                        </a>
                                        <a
                                             href="https://maps.google.com/?q=Hotel+Traian+Brașov"
                                             target="_blank"
                                             rel="noopener noreferrer"
                                             className="flex items-start group p-4 rounded-lg hover:bg-white hover:shadow-md transition-all"
                                        >
                                             <MapPin className="h-6 w-6 text-traian-burgundy mr-4 flex-shrink-0 mt-1 transition-all duration-300 group-hover:text-traian-gold group-hover:scale-110" />
                                             <div>
                                                  <h4 className="font-semibold text-lg text-traian-charcoal">
                                                       Adresă
                                                  </h4>
                                                  <p className="text-gray-600 group-hover:text-traian-burgundy transition-colors">
                                                       Str. Lunii nr. 7, Brașov,
                                                       500327
                                                  </p>
                                             </div>
                                        </a>
                                   </div>

                                   {/* Informații Legale */}
                                   <div>
                                        <h3 className="font-serif text-2xl font-bold text-traian-charcoal mb-4">
                                             Date Legale
                                        </h3>
                                        <div className="space-y-4 text-sm">
                                             <div className="flex items-start group">
                                                  <Building className="h-5 w-5 text-traian-burgundy mr-4 flex-shrink-0 mt-1" />
                                                  <div>
                                                       <h4 className="font-semibold text-traian-charcoal">
                                                            Firma
                                                       </h4>
                                                       <p className="text-gray-600">
                                                            SC Activa
                                                            Constructii SA
                                                       </p>
                                                       <p className="text-gray-500">
                                                            RO1107030,
                                                            J08/175/1992
                                                       </p>
                                                  </div>
                                             </div>
                                             <div className="flex items-start group">
                                                  <FileCheck className="h-5 w-5 text-traian-burgundy mr-4 flex-shrink-0 mt-1" />
                                                  <div>
                                                       <h4 className="font-semibold text-traian-charcoal">
                                                            Certificat de
                                                            Clasificare
                                                       </h4>
                                                       <p className="text-gray-600">
                                                            11363/7783 din
                                                            15.06.2011
                                                       </p>
                                                       <p className="text-gray-500">
                                                            Hotel Traian (o
                                                            stea)
                                                       </p>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </motion.div>

                              {/* --- MODIFICAT: Coloana din Dreapta (Formular) --- */}
                              <motion.div
                                   className="lg:col-span-3 bg-white p-8 lg:p-12 rounded-2xl shadow-xl"
                                   initial="hidden"
                                   whileInView="visible"
                                   viewport={{ once: true, amount: 0.1 }}
                                   variants={fadeIn(0.4)} // Animația apare a doua
                              >
                                   <form
                                        onSubmit={handleSubmit(onSubmit)}
                                        className="space-y-8"
                                   >
                                        <div>
                                             <h2 className="font-serif text-3xl font-bold text-traian-charcoal mb-6">
                                                  Trimite-ne un Mesaj
                                             </h2>

                                             <div className="space-y-8">
                                                  <FormInput
                                                       id="name"
                                                       label="Nume și Prenume"
                                                       register={register}
                                                       error={errors.name}
                                                  />
                                                  <FormInput
                                                       id="email"
                                                       label="Adresă de E-mail"
                                                       type="email"
                                                       register={register}
                                                       error={errors.email}
                                                  />
                                                  <FormInput
                                                       id="phone"
                                                       label="Număr de Telefon (Opțional)"
                                                       type="tel"
                                                       register={register}
                                                       error={errors.phone}
                                                  />
                                                  <FormTextarea
                                                       id="message"
                                                       label="Mesajul tău..."
                                                       register={register}
                                                       error={errors.message}
                                                  />
                                             </div>
                                        </div>

                                        <div className="pt-6">
                                             <Button
                                                  type="submit"
                                                  variant="primary"
                                                  size="lg"
                                                  className="w-full"
                                                  disabled={isSubmitting}
                                             >
                                                  {isSubmitting ? (
                                                       "Se trimite..."
                                                  ) : (
                                                       <>
                                                            Trimite Mesajul{" "}
                                                            <Send className="w-4 h-4 ml-2" />
                                                       </>
                                                  )}
                                             </Button>
                                        </div>
                                   </form>
                              </motion.div>
                         </div>

                         {/* --- Secțiunea Hărții (Neschimbată) --- */}
                         <motion.div
                              className="mt-16 lg:mt-24"
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true, amount: 0.1 }}
                              variants={fadeIn(0.3)}
                         >
                              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-traian-charcoal mb-8 text-center">
                                   Unde Ne Găsiți
                              </h2>
                              <div className="relative h-96 lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-xl group">
                                   <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none"></div>
                                   <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d777.8954169979602!2d25.624777618175525!3d45.645756927321585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b35c6300d3f317%3A0x300c5d59f271cfb8!2sTraian!5e1!3m2!1sro!2sro!4v1763121946229!5m2!1sro!2sro"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="rounded-2xl transition-transform duration-500 group-hover:scale-110"
                                   />
                              </div>
                         </motion.div>
                    </div>
               </section>
          </div>
     );
}

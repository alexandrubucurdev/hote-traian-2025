import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
     subsets: ["latin"],
     variable: "--font-inter",
});

const playfair = Playfair_Display({
     subsets: ["latin"],
     variable: "--font-playfair",
});

export const metadata: Metadata = {
     title: "Hotel Traian Brașov | Cazare în Orașul Coroanei",
     description:
          "Hotel Traian oferă cazare confortabilă în Brașov, la doar 10 minute de Centrul Vechi. Camere dotate modern, WiFi gratuit, parcare inclusă.",
     icons: {
          icon: "/logo/logo.svg",
     },
     keywords:
          "hotel braşov, cazare braşov, hotel centru vechi, hotel traian, pensiune braşov, cazare muncitori, cazare brasov, hotel brasov, cazare ieftina brasov",
     authors: [{ name: "Hotel Traian Brașov" }],
     creator: "Hotel Traian Brașov",
     publisher: "Hotel Traian Brașov",
     formatDetection: {
          email: false,
          address: false,
          telephone: false,
     },
     openGraph: {
          title: "Hotel Traian Brașov | Cazare în Orașul Coroanei",
          description:
               "Hotel Traian oferă cazare confortabilă în Brașov, la doar 10 minute de Centrul Vechi.",
          url: "https://www.hotelultraian.ro/",
          siteName: "Hotel Traian Brașov",
          images: [
               {
                    url: "/images/hotel-traian-og-image.jpg",
                    width: 1200,
                    height: 630,
                    alt: "Hotel Traian Brașov - Cazare de Calitate",
               },
          ],
          locale: "ro_RO",
          type: "website",
     },
};

export default function RootLayout({
     children,
}: {
     children: React.ReactNode;
}) {
     return (
          <html lang="ro" className={`${inter.variable} ${playfair.variable}`}>
               <body className={inter.className}>
                    <div className="min-h-screen flex flex-col">
                         <Header />
                         <main className="flex-1">{children}</main>
                         <Footer />
                    </div>
               </body>
          </html>
     );
}

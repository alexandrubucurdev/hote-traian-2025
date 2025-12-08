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

const DOMAIN_URL = "https://www.hotelultraian.ro";

export const metadata: Metadata = {
     metadataBase: new URL(DOMAIN_URL),

     title: {
          default: "Hotel Traian Brașov | Cazare în Orașul Coroanei",
          template: "%s | Hotel Traian Brașov",
     },
     description:
          "Hotel Traian oferă cazare confortabilă în Brașov, la doar 10 minute de Centrul Vechi. Camere dotate modern, WiFi gratuit, parcare inclusă.",
     icons: {
          icon: "/logo/logo.svg",
          apple: "/logo-og.jpg",
     },

     keywords: [
          "hotel braşov",
          "cazare braşov",
          "hotel centru vechi",
          "hotel traian",
          "pensiune braşov",
          "cazare muncitori",
          "cazare ieftina brasov",
     ],

     authors: [{ name: "Hotel Traian Brașov", url: DOMAIN_URL }],
     creator: "Hotel Traian Brașov",

     openGraph: {
          title: "Hotel Traian Brașov | Cazare în Orașul Coroanei",
          description:
               "Hotel Traian oferă cazare confortabilă în Brașov, la doar 10 minute de Centrul Vechi.",
          url: DOMAIN_URL,
          siteName: "Hotel Traian Brașov",
          images: [
               {
                    url: "/logo-og.jpg",
                    width: 1200,
                    height: 630,
                    alt: "Hotel Traian Brașov",
               },
          ],
          locale: "ro_RO",
          type: "website",
     },

     twitter: {
          card: "summary_large_image",
          title: "Hotel Traian Brașov",
          description: "Cazare confortabilă în Brașov.",
          images: ["/logo-og.jpg"],
     },

     robots: {
          index: true,
          follow: true,
          googleBot: {
               index: true,
               follow: true,
               "max-video-preview": -1,
               "max-image-preview": "large",
               "max-snippet": -1,
          },
     },

     verification: {
          google: "jlOPy-UN0ti_gEu5nbgI7r3WkT1X9vrwKPLWKINiiJk",
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

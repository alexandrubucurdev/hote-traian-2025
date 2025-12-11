import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import type { Viewport } from "next";
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

export const viewport: Viewport = {
     themeColor: "#722F37", // Setează culoarea browserului pe mobil (Chrome/Safari) la Burgundy
     width: "device-width",
     initialScale: 1,
};

const DOMAIN_URL = "https://www.hotelultraian.ro";

export const metadata: Metadata = {
     metadataBase: new URL(DOMAIN_URL),

     title: {
          default: "Hotel Traian Brașov | Cazare în Orașul Coroanei",
          template: "%s | Hotel Traian Brașov",
     },
     description:
          "Hotel Traian oferă cazare confortabilă în Brașov, la doar 10 minute de Centrul Vechi. Camere standard, WiFi gratuit, parcare inclusă.",
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
};

const jsonLd = {
     "@context": "https://schema.org",
     "@type": "Hotel",
     name: "Hotel Traian Brașov",
     image: [
          "https://www.hotelultraian.ro/images/cladire1.webp",
          "https://www.hotelultraian.ro/images/receptie1.webp",
     ],
     description:
          "Hotel Traian oferă cazare confortabilă în Brașov, la doar 10 minute de Centrul Vechi. Camere standard, WiFi gratuit, parcare inclusă.",
     address: {
          "@type": "PostalAddress",
          streetAddress: "Str. Lunii nr. 7",
          addressLocality: "Brașov",
          postalCode: "500327",
          addressCountry: "RO",
     },
     geo: {
          "@type": "GeoCoordinates",
          latitude: 45.645792,
          longitude: 25.625348,
     },
     telephone: "+40746332414",
     email: "hoteltraianbrasov@gmail.com",
     url: "https://www.hotelultraian.ro",
     starRating: {
          "@type": "Rating",
          ratingValue: "1",
     },
     priceRange: "140 RON - 180 RON",
     checkinTime: "12:00",
     checkoutTime: "12:00",
     amenityFeature: [
          {
               "@type": "LocationFeatureSpecification",
               name: "WiFi Gratuit",
               value: true,
          },
          {
               "@type": "LocationFeatureSpecification",
               name: "Parcare Gratuită",
               value: true,
          },
          {
               "@type": "LocationFeatureSpecification",
               name: "Recepție 24/7",
               value: true,
          },
     ],
};

export default function RootLayout({
     children,
}: {
     children: React.ReactNode;
}) {
     return (
          <html lang="ro" className={`${inter.variable} ${playfair.variable}`}>
               <body className={inter.className}>
                    <script
                         type="application/ld+json"
                         dangerouslySetInnerHTML={{
                              __html: JSON.stringify(jsonLd),
                         }}
                    />

                    <div className="min-h-screen flex flex-col">
                         <Header />
                         <main className="flex-1">{children}</main>
                         <Footer />
                    </div>
               </body>
          </html>
     );
}

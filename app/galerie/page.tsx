import { Metadata } from "next";
import GalleryContent from "@/components/pages/GalleryContent";

export const metadata: Metadata = {
     title: "Galerie Foto | Hotel Traian Brașov",
     description:
          "Vezi imagini cu camerele noastre, zona de recepție și facilitățile oferite. Curățenie și confort la prețuri accesibile.",
};

export default function GaleriePage() {
     return <GalleryContent />;
}

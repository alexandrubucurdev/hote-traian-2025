import { Metadata } from "next";
import LocationContent from "@/components/pages/LocationContent";

export const metadata: Metadata = {
     title: "Locație și Atracții | Hotel Traian Brașov",
     description:
          "Hotel Traian este situat la 10 minute de Centrul Vechi Brașov. Acces rapid către Poiana Brașov, Castelul Bran și alte atracții turistice.",
};

export default function LocatiePage() {
     return <LocationContent />;
}

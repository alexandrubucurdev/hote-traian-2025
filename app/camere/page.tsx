import { Metadata } from "next";
import RoomsContent from "@/components/pages/RoomsContent";

export const metadata: Metadata = {
     title: "Camere și Tarife | Hotel Traian Brașov",
     description:
          "Vezi oferta de cazare Hotel Traian. Camere de două, trei sau chiar patru persoane la prețuri accesibile. Facilități: Baie privată, TV, Frigider, Parcare inclusă.",
};

export default function CamerePage() {
     return <RoomsContent />;
}

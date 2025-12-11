import { Metadata } from "next";
import ShareholdersContent from "@/components/pages/ShareholdersContent";

export const metadata: Metadata = {
     title: "Informații Acționari | SC Activa Constructii SA",
     description:
          "Comunicări oficiale, convocatoare AGA și informații pentru acționarii SC Activa Constructii SA - Hotel Traian.",
     robots: {
          index: false,
          follow: true,
     },
};

export default function ActionariPage() {
     return <ShareholdersContent />;
}

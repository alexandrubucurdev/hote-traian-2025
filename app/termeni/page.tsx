import { Metadata } from "next";
import TermsContent from "@/components/pages/TermsContent";

export const metadata: Metadata = {
     title: "Termeni și Condiții | Hotel Traian Brașov",
     description:
          "Citește regulamentul de ordine interioară, politica de anulare și informații despre cazare la Hotel Traian.",
};

export default function TermeniPage() {
     return <TermsContent />;
}

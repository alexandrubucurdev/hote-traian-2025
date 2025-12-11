import { Metadata } from "next";
import AboutContent from "@/components/pages/AboutContent";

export const metadata: Metadata = {
     title: "Despre Noi | Hotel Traian Brașov",
     description:
          "Cazare accesibilă și confortabilă în Brașov, ideală pentru șederi scurte și buget redus.",
};

export default function DesprePage() {
     return <AboutContent />;
}

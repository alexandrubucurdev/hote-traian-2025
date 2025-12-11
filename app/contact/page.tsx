import { Metadata } from "next";
import ContactContent from "@/components/pages/ContactContent";

export const metadata: Metadata = {
     title: "Contact | Hotel Traian Brașov",
     description:
          "Contactează recepția Hotel Traian Brașov. Telefon: +40 746 332 414. Adresă: Str. Lunii nr. 7. Rezervări telefonice non-stop.",
};

export default function ContactPage() {
     return <ContactContent />;
}

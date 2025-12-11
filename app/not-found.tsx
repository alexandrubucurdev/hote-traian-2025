import Link from "next/link";
import Button from "@/components/ui/Button"; // Folosește butonul tău existent

export default function NotFound() {
     return (
          <div className="min-h-screen flex flex-col items-center justify-center bg-traian-cream text-center px-4">
               <h1 className="font-serif text-6xl md:text-8xl font-bold text-traian-burgundy mb-4">
                    404
               </h1>
               <h2 className="text-2xl md:text-3xl font-serif text-traian-charcoal mb-6">
                    Pagina nu a fost găsită
               </h2>
               <p className="text-gray-600 max-w-md mb-8">
                    Ne pare rău, dar pagina pe care o căutați nu există sau a
                    fost mutată.
               </p>
               <Button href="/" variant="primary">
                    Înapoi la Recepție (Acasă)
               </Button>
          </div>
     );
}

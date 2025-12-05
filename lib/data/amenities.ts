import {
     Wifi,
     Car,
     Clock,
     Coffee,
     MapPin,
     Shield,
     Utensils,
     Phone,
     Wind,
     Tv,
     Lock,
     Bath,
     Dumbbell,
     Armchair,
     Luggage,
     Refrigerator,
     Shirt,
} from "lucide-react";

export interface Amenity {
     id: string;
     name: string;
     description: string;
     icon: any;
     category: "general" | "room" | "service";
}

export const hotelAmenities: Amenity[] = [
     {
          id: "wifi",
          name: "WiFi Gratuit",
          description: "Internet wireless gratuit în toate zonele hotelului",
          icon: Wifi,
          category: "general",
     },
     {
          id: "parking",
          name: "Parcare Gratuită",
          description:
               "Parcare privată gratuită pentru oaspeții hotelului. Nu este necesară rezervare.",
          icon: Car,
          category: "general",
     },
     {
          id: "reception",
          name: "Recepție 24/7",
          description: "Servicii de recepție disponibile non-stop",
          icon: Clock,
          category: "service",
     },
     {
          id: "location",
          name: "Locație Accesibilă",
          description: "La 10 minute de Centrul Vechi",
          icon: MapPin,
          category: "general",
     },
     {
          id: "security",
          name: "Securitate",
          description: "Hotelul este securizat cu sistem de supraveghere",
          icon: Shield,
          category: "general",
     },
     {
          id: "sala-sport",
          name: "Activități sportive cu partenerii noștri",
          description:
               "Str. Lunii nr. 6: YouRadventure (fitness, Real Ryder) și Yor fit Team (wellness). Acces sală sport în limita disponibilității.",
          icon: Dumbbell,
          category: "service",
     },
     {
          id: "statie-taxi",
          name: "Comenzi Taxi",
          description: "Stație de taxi la doar 50 de metri de hotel",
          icon: Car,
          category: "general",
     },
     {
          id: "zona-asteptare",
          name: "Zonă de Așteptare",
          description: "Zonă confortabilă de așteptare pentru oaspeți",
          icon: Armchair,
          category: "general",
     },
     {
          id: "depozit-bagaje",
          name: "Depozit Bagaje",
          description: "Serviciu de depozitare a bagajelor pentru oaspeți",
          icon: Luggage,
          category: "service",
     },
     {
          id: "aparat-cafea",
          name: "Aparat de Cafea",
          description: "Aparat de cafea disponibil în zona de recepție",
          icon: Coffee,
          category: "general",
     },
];

export const roomAmenities: Amenity[] = [
     {
          id: "tv",
          name: "TV LED",
          description: "Televizor LED cu canale internaționale",
          icon: Tv,
          category: "room",
     },
     {
          id: "bathroom",
          name: "Baie Privată",
          description: "Baie privată cu duș și articole de toaletă",
          icon: Bath,
          category: "room",
     },
     {
          id: "fridge",
          name: "Frigider",
          description: "Frigider pentru răcirea băuturilor și alimentelor",
          icon: Refrigerator,
          category: "room",
     },
     {
          id: "wardrobe",
          name: "Dulap Haine",
          description: "Dulap spațios pentru depozitarea hainelor",
          icon: Shirt,
          category: "room",
     },
];

export const getAllAmenities = (): Amenity[] => {
     return [...hotelAmenities, ...roomAmenities];
};

export const getAmenitiesByCategory = (category: string): Amenity[] => {
     return getAllAmenities().filter(
          (amenity) => amenity.category === category
     );
};

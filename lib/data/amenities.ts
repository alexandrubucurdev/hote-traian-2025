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
          description: "Parcare privată gratuită pentru oaspeții hotelului",
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
          id: "restaurant",
          name: "Restaurant",
          description: "Restaurant cu bucătărie românească și internațională",
          icon: Utensils,
          category: "service",
     },
     {
          id: "location",
          name: "Localizare Centrală",
          description: "La 5 minute de mers pe jos de Centrul Vechi",
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
          id: "breakfast",
          name: "Mic Dejun",
          description: "Mic dejun continental disponibil la cerere",
          icon: Coffee,
          category: "service",
     },
     {
          id: "room-service",
          name: "Room Service",
          description: "Serviciu la cameră disponibil în anumite ore",
          icon: Phone,
          category: "service",
     },
];

export const roomAmenities: Amenity[] = [
     {
          id: "air-conditioning",
          name: "Aer Condiționat",
          description: "Climatizare în toate camerele",
          icon: Wind,
          category: "room",
     },
     {
          id: "tv",
          name: "TV LED",
          description: "Televizor LED cu canale internaționale",
          icon: Tv,
          category: "room",
     },
     {
          id: "safe",
          name: "Seif",
          description: "Seif electronic pentru obiecte de valoare",
          icon: Lock,
          category: "room",
     },
     {
          id: "bathroom",
          name: "Baie Privată",
          description: "Baie privată cu duș și articole de toaletă",
          icon: Bath,
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

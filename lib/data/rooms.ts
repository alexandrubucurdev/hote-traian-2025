export interface Room {
     id: string;
     name: string;
     description: string;
     shortDescription: string;
     capacity: number;
     size: number;
     price: {
          low: number;
          high: number;
     };
     amenities: string[];
     images: string[];
     features: string[];
     bookingUrl?: string;
     isPopular?: boolean;
}

export const rooms: Room[] = [
     {
          id: "camera-dubla-standard",
          name: "Camera Dublă Standard",
          description:
               "Camera noastră Standard oferă confort și funcționalitate într-un spațiu elegant de 18 mp. Dotată cu toate facilitățile moderne necesare pentru un sejur plăcut în Brașov.",
          shortDescription:
               "Cameră confortabilă cu toate facilitățile esențiale",
          capacity: 2,
          size: 18,
          price: {
               low: 150,
               high: 220,
          },
          amenities: [
               "WiFi gratuit",
               'TV LED 32"',
               "Minibar",
               "Seif",
               "Baie privată",
               "Uscător de păr",
               "Aer condiționat",
          ],
          features: [
               "Pat matrimonial confortabil",
               "Mobilier modern",
               "Vedere la oraș",
               "Lenjerie de pat premium",
               "Prosoape incluse",
          ],
          images: [
               "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800",
               "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800",
               "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800",
          ],
          isPopular: true,
     },
     {
          id: "camera-dubla-superior",
          name: "Camera Dublă Superior",
          description:
               "Camera Superior de 22 mp oferă spațiu suplimentar și un nivel de confort ridicat. Ideală pentru cuplurile care doresc un sejur memorabil în Brașov.",
          shortDescription: "Cameră spațioasă cu vedere panoramică",
          capacity: 2,
          size: 22,
          price: {
               low: 180,
               high: 260,
          },
          amenities: [
               "WiFi gratuit",
               'TV LED 40"',
               "Minibar premium",
               "Seif digital",
               "Baie cu cadă",
               "Uscător de păr",
               "Aer condiționat",
               "Balcon",
          ],
          features: [
               "Pat King size",
               "Mobilier elegant",
               "Vedere la munți/oraș",
               "Zona de relaxare",
               "Balcon mobilat",
          ],
          images: [
               "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800",
               "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800",
               "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800",
          ],
          isPopular: false,
     },
     {
          id: "camera-tripla",
          name: "Camera Triplă",
          description:
               "Camera Triplă de 24 mp este perfectă pentru familii sau grupuri de prieteni. Oferă spațiu generos și toate facilitățile pentru un sejur confortabil.",
          shortDescription: "Ideală pentru familii și grupuri de prieteni",
          capacity: 3,
          size: 24,
          price: {
               low: 200,
               high: 290,
          },
          amenities: [
               "WiFi gratuit",
               'TV LED 40"',
               "Minibar",
               "Seif",
               "Baie privată",
               "Uscător de păr",
               "Aer condiționat",
               "Frigider",
          ],
          features: [
               "Pat matrimonial + pat simplu",
               "Mobilier funcțional",
               "Spațiu de depozitare generos",
               "Masă de lucru",
               "Fotolii confortabile",
          ],
          images: [
               "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800",
               "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=800",
               "https://images.unsplash.com/photo-1633505650701-6104d2254d7f?w=800",
          ],
          isPopular: true,
     },
     {
          id: "suite-executiva",
          name: "Suita Executivă",
          description:
               "Suita noastră Executivă de 35 mp reprezintă vârful luxului și confortului. Cu salon separat și dormitor spațios, este alegerea perfectă pentru oaspeții pretențioși.",
          shortDescription:
               "Luxul suprem cu salon separat și facilități premium",
          capacity: 2,
          size: 35,
          price: {
               low: 300,
               high: 420,
          },
          amenities: [
               "WiFi gratuit",
               'TV LED 55"',
               "Minibar premium",
               "Seif digital",
               "Baie cu jacuzzi",
               "Uscător de păr",
               "Aer condiționat",
               "Balcon mare",
               "Servicii concierge",
          ],
          features: [
               "Pat King size premium",
               "Salon separat",
               "Vedere panoramică",
               "Mobilier de lux",
               "Balcon mobilat premium",
               "Zonă de dining",
          ],
          images: [
               "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800",
               "https://images.unsplash.com/photo-1576354302919-96748cb8299e?w=800",
               "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
          ],
          isPopular: false,
     },
];

export const getRoomById = (id: string): Room | undefined => {
     return rooms.find((room) => room.id === id);
};

export const getPopularRooms = (): Room[] => {
     return rooms.filter((room) => room.isPopular);
};

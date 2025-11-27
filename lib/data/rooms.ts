export interface Room {
     id: string;
     name: string;
     description: string;
     shortDescription: string;
     capacity: number;
     size: number;
     price: number;
     amenities: string[];
     images: string[];
     features: string[];
     bookingUrl?: string;
     isPopular?: boolean;
}

export const rooms: Room[] = [
     {
          id: "camera-matrimoniala",
          name: "Camera Matrimonială",
          description:
               "Camera noastră Matrimonială oferă confort și funcționalitate într-un spațiu elegant de 21 mp. Dotată cu toate facilitățile moderne necesare pentru un sejur plăcut în Brașov.",
          shortDescription:
               "Cameră confortabilă cu toate facilitățile esențiale",
          capacity: 2,
          size: 21,
          price: 140,
          amenities: [
               "Pat matrimonial confortabil",
               "WiFi gratuit",
               "TV",
               "Televiziune prin cablu",
               "Frigider",
               "Baie privată",
               "Dulap haine",
          ],
          features: [
               "Pat matrimonial confortabil",
               "Mobilier modern",
               "Vedere la oraș",
               "Lenjerie de pat premium",
               "Prosoape incluse",
          ],
          images: ["/images/mat1.jpg", "/images/mat2.jpg", "/images/mat3.jpg"],
          isPopular: true,
     },
     {
          id: "camera-dubla-twin",
          name: "Camera Dublă Twin",
          description:
               "Camera noastră Dublă Twin de 21 mp oferă confort și funcționalitate într-un spațiu elegant. Dotată cu toate facilitățile moderne necesare pentru un sejur plăcut în Brașov.",
          shortDescription: "Confort și funcționalitate într-un spațiu elegant",
          capacity: 2,
          size: 21,
          price: 140,
          amenities: [
               "Două paturi single",
               "WiFi gratuit",
               "TV",
               "Televiziune prin cablu",
               "Frigider",
               "Baie privată",
               "Dulap haine",
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
               "/images/dub_tw1.jpg",
               "/images/dub_tw2.jpg",
               "/images/dub_tw3.jpg",
          ],
          isPopular: false,
     },
     {
          id: "camera-tripla",
          name: "Camera Triplă",
          description:
               "Camera Triplă de 21 mp este perfectă pentru familii sau grupuri de prieteni. Oferă spațiu generos și toate facilitățile pentru un sejur confortabil.",
          shortDescription: "Ideală pentru familii și grupuri de prieteni",
          capacity: 3,
          size: 21,
          price: 180,
          amenities: [
               "Trei paturi single",
               "WiFi gratuit",
               "TV",
               "Televiziune prin cablu",
               "Frigider",
               "Baie privată",
               "Dulap haine",
          ],
          features: [
               "Pat matrimonial + pat simplu",
               "Mobilier funcțional",
               "Spațiu de depozitare generos",
               "Masă de lucru",
               "Fotolii confortabile",
          ],
          images: [
               "/images/tripla1.jpg",
               "/images/tripla2.jpg",
               "/images/tripla3.jpg",
          ],
          isPopular: true,
     },

     {
          id: "camera-cvadrupla",
          name: "Camera Cvadruplă",
          description:
               "Camera noastră Cvadruplă de 21 mp oferă spațiu generos și confort pentru familii sau grupuri. Dotată cu toate facilitățile moderne pentru un sejur plăcut în Brașov.",
          shortDescription:
               "Spațiu generos și confort pentru familii și grupuri",
          capacity: 4,
          size: 21,
          price: 150,
          amenities: [
               "Patru paturi single",
               "WiFi gratuit",
               "TV",
               "Televiziune prin cablu",
               "Frigider",
               "Baie la comun",
               "Dulap haine",
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
               "/images/patru1.jpg",
               "/images/patru2.jpg",
               "/images/patru3.jpg",
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

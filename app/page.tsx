import React from "react";
import HeroSection from "@/components/hotel/HeroSection";
import RoomsPreview from "@/components/hotel/RoomsPreview";
import AmenitiesSection from "@/components/hotel/AmenitiesSection";
import LocationSection from "@/components/hotel/LocationSection";

export default function HomePage() {
     return (
          <>
               <HeroSection />
               <RoomsPreview />
               <AmenitiesSection />
               <LocationSection />
          </>
     );
}

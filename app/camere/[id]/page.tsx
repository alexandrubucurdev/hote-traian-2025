import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { rooms } from "@/lib/data/rooms";
import RoomDetailsClient from "@/components/rooms/RoomDetailsClient"; // Importăm componenta creată mai sus

interface RoomPageProps {
     params: {
          id: string;
     };
}

// 1. GENERARE METADATA (SEO) - Rămâne pe server
export async function generateMetadata({
     params,
}: RoomPageProps): Promise<Metadata> {
     const room = rooms.find((r) => r.id === params.id);

     if (!room) {
          return {
               title: "Cameră negăsită",
          };
     }

     return {
          title: `${room.name} | Hotel Traian Brașov`,
          description: room.shortDescription,
     };
}

// 2. GENERARE STATICĂ (Performanță) - Rămâne pe server
export async function generateStaticParams() {
     return rooms.map((room) => ({
          id: room.id,
     }));
}

// 3. COMPONENTA SERVER
export default function RoomPage({ params }: RoomPageProps) {
     // Găsim camera
     const room = rooms.find((r) => r.id === params.id);

     // Dacă nu există, 404
     if (!room) {
          return notFound();
     }

     // Randăm componenta de client care conține imaginile interactive
     return <RoomDetailsClient room={room} />;
}

"use client";

import { useState } from "react";
import { getItinerary } from "./actions";
import HeaderImg from "./assets/header-travel.svg";
import TravelForm from "./components/TravelForm";
import ItineraryDetails from "./components/ItineraryDetails";
import { FormData, Itinerary } from "./types";
import Image from "next/image";

// Force the page to be dynamic and allow streaming responses up to 30 seconds
export const dynamic = "force-dynamic";
export const maxDuration = 30;

export default function Home() {
  const [generation, setGeneration] = useState<Itinerary | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleGetItinerary = async (formData: FormData) => {
    console.log({ formData });
    setIsLoading(true);
    const { itinerary } = await getItinerary(formData);
    setGeneration(itinerary);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <header className="text-white p-6 text-center">
        <h1 className="flex flex-col items-center gap-4 text-6xl font-bold tracking-tight text-gray-700 sm:text-6xl">
          <Image src={HeaderImg} className="w-32 h-32" alt="itinerary" />
          <span>Travel AI</span>
        </h1>
        <h2 className="text-4xl text-gray-700 sm:text-6xl">
          Build your itinerary
        </h2>
        <div className="mt-6 text-2xl leading-8 text-gray-900">
          Tired of Planning Trips? Take the Stress Out of Travel with Our
          Itinerary Planner!
        </div>
      </header>
      <main className="container mx-auto mt-6 p-6">
        <TravelForm onSubmit={handleGetItinerary} isLoading={isLoading} />
        {generation && <ItineraryDetails itinerary={generation} />}
        <div className="flex flex-wrap -mx-4 justify-stretch items-stretch">
          <div className="w-full md:w-1/3 px-4 mb-8 flex-grow">
            <div className="bg-white shadow-lg rounded-lg p-6 h-full">
              <h2 className="text-2xl font-bold mb-4">Create Your Itinerary</h2>
              <p className="text-gray-600 mb-4">
                Start planning your trip by adding destinations, activities, and
                more.
              </p>
              <button className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-900">
                Get Started
              </button>
            </div>
          </div>

          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white shadow-lg rounded-lg p-6 h-full">
              <h2 className="text-2xl font-bold mb-4">Popular Destinations</h2>
              <p className="text-gray-600 mb-4">
                Explore the top travel destinations recommended by our
                community.
              </p>
              <button className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-900">
                Explore
              </button>
            </div>
          </div>

          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white shadow-lg rounded-lg p-6 h-full">
              <h2 className="text-2xl font-bold mb-4">Travel Tips</h2>
              <p className="text-gray-600 mb-4">
                Read our expert tips to ensure a smooth and enjoyable trip.
              </p>
              <button className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-900">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white p-6 mt-10">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Travel Itinerary Builder. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

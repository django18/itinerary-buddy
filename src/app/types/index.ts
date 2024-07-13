export type FormData = {
  travelDays: number;
  travelDestination: string;
  travelType: string;
};

export type Itinerary = {
  title: string;
  description: string;
  activities: {
    name: string;
    location: string;
    description: string;
  }[];
};

export type ItineraryDetailsType = {
  itinerary: Itinerary;
};

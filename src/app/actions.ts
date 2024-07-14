"use server";

import { generateObject } from "ai";
import { openai } from "@ai-sdk/openai";
import { z } from "zod";
import { FormData } from "./types";

export async function getItinerary(input: FormData) {
  "use server";

  const { travelDestination, travelDays, travelType } = input;
  const prompt = `Please create a detailed travel itinerary for my trip to ${travelDestination} for ${travelDays} days, focusing on ${travelType} travel. Include daily activities, must-see attractions, local dining options, and relevant travel tips to maximize my experience. Thank you!`;

  const { object: itinerary } = await generateObject({
    model: openai("gpt-4o"),
    system: "You are a travel itinerary planner",
    prompt,
    schema: z.object({
      itinerary: z.object({
        title: z.string().describe("Title of Itinerary."),
        description: z.string().describe("Title of Itinerary."),
        activities: z.array(
          z.object({
            name: z.string().describe("Title of the activity."),
            location: z.string().describe("Location of the activity."),
            description: z.string().describe("Description of the activity."),
          })
        ),
        attractions: z.array(
          z.object({
            name: z.string().describe("Title of the attraction."),
            location: z.string().describe("Location of the attraction."),
            description: z.string().describe("Description of the attraction."),
          })
        ),
        food: z.array(
          z.object({
            name: z.string().describe("Title of the food/place."),
            location: z.string().describe("Location of the activity."),
            description: z.string().describe("Description."),
          })
        ),
      }),
    }),
  });

  return itinerary;
}

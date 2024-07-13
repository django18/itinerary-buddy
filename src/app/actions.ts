"use server";

import { generateObject } from "ai";
import { openai } from "@ai-sdk/openai";
import { z } from "zod";

export async function getItinerary(input) {
  "use server";

  const { travelDestination, travelDays, travelType } = input;
  const prompt = `Generate a ${travelDestination} ${travelType} itinerary for ${travelDays} days`;

  const { object: itinerary } = await generateObject({
    model: openai("gpt-3.5-turbo"),
    system: "You are a smart travel itinerary planner",
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
            img: z.string().describe("Google Image link of the place."),
          })
        ),
      }),
    }),
  });

  return itinerary;
}

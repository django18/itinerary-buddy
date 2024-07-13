import { z } from "zod";

// Schema for an activity
const ActivitySchema = z
  .object({
    name: z.string().describe("The name of the activity"),
    location: z
      .string()
      .describe("The location where the activity takes place"),
    startTime: z
      .string()
      .refine((date) => !isNaN(Date.parse(date)), {
        message: "Invalid date format",
      })
      .describe("The start time of the activity"),
    endTime: z
      .string()
      .refine((date) => !isNaN(Date.parse(date)), {
        message: "Invalid date format",
      })
      .describe("The end time of the activity"),
    description: z
      .string()
      .optional()
      .describe("A brief description of the activity"),
  })
  .describe("An activity in the itinerary");

// Schema for a food recommendation
const FoodRecommendationSchema = z
  .object({
    name: z.string().describe("The name of the food place"),
    type: z.string().describe("The type of food or cuisine"),
    location: z.string().describe("The location of the food place"),
    description: z
      .string()
      .optional()
      .describe("A brief description of the food place"),
  })
  .describe("A food recommendation for the trip");

// Schema for a travel tip
const TravelTipSchema = z
  .object({
    tip: z.string().describe("A travel tip for the trip"),
  })
  .describe("A travel tip");

// Main schema for the travel itinerary
export const TravelItinerarySchema = z
  .object({
    title: z.string().describe("The title of the itinerary"),
    description: z.string().describe("A brief description of the itinerary"),
    activities: z
      .array(ActivitySchema)
      .describe("A list of activities included in the itinerary"),
    foodRecommendations: z
      .array(FoodRecommendationSchema)
      .describe("A list of food recommendations for the trip"),
    travelTips: z
      .array(TravelTipSchema)
      .describe("A list of travel tips for the trip"),
  })
  .describe("The schema for a travel itinerary");

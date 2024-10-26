import { Event } from "@/types/Event";

export const getNewEvents = async (limit: string): Promise<Event[]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/event/get-filtered-event?sortOrder=newest&limit=${limit}`
  );

  // Ensure a successful response
  if (!response.ok) {
    console.error("Failed to fetch new events");
    return []; // Return an empty list if there's an error
  }

  const events: Event[] = await response.json();
  return events;
};

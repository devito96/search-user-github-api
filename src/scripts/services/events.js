import { baseUrl } from "./src/scripts/variables";

async function getEvents(userName) {
    const response = await fetch(`${baseUrl}/${userName}/events`);
    const eventsResponse = await response.json();
    const createAndPushEvents = eventsResponse.filter(event => event.type === 'CreateEvent' || event.type ==='PushEvent').slice(0, 10);
    return await createAndPushEvents
};

export { getEvents }

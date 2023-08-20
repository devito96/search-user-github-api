<<<<<<< HEAD
import { baseUrl } from "../variables";
=======
import { baseUrl } from "../variables.js";
>>>>>>> 3d39bdd2f2ef8e527d34333c1312548947850091

async function getEvents(userName) {
    const response = await fetch(`${baseUrl}/${userName}/events`);
    const eventsResponse = await response.json();
    const createAndPushEvents = eventsResponse.filter(event => event.type === 'CreateEvent' || event.type ==='PushEvent').slice(0, 10);
    return await createAndPushEvents
};

export { getEvents }

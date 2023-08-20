<<<<<<< HEAD
import { baseUrl} from "../variables";
=======
import { baseUrl} from "../variables.js";
>>>>>>> 3d39bdd2f2ef8e527d34333c1312548947850091

async function getUser(userName) {
    const response = await fetch(`${baseUrl}/${userName}`);
    return await response.json();
};

export { getUser }

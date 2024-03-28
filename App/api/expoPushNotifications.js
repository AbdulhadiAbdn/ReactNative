import client from "./client";

const register = (expoPushToken) => client.post("expoPushToken", expoPushToken);

export default { register };

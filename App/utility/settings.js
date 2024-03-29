import * as Updates from "expo-updates";

const settings = {
  dev: {
    baseURL: "http://192.168.0.117:9000/api",
  },
  staging: {
    baseURL: "http://192.168.0.117:9000/api",
  },
  prod: {
    baseURL: "http://192.168.0.117:9000/api",
  },
};

const getCurrentState = () => {
  if (__DEV__) return settings.dev;
  if (Updates.releaseChannel === "staging") return settings.staging;
  return settings.prod;
};

export default getCurrentState();

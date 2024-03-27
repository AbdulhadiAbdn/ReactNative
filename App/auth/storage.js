import * as SecureStore from "expo-secure-store";
import { jwtDecode } from "jwt-decode";

const key = "aythToken";

const storeToken = async (authToken) => {
  try {
    await SecureStore.setItemAsync(key, authToken);
  } catch (error) {
    console.log("Error in storing the token", error);
  }
};

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.log("Error in getting the token", error);
  }
};

const getUser = async () => {
  const token = await getToken();
  return token ? jwtDecode(token) : null;
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log("Error in removing the token", error);
  }
};

export default {
  getToken,
  getUser,
  storeToken,
  removeToken,
};

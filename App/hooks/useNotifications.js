import { useEffect } from "react";
import * as Notifications from "expo-notifications";

import expoNotificationApi from "../api/expoPushNotifications";
import navigation from "../navigation/rootNavigation";

export default useNotifications = () => {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  });
  const registerNotification = async () => {
    try {
      const { granted } = await Notifications.requestPermissionsAsync();
      if (!granted) return;
      const token = await Notifications.getExpoPushTokenAsync();
      expoNotificationApi.register(token);
      Notifications.addNotificationResponseReceivedListener((notifications) =>
        navigation.navigate("Account")
      );
    } catch (error) {
      console.log("Error in getting Expo token", error);
    }
  };
  useEffect(() => {
    registerNotification();
  }, []);
};

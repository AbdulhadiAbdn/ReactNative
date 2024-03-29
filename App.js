import { NavigationContainer } from "@react-navigation/native";
import "core-js/stable/atob";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

import AuthContext from "./App/auth/context";
import authStorage from "./App/auth/storage";
import OfflineNotice from "./App/components/OfflineNotice";
import theme from "./App/config/theme";
import AppNavigator from "./App/navigation/AppNavigator";
import AuthNavigator from "./App/navigation/authNavigator";
import { navigationRef } from "./App/navigation/rootNavigation";

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const restoreUser = async () => {
      const user = await authStorage.getUser();
      if (user) setUser(user);
    };

    const loadData = async () => {
      try {
        await restoreUser();
        setIsReady(true);
      } catch (error) {
        console.log(error);
      }
    };

    loadData();

    // Prevent SplashScreen from auto-hiding
    SplashScreen.preventAutoHideAsync();

    // Hide SplashScreen when your component is ready
    if (isReady) {
      SplashScreen.hideAsync();
    }

    // Cleanup function to hide SplashScreen when unmounting
    return () => {
      SplashScreen.hideAsync();
    };
  }, [isReady]);

  if (!isReady) {
    // Render a loading indicator here if needed
    return null;
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer ref={navigationRef} theme={theme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

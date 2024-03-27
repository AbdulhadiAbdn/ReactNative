import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import "core-js/stable/atob";
import * as SplashScreen from "expo-splash-screen";

import theme from "./App/config/theme";
import AppNavigator from "./App/navigation/AppNavigator";
import OfflineNotice from "./App/components/OfflineNotice";
import AuthNavigator from "./App/navigation/authNavigator";
import AuthContext from "./App/auth/context";
import authStorage from "./App/auth/storage";

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
      <NavigationContainer theme={theme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

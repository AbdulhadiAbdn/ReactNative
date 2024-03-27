import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import "core-js/stable/atob";
import AppLoading from "expo-app-loading";

import theme from "./App/config/theme";
import AppNavigator from "./App/navigation/AppNavigator";
import OfflineNotice from "./App/components/OfflineNotice";
import AuthNavigator from "./App/navigation/authNavigator";
import AuthContext from "./App/auth/context";
import authStorage from "./App/auth/storage";

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreToken = async () => {
    const token = await authStorage.getToken();
    if (!token) return;

    setUser(jwtDecode(token));
  };

  if (!isReady)
    return (
      <AppLoading
        startAsync={restoreToken}
        onFinish={() => setIsReady(true)}
        onError={(error) => console.log(error)}
      />
    );

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer theme={theme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

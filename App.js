import { NavigationContainer } from "@react-navigation/native";
import theme from "./App/config/theme";
import AppNavigator from "./App/navigation/AppNavigator";
import OfflineNotice from "./App/components/OfflineNotice";
import AuthNavigator from "./App/navigation/authNavigator";
import { useEffect, useState } from "react";
import AuthContext from "./App/auth/context";
import authStorage from "./App/auth/storage";
import { jwtDecode } from "jwt-decode";
import "core-js/stable/atob";

export default function App() {
  const [user, setUser] = useState();

  const restoreToken = async () => {
    const token = await authStorage.getToken();
    if (!token) return;

    setUser(jwtDecode(token));
  };

  useEffect(() => {
    restoreToken();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer theme={theme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

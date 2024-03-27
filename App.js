import { NavigationContainer } from "@react-navigation/native";
import theme from "./App/config/theme";
import AppNavigator from "./App/navigation/AppNavigator";
import OfflineNotice from "./App/components/OfflineNotice";

export default function App() {
  return (
    <>
      <OfflineNotice />
      <NavigationContainer theme={theme}>
        <AppNavigator />
      </NavigationContainer>
    </>
  );
}

import { FlatList, StyleSheet, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import useAuth from "../auth/useAuth";
import Icon from "../components/Icon";
import Screen from "../components/Screen";
import LineSeparator from "../components/lists/LineSeparator";
import ListItem from "../components/lists/ListItem";
import colors from "../config/colors";

const accountList = [
  {
    title: "My Listing",
    icon: "format-list-bulleted",
    color: colors.primary,
  },
  {
    title: "My Account",
    icon: "email",
    color: colors.secondary,
  },
];

function AccountScreen({ navigation }) {
  const { user, logout } = useAuth();

  return (
    <Screen style={styles.screen}>
      <View style={{ marginBottom: 30 }}>
        <ListItem
          title={user.name}
          subtitle={user.email}
          image={require("../assets/abdul.jpg")}
        />
      </View>
      <View style={{ marginBottom: 30 }}>
        <FlatList
          data={accountList}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate(item.title)}
            >
              <ListItem
                title={item.title}
                iconComponents={
                  <Icon name={item.icon} backgroundColor={item.color} />
                }
              />
            </TouchableWithoutFeedback>
          )}
          ItemSeparatorComponent={LineSeparator}
        />
      </View>
      <ListItem
        title="Logout"
        iconComponents={<Icon name="logout" backgroundColor="#E4E111" />}
        onPress={() => logout()}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
});

export default AccountScreen;

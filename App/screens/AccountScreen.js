import React from "react";
import Screen from "../components/Screen";
import ListItem from "../components/lists/ListItem";
import { View, StyleSheet, FlatList } from "react-native";
import colors from "../config/colors";
import Icon from "../components/Icon";
import LineSeparator from "../components/lists/LineSeparator";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

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
  return (
    <Screen style={styles.screen}>
      <View style={{ marginBottom: 30 }}>
        <ListItem
          title="Abdulhadi Abdn"
          subtitle="abdulhadiabdn@gmail.com"
          image={require("../assets/mosh.jpg")}
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

import React, { useState } from "react";
import Screen from "../components/Screen";
import { FlatList } from "react-native";
import {
  LineSeparator,
  ListItem,
  ListItemDeleteAction,
} from "../components/lists";

function MessagesScreen() {
  const initialMessages = [
    {
      id: 1,
      title: "t1",
      description: "d1",
      image: require("../assets/mosh.jpg"),
    },
    {
      id: 2,
      title: "t2",
      description: "d2",
      image: require("../assets/mosh.jpg"),
    },
  ];
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setrefReshing] = useState(false);

  const handleDelete = (message) =>
    setMessages(messages.filter((m) => m.id !== message.id));

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={LineSeparator}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subtitle={item.description}
            image={item.image}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        refreshing={refreshing}
        onRefresh={() =>
          setMessages([
            {
              id: 2,
              title: "t2",
              description: "d2",
              image: require("../assets/mosh.jpg"),
            },
          ])
        }
      />
    </Screen>
  );
}

export default MessagesScreen;

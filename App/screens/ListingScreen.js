import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import Screen from "../components/Screen";
import Card from "../components/Card";

import listingApi from "../api/listings";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";

function ListingScreen({ navigation }) {
  const { data: listings, error, loading, request: loadListings } = useApi(
    listingApi.getListings
  );

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <Screen>
      <View style={{ paddingHorizontal: 20 }}>
        {error && (
          <>
            <AppText>Couldn't load the listing. Retry Again</AppText>
            <AppButton title="Retry" onPress={loadListings} />
          </>
        )}
        <ActivityIndicator visible={loading} />
        <FlatList
          data={listings}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableWithoutFeedback
              onPress={() =>
                navigation.navigate({
                  name: "ListingDetails",
                  params: { item },
                })
              }
            >
              <Card
                title={item.title}
                subtitle={"$" + item.price}
                imageURL={item.images[0].url}
                thumbnailURL={item.images[0].thumbnailUrl}
              />
            </TouchableWithoutFeedback>
          )}
        />
      </View>
    </Screen>
  );
}

export default ListingScreen;

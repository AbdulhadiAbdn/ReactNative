import React, { useRef } from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import ImageInput from "./ImageInput";

function ImageInputList({ ImageUris = [], onAdd, onDelete }) {
  const scrollViewRef = useRef();

  return (
    <View>
      <ScrollView
        horizontal={true}
        ref={scrollViewRef}
        onContentSizeChange={() => scrollViewRef.current.scrollToEnd()}
      >
        <View style={styles.container}>
          {ImageUris.map((image) => (
            <ImageInput
              key={image}
              onChangeImage={() => onDelete(image)}
              source={image}
            />
          ))}
          <ImageInput onChangeImage={(image) => onAdd(image)} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});

export default ImageInputList;

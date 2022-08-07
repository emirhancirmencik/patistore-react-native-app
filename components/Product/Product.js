import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Product = ({ item }) => {
  console.log(item);
  return (
    <View styles={styles.container}>
      <Text>{item.title}</Text>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gray",
    flex: 1,
  },
});

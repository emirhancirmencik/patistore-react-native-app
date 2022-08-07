import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Product = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.productImage}>
          <Image source={{ uri: item.imgURL }} style={styles.image} />
        </View>
        <View style={styles.productBody}>
          <View>
            <Text style={styles.productTitle}>{item.title}</Text>
          </View>

          <View>
            <Text style={styles.productPrice}>{item.price}</Text>
          </View>
          {!item.inStock && (
            <View>
              <Text style={styles.productInStock}>STOKTA YOK</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "contain",
  },
  container: {
    width: "45%",
    flex: 1,
    padding: 5,
    height: 350,
  },
  inner: {
    flex: 1,
    padding: 10,
    backgroundColor: "#DDD",
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  productBody: {
    flex: 0.5,
    paddingVertical: 10,
    justifyContent: "space-between",
  },
  productImage: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 10,
  },
  productInStock: {
    color: "red",
    fontSize: 16,
    fontWeight: "800",
  },
  productPrice: {
    color: "#888",
    fontSize: 16,
    fontWeight: "800",
  },
  productTitle: {
    fontSize: 20,
    fontWeight: "800",
  },
});

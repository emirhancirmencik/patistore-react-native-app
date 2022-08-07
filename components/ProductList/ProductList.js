import { FlatList, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import Products from "../../data/products.json";
import Product from "../Product";

const ProductList = ({ filter }) => {
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    let filtered = Products.filter((item) => {
      return Object.keys(item).some((key) =>
        item[key].toString().toLowerCase().includes(filter.toLowerCase())
      );
    });
    setFilteredList(filtered);
  }, [filter]);

  const renderItem = (item) => {
    return <Product item={item.item} />;
  };

  return (
    <FlatList
      data={filteredList}
      renderItem={renderItem}
      style={styles.list}
      keyExtractor={(item) => item.id}
      numColumns={2}
      horizontal={false}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ProductList;

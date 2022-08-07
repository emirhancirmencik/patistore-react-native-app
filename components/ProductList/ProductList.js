import { View, Text } from "react-native";
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
    console.log(filter);
  }, [filter]);

  return (
    <View>
      {filteredList.map((item) => {
        return <Product item={item} key={item.id} />;
      })}
    </View>
  );
};

export default ProductList;

import { StyleSheet, Text, View, TextInput } from "react-native";
import { useState } from "react";
import ProductList from "./components/ProductList";

export default function App() {
  const [search, setSearch] = useState("");
  function handleChange(e) {
    setSearch(e);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>PATISTORE</Text>
      <TextInput
        style={styles.search}
        autoFocus={false}
        onChangeText={(e) => handleChange(e)}
        value={search}
        placeholder="Ara..."
        selectionColor={"#fff"}
      />
      <ProductList filter={search} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 30,
    fontWeight: "700",
    color: "purple",
    marginTop: 30,
    marginLeft: 10,
  },
  search: {
    backgroundColor: "gray",
    color: "white",
    borderRadius: 15,
    paddingLeft: 10,
    paddingVertical: 5,
    margin: 5,
  },
});

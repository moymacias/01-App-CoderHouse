import React from "react";
import { FlatList } from "react-native";
import GridItem from "../components/GridItem";
import { CATEGORIES } from "../data/categories";

const CategoriesScreen = ({ navigation }) => {
  const handleSelectedCategory = (item) => {
    navigation.navigate("Bread", {
      categoryID: item.id,
      name: item.title,
    });
  };

  const renderGridItem = ({ item }) => (
    <GridItem item={item} onSelected={handleSelectedCategory} />
  );

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
 
import { FlatList } from "react-native";
import React from "react";
import BreadItem from "../components/BreadItem";
import { BREADS } from "../data/bread";

const CategoryBreadScreen = ({ navigation, route }) => {
  const breads = BREADS.filter(
    (bread) => bread.category === route.params.categoryID
  );

  const handleSelectedCategory = (item) => {
    navigation.navigate("Details", {
      productID: item.id,
      name: item.name,
    });
  };

  const renderBreadItem = ({ item }) => (
    <BreadItem item={item} onSelected={handleSelectedCategory} />
  );

  return (
    <FlatList
      data={breads}
      keyExtractor={(item) => item.id}
      renderItem={renderBreadItem}
    />
  );
};

export default CategoryBreadScreen;

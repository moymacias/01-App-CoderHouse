import React, { useEffect } from "react";
import { FlatList } from "react-native";
import BreadItem from "../components/BreadItem";
import { BREADS } from "../data/bread";

import { useSelector, useDispatch, connect } from "react-redux";
import { filteredBread, selectBread } from "../store/actions/bread.action";

const CategoryBreadScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const categoryBreads = useSelector((state) => state.breads.filteredBread);
  const category = useSelector((state) => state.categories.selected);

  useEffect(() => {
    dispatch(filteredBread(category.id));
  }, []);

  const handleSelectedCategory = (item) => {
    dispatch(selectBread(item.id));
    navigation.navigate("Details", {
      name: item.name,
    });
  };

  /* const breads = BREADS.filter(
    (bread) => bread.category === route.params.categoryID
  ); */

  const renderBreadItem = ({ item }) => (
    <BreadItem item={item} onSelected={handleSelectedCategory} />
  );

  return (
    <FlatList
      data={categoryBreads}
      keyExtractor={(item) => item.id}
      renderItem={renderBreadItem}
    />
  );
};

export default connect()(CategoryBreadScreen);

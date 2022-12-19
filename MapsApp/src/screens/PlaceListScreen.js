import React, { useEffect } from "react";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import PlaceItem from "../components/PlaceItem";

const PlaceListScreen = ({ navigation }) => {
  const places = useSelector((state) => state.places.places);

  useEffect(() => {
    console.log(places);
  }, [places]);

  const renderItem = ({ item }) => (
    <PlaceItem
      title={item.title}
      image={item.image}
      address="123. Street City, Country"
      onSelect={() => navigation.navigate("Detalle")}
    />
  );

  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />
  );
};

export default PlaceListScreen;

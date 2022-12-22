import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Map from "../constants/Map";

const MapPreview = ({ location, style, children }) => {
  const MapPreviewUrl = location
    ? `https://maps.googleapis.com/maps/api/staticmap?center=${location.lat},${location.lng}&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C${location.lat},${location.lng}&key=${Map.API_KEY}`
    : "";

  return (
    <View style={{ ...styles.MapPreview, ...style }}>
      {location ? (
        <Image style={styles.mapImage} source={{ uri: MapPreviewUrl }} />
      ) : (
        children
      )}
    </View>
  );
};

export default MapPreview;

const styles = StyleSheet.create({
  mapPreview: {
    justifyContent: "center",
    alignItems: "center",
  },
  mapImage: {
    width: "100%",
    height: "100%",
  },
});

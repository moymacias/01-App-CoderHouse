import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  ScrollView,
} from "react-native";
import { COLORS } from "../constants";
import { addPlace } from "../store/places.actions";
import { useDispatch } from "react-redux";
import ImageSelector from "../components/ImageSelector";

const NewPlaceScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  const handleTitleChange = (text) => setTitle(text);

  const handleSave = (image) => {
    console.log(image)
    dispatch(addPlace(title, image));
    navigation.navigate("Direcciones");
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.label}>Titulo</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={handleTitleChange}
        />
        <ImageSelector onImage={(image) => handleSave(image)} />
        <Button
          title="Grabar direccion"
          color={COLORS.MAROON}
          onPress={handleSave}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
  label: {
    fontSize: 18,
    marginBottom: 16,
  },
  input: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 2,
    paddingVertical: 4,
  },
});

export default NewPlaceScreen;

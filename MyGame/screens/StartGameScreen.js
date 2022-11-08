import {
  BackHandler,
  Pressable,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import Card from "../components/Card";
import colors from "../constants/colors";
import Input from "../components/Input";

const StartGameScreen = () => {
  const [value, setValue] = useState("");

  const handleInput = (text) => {
    console.log(text);
    setValue(text.replace(/[^0-9]/g, ""));
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Card>
          <Text>Elije un numero</Text>
          <Input value={value} onChangeText={handleInput} />
          <View style={styles.buttonContainer}>
            <Pressable style={styles.cleanButton}>
              <Text style={{ color: "white" }}>Limpiar</Text>
            </Pressable>
            <Pressable
              style={{
                ...styles.cleanButton,
                ...styles.confirmButton,
              }}
            >
              <Text style={{ color: "white" }}>Confirmar</Text>
            </Pressable>
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    marginTop: 50,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  cleanButton: {
    backgroundColor: colors.secondary,
    height: 35,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  confirmButton: {
    backgroundColor: colors.primary,
    width: 80,
  },
});

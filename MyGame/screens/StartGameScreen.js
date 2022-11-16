import {
  Pressable,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Keyboard,
  Button,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Card from "../components/Card";
import colors from "../constants/colors";
import Input from "../components/Input";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const StartGameScreen = ({ onStartGame }) => {
  const [value, setValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState("");

  const handleConfirmation = () => {
    const choseNumber = parseInt(value);
    if (choseNumber === NaN || choseNumber <= 0 || choseNumber > 99) return;

    setConfirmed(true);
    setSelectedNumber(choseNumber);
    setValue("");
  };

  const handleResetInput = () => {
    setValue("");
    setConfirmed(false);
  };

  const handleInput = (text) => {
    console.log(text);
    setValue(text.replace(/[^0-9]/g, ""));
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "height" : "padding"}
    >
      <ScrollView>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.screen}>
            <Card>
              <Text>Elije un numero</Text>
              <Input value={value} onChangeText={handleInput} />
              <View style={styles.buttonContainer}>
                <Pressable
                  style={styles.cleanButton}
                  onPress={handleResetInput}
                >
                  <Text style={{ color: "white" }}>Limpiar</Text>
                </Pressable>
                <Pressable
                  style={{
                    ...styles.cleanButton,
                    ...styles.confirmButton,
                  }}
                  onPress={handleConfirmation}
                >
                  <Text style={{ color: "white" }}>Confirmar</Text>
                </Pressable>
              </View>
            </Card>
            {confirmed && (
              <Card newStyles={{ marginTop: 50, width: 150 }}>
                <Text>Tu numero</Text>
                <Text>{selectedNumber}</Text>
                <Button
                  title="Empezar juego"
                  onPress={() => onStartGame(selectedNumber)}
                />
              </Card>
            )}
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
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
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  confirmButton: {
    backgroundColor: colors.primary,
    width: "40%",
  },
});

import { Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";

const GameScreen = ({ handleResult }) => {
  const [currentGuess, setCurrentGuess] = useState();

  useEffect(() => {
    setCurrentGuess(Math.floor(Math.random() * (100 - 1) + 1));
  }, []);

  return (
    <View style={styles.container}>
      <Text>La suposicion del oponente</Text>
      <Text>{currentGuess}</Text>
      <Card newStyles={styles.buttonContainer}>
        <Button
          title="Menor"
          onPress={() => handleResult("lower", currentGuess)}
        />
        <Button
          title="Mayor"
          onPress={() => handleResult("greater", currentGuess)}
        />
      </Card>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    width: "80%",
  },
});

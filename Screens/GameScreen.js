import { useState } from "react";
import { Text, View, StyleSheet, SafeAreaView, Alert } from "react-native";
import Title from "../Components/ui/Title";

import ContainerNumber from "../Components/game/ContainerNumber";
import PrimaryButton from "../Components/ui/PrimaryButton";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber }) {
  const initialGuess = generateRandomBetween(
    minBoundary,
    maxBoundary,
    userNumber
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  function nextGuessHandler(direction) {
    // direct => lower or Greater
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie", "you know that this is wrong...", [
        { text: " Sorry !", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRnNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRnNumber);
  }
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess !</Title>
      <ContainerNumber>{currentGuess}</ContainerNumber>
      <View>
        <Text>Higher or lower ?</Text>
        <View>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
            +
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
            -
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default GameScreen;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },
});

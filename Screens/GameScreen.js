import { useState } from "react";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import Title from "../Components/ui/Title";

import ContainerNumber from "../Components/game/ContainerNumber";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

function GameScreen({ userNumber }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess !</Title>
      <ContainerNumber>{currentGuess}</ContainerNumber>
      <View>
        <Text>Higher or lower ?</Text>
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

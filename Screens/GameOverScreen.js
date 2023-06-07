import { Text, View, Image, StyleSheet } from "react-native";
import Title from "../Components/ui/Title";

function GameOverScreen() {
  return (
    <View>
      <Title>GAME OVER</Title>
      <Image source={require("../assets/success.png")} />
    </View>
  );
}

export default GameOverScreen;

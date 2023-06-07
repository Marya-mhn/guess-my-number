import { Text, View, Image, StyleSheet } from "react-native";
import Title from "../Components/ui/Title";
import Colors from "../constants/colors";

function GameOverScreen() {
  return (
    <View>
      <Title>GAME OVER</Title>
      <View>
        <Image source={require("../assets/success.png")} />
      </View>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  imageContainer: {
    width: 400,
    height: 400,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: Colors.primary800,
  },
});

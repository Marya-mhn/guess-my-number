import { Text, View, Image, StyleSheet, Dimensions } from "react-native";
import Title from "../Components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../Components/ui/PrimaryButton";

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../assets/success.png")} />
      </View>
      <Text style={styles.text}>
        Your phone needed <Text>{roundsNumber}</Text> rounds to guess the number{" "}
        <Text>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start a new game !</PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: deviceWidth < 380 ? 150 : 300,
    height: deviceWidth < 380 ? 150 : 300,
    borderRadius: deviceWidth < 380 ? 75 : 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 150,
  },
  text: {
    marginBottom: 12,
    fontSize: 24,
    fontWeight: "bold",
  },
  textInside: {
    color: Colors.accent500,
  },
});

import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../Components/PrimaryButton";

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
      >
        {/* <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton>Confirm</PrimaryButton> */}
      </TextInput>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: 100,
    backgroundColor: "#72063C",
    marginHorizontal: 24,
    borderRadius: 8,
    // to add shadow on adroid
    elevation: 8,
    // to add shadow on iOS
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#DDB52F",
    borderBottomWidth: 2,
    color: "#DDB52F",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
});

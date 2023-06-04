import { View, Text, Pressable } from "react-native";

function PrimaryButton(props) {
  return (
    <Pressable>
      <View>
        <Text>{props.children}</Text>
      </View>
    </Pressable>
  );
}

export default PrimaryButton;

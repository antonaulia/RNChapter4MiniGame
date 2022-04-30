import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton(props, onPress) {
  // press function moce to onPress Props
  // function buttonPressedHandler() {
  //   console.log("Button Pressed " + props.children);
  // }
  return (
    <View style={styles.buttonContainerOuter}>
      <Pressable
        onPress={props.onPress}
        android_ripple={{ color: "grey" }}
        style={({ pressed }) =>
          pressed
            ? [styles.pressedButtonContainer, styles.buttonContainer]
            : styles.buttonContainer
        }
      >
        <View>
          <Text style={styles.buttonText}>{props.children}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  pressedButtonContainer: {
    opacity: 0.5,
  },
  buttonContainerOuter: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
    flex : 1
  },
  buttonContainer: {
    backgroundColor: "#4e0329",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowOffset: { width: 2, height: 2 },
  },
  buttonText: {
    color: "yellow",
    textAlign: "center",
  },
});

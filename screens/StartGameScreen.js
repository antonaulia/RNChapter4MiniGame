import { View, Text, StyleSheet, TextInput } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.textCenter}>Input Your Number :</Text>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType={"number-pad"}
      />
      <View style={styles.buttonContainer}>
        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton>Confirm</PrimaryButton>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  textCenter :{
    color : 'white',
    textAlign : 'center'
  },
  inputContainer: {
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    justifyContent: 'space-around',
    alignItems : 'center',
    backgroundColor: "#72063c",
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 2 },
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    fontWeight: "bold",
    marginVertical: 8,
    borderBottomWidth: 2,
    borderBottomColor: "#ddb52f",
    color: "#ddb52f",
    textAlign: 'center'
  },
  buttonContainer :{
      flexDirection : 'row',
      justifyContent:'space-evenly'
  }
});

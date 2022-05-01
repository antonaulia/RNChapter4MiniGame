import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import { clickProps } from "react-native-web/dist/cjs/modules/forwardedProps";

function StartGameScreen(props) {
  const [enteredNumber, setEnteredNumber] = useState('')

  function numberInputHandler(enteredNumber){
    setEnteredNumber(enteredNumber)
  }

  function resetNumberHandler(){
    setEnteredNumber('')
  }

  function confirmInputHandler(){
    const chosenNumber = parseInt(enteredNumber)
    if ((isNaN(chosenNumber)) || (chosenNumber <= 0) || (chosenNumber > 99) )  {
       Alert.alert('Invalid Number !',
       'Number has to be a number between 0 and 99 ',
       [{text: 'Okay !', style:'destructive', onPress: resetNumberHandler}])
      return;
      }
    props.onNumberPicked(chosenNumber)

  }

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.textCenter}>Input Your Number :</Text>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType={"number-pad"}
        onChangeText={numberInputHandler}
        value={enteredNumber}
      />
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={resetNumberHandler}>Reset</PrimaryButton>
        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
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

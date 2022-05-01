import { Text, View, StyleSheet, Alert, FlatList } from "react-native";
import Title from "../components/Title";
import { useState, useEffect } from "react";
import NumberContainer from "../components/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBound = 1;
let maxBound = 100;

function GameScreen(props) {
  const initialGuess = generateRandomBetween(1, 100, props.userChosenNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessArray, setGuessArray] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === props.userChosenNumber) {
      props.gamesIsOverHandler(), (maxBound = 100);
      minBound = 1;
    }
  }, [currentGuess, props.userChosenNumber, props.gamesIsOverHandler]);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < props.userChosenNumber) ||
      (direction === "greater" && currentGuess > props.userChosenNumber)
    ) {
      Alert.alert("Don't Lie", "You know this is wrong ", [
        { text: "Sorry !", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBound = currentGuess;
    } else {
      minBound = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBound,
      maxBound,
      currentGuess
    );
    setGuessArray((prevGuessArray) => [...guessArray, newRndNumber]);
    setCurrentGuess(newRndNumber);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower ?</Text>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
            -
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
            +
          </PrimaryButton>
        </View>
      </View>
      <View style={styles.logContainer}>
        {/* should render logs here */}
        <Text>logs :</Text>
        <FlatList
          data={guessArray}
          renderItem={(itemData) => (
            <Text>
              #{itemData.index}. Your Computer Guess is {itemData.item}
            </Text>
          )}
          keyExtractor={(item) => {
            item;
          }}
        />
        <Text>asd</Text>
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  logContainer: {
    // flex: 1,
  },
});

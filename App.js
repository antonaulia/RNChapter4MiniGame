import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  function userNumberHandler(userNumber) {
    setGameIsOver(false);
    setUserNumber(userNumber);
  }

  function gamesIsOverHandler() {
    setGameIsOver(true);
  }

  let screen = <StartGameScreen onNumberPicked={userNumberHandler} />;
  if (userNumber) {
    screen = (
      <GameScreen
        userChosenNumber={userNumber}
        gamesIsOverHandler={gamesIsOverHandler}
      />
    );
  }

  if (userNumber && gameIsOver) {
    screen = <GameOverScreen />;
  }

  return (
    <LinearGradient colors={["#3b021f", "#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/dices.jpeg")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});

import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";

function GameOverScreen(props) {
  return (
    <View style={styles.screenContainer}>
      <Title>Game Over !</Title>
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={props.onRestartGame}>Restart !</PrimaryButton>
      </View>
        
        <Text>whatever</Text>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 24,
  },
  buttonContainer :{
      justifyContent : 'flex-start',
      flexDirection : "row"
  }
});

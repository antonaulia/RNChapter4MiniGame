import { Text,View, StyleSheet } from "react-native";
import Title from "../components/Title";

function GameOverScreen(){
    return(
        <View style={styles.screenContainer}>
            <Title>Game Over !</Title>
        </View>
        
    )
}

export default GameOverScreen;

const styles = StyleSheet.create({
    screenContainer :{
        flex : 1
    }
})
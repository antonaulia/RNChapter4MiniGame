import { View, Text, StyleSheet } from "react-native";

function NumberContainer(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{props.children}</Text>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
    container : {
        borderWidth : 4,
        borderColor : 'yellow',
        padding : 24,
        margin: 24,
        borderRadius : 8,
        alignItems : 'center',
        justifyContent : 'center'
    },
    numberText:{
        color : 'yellow'
    }
});

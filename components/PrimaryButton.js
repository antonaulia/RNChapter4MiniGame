import { View, Text, Pressable, StyleSheet } from "react-native";


function PrimaryButton(props) {
  function buttonPressedHandler(props){
    console.log('Button Pressed')
  }
  return (
    <Pressable onPress={buttonPressedHandler}>
      <View>
        <Text>{props.children}</Text>
      </View>
    </Pressable>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    
})
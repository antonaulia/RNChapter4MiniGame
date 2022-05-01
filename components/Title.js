import { Text, StyleSheet } from "react-native";

function Title(props) {
  return <Text style={styles.title}>{props.children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 24,
    color: "yellow",
    textAlign: "center",
    padding: 12,
    margin: 12,
    borderWidth: 2,
    borderColor: "white",
  },
});

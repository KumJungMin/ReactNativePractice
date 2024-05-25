import { StyleSheet, View } from "react-native";

export default function App() {
  return (
    <View>
      <View style={styles.item}></View>
      <View style={styles.item}></View>
      <View style={styles.item}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    width: 200,
    height: 200,
    backgroundColor: "red",
    borderWidth: 2,
  },
});

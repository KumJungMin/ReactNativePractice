import { StyleSheet, View } from "react-native";

export default function App() {
  return (
    // View의 기본값은 Flex Container이다.
    <View style={styles.container}>
      <View style={styles.item}></View>
      <View style={styles.item}></View>
      <View style={styles.item}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  // 사이즈를 조절할 떄 px이 아닌 flex를 사용한다.
  // -> 다양한 화면 크기에 대응하기 위함이
  container: {
    flex: 1,
  },
  item: {
    flex: 1,
    backgroundColor: "red",
    borderWidth: 2,
  },
});

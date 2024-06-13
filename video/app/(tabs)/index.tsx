import { StyleSheet, SafeAreaView, Text } from 'react-native';

export default function HomeScreen() {
  return (
  <SafeAreaView>
    <Text style={styles.font}>
      안녕!
    </Text>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  font: {
    fontSize: 20,
    color: 'white',
  },
});
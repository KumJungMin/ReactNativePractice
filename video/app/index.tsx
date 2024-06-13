import { StyleSheet, SafeAreaView, Text } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
  <SafeAreaView style={styles.container}>
    <Text style={styles.font}>
      안녕!
    </Text>
    <Link href="/home">Home</Link>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  font: {
    fontSize: 20,
    color: 'blue',
  },
});
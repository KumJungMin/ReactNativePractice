import { StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
  <SafeAreaView>
    <ScrollView contentContainerStyle={{ height: '100%'}}>
      <Text style={styles.font}>Hello, world!</Text>
      <StatusBar style="auto" />
      <TouchableOpacity onPress={() => alert('Hello, world!')}>
        <Text>Press me!</Text>
      </TouchableOpacity>
    </ScrollView>
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
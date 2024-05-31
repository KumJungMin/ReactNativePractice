/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput} from 'react-native';

function App(): React.JSX.Element {
  const [name, setName] = React.useState('');

  // react와 달리 이벤트에 e.target.value를 사용하지 않고 text를 사용
  const handleChangeInput = (text: string) => {
    setName(text);
  };

  // SafeAreaView: 노치 디자인이나 화면의 경계를 벗어나는 요소를 자동으로 제거해주는 컴포넌트
  return (
    <SafeAreaView style={styles.container}>
      <Text> 이름: {name}</Text>
      <TextInput
        placeholder="Enter your name"
        onChangeText={handleChangeInput}
      />
    </SafeAreaView>
  );
}

// marginHorizontal: 좌우 마진
// marginVertical: 상하 마진
//웹과 달리 px 단위를 사용하지 않고 숫자를 사용
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
  },
});

export default App;

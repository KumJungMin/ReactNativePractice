import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

// React는 component, api를 베이직하게 제공하기에, 추가적인 기능은 third-party library(제 3자) 패키지를 사용해야 함
// expo에서 제공하는 패키지로 해결가능!(관리가 잘되고 버그가 적음)
// https://docs.expo.dev/versions/latest/sdk/accelerometer/

export default function App() {
  /**
   * View: container for other components(div 대신 사용)
   * Text: text component(h1, h2, p 대신 사용)
   * StatusBar(상태 표시줄)
   * : 상태 표시줄은 react native에서 import하지 않고, third-party library(제 3자) 패키지임
   * : status bar component(웹사이트의 상단에 있는 주소창, 시간, 배터리 등을 표시하는 부분)
   * : statusBar 컴포넌트 선언 위치가 어디든지 간에, 상태 표시줄은 항상 화면 상단에 표시됨
   * */

  /**
   * style
   * : CSS를 사용할 수 있음
   * : 일부 스타일은 사용할 수 없음(ex. border)
   * */

  const [date, setDate] = useState(new Date(1598051730000));

  const handleChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello!!</Text>
      <StatusBar style="light" />

      <DateTimePicker
        testID="dateTimePicker"
        value={date}
        is24Hour={true}
        onChange={handleChange}
      />
    </View>
  );
}

/**
 * StyleSheet.create
 * : 자동 완성 기능을 제공
 * : 객체에는 key-value 형태로 스타일을 작성
 * : 스타일을 한 곳에서 관리할 수 있음
 * */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    color: "blue",
  },
});
